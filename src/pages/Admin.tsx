import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Mail, Phone, Building, Calendar, Shield, User, MessageSquare, Filter, Download, Search, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Contact {
  id: string;
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  type: string;
  createdAt: any;
  status: string;
}

const Admin = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchTerm, statusFilter]);

  const fetchContacts = async () => {
    try {
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const contactsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Contact[];
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    let filtered = contacts;

    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(contact => contact.status === statusFilter);
    }

    setFilteredContacts(filtered);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: { label: 'New', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      read: { label: 'Read', color: 'bg-green-100 text-green-800 border-green-200' },
      responded: { label: 'Responded', color: 'bg-purple-100 text-purple-800 border-purple-200' },
      pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || 
                  { label: status, color: 'bg-gray-100 text-gray-800 border-gray-200' };

    return (
      <Badge variant="outline" className={`${config.color} border`}>
        {config.label}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const typeConfig = {
      partnership: { label: 'Partnership', color: 'bg-green-100 text-green-800 border-green-200' },
      workshop: { label: 'Workshop', color: 'bg-blue-100 text-blue-800 border-blue-200' },
      general: { label: 'General', color: 'bg-gray-100 text-gray-800 border-gray-200' },
      course: { label: 'Course Inquiry', color: 'bg-purple-100 text-purple-800 border-purple-200' }
    };

    const config = typeConfig[type as keyof typeof typeConfig] || 
                  { label: type, color: 'bg-gray-100 text-gray-800 border-gray-200' };

    return (
      <Badge variant="outline" className={`${config.color} border`}>
        {config.label}
      </Badge>
    );
  };

  const exportContacts = () => {
    const csvContent = [
      ['Name', 'Email', 'Organization', 'Subject', 'Message', 'Type', 'Status', 'Date'],
      ...filteredContacts.map(contact => [
        contact.name,
        contact.email,
        contact.organization || '',
        contact.subject,
        contact.message.replace(/,/g, ';'),
        contact.type,
        contact.status,
        contact.createdAt?.toDate?.().toLocaleDateString() || 'Unknown'
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cyber-ed-contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contact inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-700 text-sm mb-4">
            <Shield className="h-4 w-4" />
            Admin Dashboard
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Inquiries</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage and respond to all messages received through the contact form
          </p>
        </div>

        {/* Stats and Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                  <p className="text-3xl font-bold text-gray-900">{contacts.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-green-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Messages</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {contacts.filter(c => c.status === 'new').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Responded</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {contacts.filter(c => c.status === 'responded').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {contacts.filter(c => c.status === 'pending').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Controls */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-300"
                  />
                </div>
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="responded">Responded</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <Button 
                onClick={exportContacts}
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contacts List */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Contact Messages ({filteredContacts.length})
            </CardTitle>
            <CardDescription className="text-gray-600">
              Showing {filteredContacts.length} of {contacts.length} inquiries
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredContacts.length === 0 ? (
              <div className="text-center py-12">
                <Mail className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">No contact inquiries found</p>
                <p className="text-gray-400">
                  {searchTerm || statusFilter !== 'all' ? 'Try adjusting your search or filter' : 'All inquiries will appear here'}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredContacts.map((contact) => (
                  <Card key={contact.id} className="border-0 shadow-sm bg-gray-50/50 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg text-gray-900">{contact.name}</h3>
                              <div className="flex gap-2">
                                {getStatusBadge(contact.status)}
                                {getTypeBadge(contact.type)}
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {contact.email}
                              </div>
                              {contact.organization && (
                                <div className="flex items-center gap-1">
                                  <Building className="h-4 w-4" />
                                  {contact.organization}
                                </div>
                              )}
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {contact.createdAt?.toDate?.().toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                }) || 'Recently'}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Message Content */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2 text-lg">{contact.subject}</h4>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex flex-wrap gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => window.location.href = `mailto:${contact.email}?subject=Re: ${contact.subject}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Reply via Email
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText(contact.email);
                            // You could add a toast notification here
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Copy Email
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;