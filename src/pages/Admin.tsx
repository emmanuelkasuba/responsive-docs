import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Mail, Phone, Building, Calendar, Shield } from 'lucide-react';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-blue mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage contact inquiries and messages</p>
        </div>

        <Card className="border-0 shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Contact Inquiries ({contacts.length})
            </CardTitle>
            <CardDescription>
              All messages received through the contact form
            </CardDescription>
          </CardHeader>
          <CardContent>
            {contacts.length === 0 ? (
              <div className="text-center py-8">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No contact inquiries yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <Card key={contact.id} className="border-0 shadow-sm bg-background/50">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{contact.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <Mail className="h-4 w-4" />
                            {contact.email}
                          </div>
                          {contact.organization && (
                            <div className="flex items-center gap-2 text-muted-foreground mt-1">
                              <Building className="h-4 w-4" />
                              {contact.organization}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue px-2 py-1 rounded-full text-sm">
                            <Calendar className="h-3 w-3" />
                            {contact.createdAt?.toDate?.().toLocaleDateString() || 'Recently'}
                          </div>
                          <div className="mt-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              contact.type === 'partnership' 
                                ? 'bg-green-100 text-green-800' 
                                : contact.type === 'workshop'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {contact.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">{contact.subject}</h4>
                        <p className="text-muted-foreground leading-relaxed">{contact.message}</p>
                      </div>
                      
                      <div className="flex gap-2 mt-4">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.location.href = `mailto:${contact.email}`}
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.location.href = `tel:${contact.email}`}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
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