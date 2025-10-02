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
  Sparkles
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
      title: 'outling roles/ niches of each group member',
      description: 'Define clear roles and responsibilities for each team member to enhance collaboration and efficiency.',
      assignedTo: ['Emmanuel Kasuba', 'Francis Mwamba', 'jessica sumaili', 'charity mwansa kunda', 'amos zulu', 'donald kaoma', 'paul kashiba'],
      dueDate: '2025-09-19',
      status: 'completed',
      priority: 'high',
      progress: 100
    },
    {
      id: 2,
      title: 'Making flash cards for the cyber threats, logical security, physical security',
      description: 'Create educational flashcards covering key cybersecurity threats and security vurnerabilities.',
      assignedTo: ['Amos Zulu', 'Charity Mwansa Kunda', 'Jessica Sumaili', 'Emmanuel Kasuba', 'Francis Mwamba', 'Paul Kashiba', 'malama', 'kondwani', 'donald kaoma'],
      dueDate: '2025-09-23',
      status: 'Completed',
      priority: 'medium',
      progress: 100
    },
    {
      id: 3,
      title: 'Website Development & Maintenance',
      description: 'Develop and maintain the company website with updated content, security features, and user engagement tools.',
      assignedTo: ['Emmanuel Kasuba', 'Paul Kashiba', 'Francis Mwamba', 'Amos Zulu', 'malama ', 'kondwani', 'donald kaoma'],
      dueDate: '2024-09-30',
      status: 'completed',
      priority: 'high',
      progress: 100
    },
    {
      id: 4,
      title: 'Xubuntu power point presentation',
      description: 'Create a comprehensive PowerPoint presentation on Xubuntu, covering download, installation, challenges faced and its advantages',
      assignedTo: ['Jessica Sumaili', 'Donald Kaoma', 'Francis Mwamba', 'Emmanuel Kasuba', 'Charity Mwansa Kunda', 'Amos Zulu', 'Paul Kashiba'],
      dueDate: '2025-10-01',
      status: 'Completed',
      priority: 'medium',
      progress: 100
    },
    {
      id: 5,
      title: 'finalizastion meeting',
      description: 'every one going through the work done and making final touches',
      assignedTo: ['Francis Mwamba', 'Amos Zulu', 'Emmanuel kasuba','Charity mwansa','Donald ','kondwani','Malama','Paul kashiba',''],
      dueDate: '2025-10-02',
      status: 'in-progress',
      priority: 'high',
      progress: 30
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'not-started':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />;
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6 border border-brand-blue/20">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Project Management</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Assigned Work & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Track progress, manage deadlines, and collaborate effectively on our cybersecurity education initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Assignments Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Assignments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Active projects and tasks assigned to team members
            </p>
          </div>

          <div className="grid gap-8">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2 mb-2">
                        {assignment.title}
                        {getStatusIcon(assignment.status)}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {assignment.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status.replace('-', ' ')}
                      </Badge>
                      <Badge className={getPriorityColor(assignment.priority)}>
                        {assignment.priority} priority
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Assigned To
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {assignment.assignedTo.map((person) => (
                          <Badge key={person} variant="secondary" className="text-xs">
                            {person}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Due Date
                      </h4>
                      <p className="text-foreground font-medium">
                        {new Date(assignment.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Progress</h4>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-brand-blue to-cyber-accent h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${assignment.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-foreground font-medium text-sm">{assignment.progress}% Complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Team Progress Overview</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Overall progress and statistics for our cybersecurity education initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">20%</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">60%</CardTitle>
                <CardDescription>In Progress</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">20%</CardTitle>
                <CardDescription>Not Started</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-card bg-gradient-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-cyber-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">7</CardTitle>
                <CardDescription>Team Members</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-cyber-accent text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need to Update Your Progress?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact the project manager to update your assignment status or discuss any challenges you're facing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleContactProjectManager}
              size="lg" 
              variant="secondary" 
              className="bg-white text-brand-blue-dark hover:bg-blue-50"
            >
              Contact Project Manager
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleViewTeamMembers}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              View Team Members
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssignedWork;