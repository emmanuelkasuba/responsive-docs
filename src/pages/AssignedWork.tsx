// src/pages/AssignedWork.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  FileText,
  Zap,
  Sparkles,
  FolderOpen,
  TrendingUp,
  UserCheck
} from 'lucide-react';

const AssignedWork = () => {
  const navigate = useNavigate();

  const handleContactProjectManager = () => {
    navigate('/contact');
  };

  const handleViewTeamMembers = () => {
    navigate('/team');
  };

  const assignments = [
    {
      id: 1,
      title: 'Outlining Roles/Niches of Each Group Member',
      description: 'Define clear roles and responsibilities for each team member to enhance collaboration and efficiency.',
      assignedTo: ['Emmanuel Kasuba', 'Francis Mwamba', 'Jessica Sumaili', 'Charity Mwansa Kunda', 'Amos Zulu', 'Donald Kaoma', 'Paul Kashiba'],
      dueDate: '2025-09-19',
      status: 'completed',
      priority: 'high',
      progress: 100
    },
    {
      id: 2,
      title: 'Making Flash Cards for Cyber Threats, Logical Security, Physical Security',
      description: 'Create educational flashcards covering key cybersecurity threats and security vulnerabilities.',
      assignedTo: ['Amos Zulu', 'Charity Mwansa Kunda', 'Jessica Sumaili', 'Emmanuel Kasuba', 'Francis Mwamba', 'Paul Kashiba', 'Malama', 'Kondwani', 'Donald Kaoma'],
      dueDate: '2025-09-23',
      status: 'completed',
      priority: 'medium',
      progress: 100
    },
    {
      id: 3,
      title: 'Website Development & Maintenance',
      description: 'Develop and maintain the company website with updated content, security features, and user engagement tools.',
      assignedTo: ['Emmanuel Kasuba', 'Paul Kashiba', 'Francis Mwamba', 'Amos Zulu', 'Malama', 'Kondwani', 'Donald Kaoma'],
      dueDate: '2024-09-30',
      status: 'completed',
      priority: 'high',
      progress: 100
    },
    {
      id: 4,
      title: 'Xubuntu PowerPoint Presentation',
      description: 'Create a comprehensive PowerPoint presentation on Xubuntu, covering download, installation, challenges faced and its advantages.',
      assignedTo: ['Jessica Sumaili', 'Donald Kaoma', 'Francis Mwamba', 'Emmanuel Kasuba', 'Charity Mwansa Kunda', 'Amos Zulu', 'Paul Kashiba'],
      dueDate: '2025-10-01',
      status: 'completed',
      priority: 'medium',
      progress: 100
    },
    {
      id: 5,
      title: 'Finalization Meeting',
      description: 'Everyone going through the work done and making final touches before project submission.',
      assignedTo: ['Francis Mwamba', 'Amos Zulu', 'Emmanuel Kasuba', 'Charity Mwansa', 'Donald Kaoma', 'Kondwani', 'Malama', 'Paul Kashiba', 'Jessica Sumaili'],
      dueDate: '2025-10-02',
      status: 'in-progress',
      priority: 'high',
      progress: 30
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'not-started':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'not-started':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const completedAssignments = assignments.filter(a => a.status === 'completed').length;
  const totalAssignments = assignments.length;
  const completionRate = Math.round((completedAssignments / totalAssignments) * 100);

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <FolderOpen className="h-4 w-4" />
              Project Management Dashboard
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Assigned Work
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Track progress, manage deadlines, and collaborate effectively on our cybersecurity education initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview - Enhanced */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{completionRate}%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-gray-900">{completedAssignments}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {assignments.filter(a => a.status === 'in-progress').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-3xl font-bold text-gray-900">9</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assignments Grid - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Assignments</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Active projects and tasks assigned to team members
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid gap-8">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:translate-y-[-4px]">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-xl text-gray-900">{assignment.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {assignment.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={`${getStatusColor(assignment.status)} font-medium`}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(assignment.status)}
                          {assignment.status.replace('-', ' ')}
                        </span>
                      </Badge>
                      <Badge className={`${getPriorityColor(assignment.priority)} font-medium`}>
                        {assignment.priority} priority
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Assigned To */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Assigned To
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {assignment.assignedTo.slice(0, 3).map((person) => (
                          <Badge key={person} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                            {person.split(' ')[0]}
                          </Badge>
                        ))}
                        {assignment.assignedTo.length > 3 && (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                            +{assignment.assignedTo.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Due Date */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Due Date
                      </h4>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          new Date(assignment.dueDate) < new Date() ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                        <p className="text-gray-900 font-medium">
                          {new Date(assignment.dueDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-700">Progress</h4>
                        <span className="text-sm font-medium text-gray-600">{assignment.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            assignment.progress === 100 
                              ? 'bg-gradient-to-r from-green-500 to-green-600'
                              : 'bg-gradient-to-r from-blue-500 to-blue-600'
                          }`}
                          style={{ width: `${assignment.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {assignment.progress === 100 ? 'Completed' : 'In progress'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Performance */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Team Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Overview of team progress and upcoming milestones
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Zap className="h-6 w-6 text-blue-600" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments
                    .filter(a => a.status !== 'completed')
                    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                    .map((assignment) => (
                      <div key={assignment.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                        <div>
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-600">
                            Due {new Date(assignment.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge className={getPriorityColor(assignment.priority)}>
                          {assignment.priority}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Sparkles className="h-6 w-6 text-green-600" />
                  Recent Completions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments
                    .filter(a => a.status === 'completed')
                    .slice(0, 3)
                    .map((assignment) => (
                      <div key={assignment.id} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-600">
                            Completed by {assignment.assignedTo.length} team members
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
            <Target className="h-4 w-4" />
            Need Assistance?
          </div>
          <h2 className="text-4xl font-bold mb-6">Update Your Progress</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact the project manager to update your assignment status or discuss any challenges you're facing with your tasks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleContactProjectManager}
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
            >
              Contact Project Manager
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleViewTeamMembers}
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
            >
              View Team Members
            </Button>
          </div>
          <p className="text-blue-200 mt-8 text-sm">
            Quick response guaranteed within 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default AssignedWork;