// src/pages/Register.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  Camera,
  Video,
  Download,
  Share2,
  BookOpen,
  Sparkles
} from 'lucide-react';

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleAddToCalendar = () => {
    // Create Google Calendar URL for the next meeting
    const event = {
      title: 'Group 7 Cyber Ed Inc. - Team Meeting',
      details: 'Review project progress, discuss workshop preparations, and plan for upcoming partnerships.',
      location: 'Virtual Meeting',
      start: '20241112T150000',
      end: '20241112T160000'
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${event.start}%2F${event.end}&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleDownloadMinutes = () => {
    // In a real app, this would download actual meeting minutes
    alert('Meeting minutes download would be implemented here with actual documents');
  };

  const meetings = [
    {
      id: 1,
      date: '2025-10-01',
      time: '20:00',
      location: 'Virtual Meeting',
      attendees: ['All members online At the time'],
      agenda: 'Progress report on flash Cards',
      minutes: 'Flash Cards are posted by francis',
      status: 'completed'
    },
    {
      id: 2,
      date: 'First meeting',
      time: 'Unknown',
      location: 'Whatsapp Group interaction',
      attendees: ['All Team Members'],
      agenda: 'Unclear',
      minutes: 'Emmanuel kasuba was assigned as group leader',
      status: 'completed'
    },
    {
      id: 3,
      date: '2025-09-30',
      time: '16:00',
      location: 'Virtual Meeting',
      attendees: ['Emmanuel Kasuba', 'Francis Mwamba'],
      agenda: 'Website development progress review',
      minutes: 'Reviewed website prototype, discussed UI improvements and content strategy.',
      status: 'completed'
    },
    {
      id: 4,
      date: '2025-09-19',
      time: '14:00',
      location: 'Pillars (school cement benches)',
      attendees: ['All Team Members'],
      agenda: 'First meeting',
      minutes: 'Identifying group members and assigning roles',
      status: 'completed'
    }
  ];

  const photos = [
    {
      id: 1,
      src: '/images/meetings/meeting-1.jpg',
      caption: 'Making the React website and sharing GitHub repository',
      date: '2025-10-01',
      type: 'development'
    },
    {
      id: 2,
      src: '/images/meetings/meeting-2.jpg',
      caption: 'Planning the creation of the group website, Jessica is assigned as social media personality',
      date: '2025-09-30',
      type: 'planning'
    },
    {
      id: 3,
      src: '/images/meetings/meeting-3.jpeg',
      caption: 'Team Collaboration at Outside Main Hall',
      date: '2025-09-23',
      type: 'collaboration'
    },
    {
      id: 4,
      src: '/images/meetings/meeting-4.jpg',
      caption: 'Website Development Discussion in the Main Hall',
      date: '2024-09-29',
      type: 'development'
    },
    {
      id: 5,
      src: '/images/meetings/meeting-5.jpg',
      caption: 'Finalization of all work and assignments',
      date: '2025-10-02',
      type: 'review'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getMeetingTypeColor = (type: string) => {
    const colors = {
      development: 'bg-blue-100 text-blue-800 border-blue-200',
      planning: 'bg-green-100 text-green-800 border-green-200',
      collaboration: 'bg-purple-100 text-purple-800 border-purple-200',
      review: 'bg-orange-100 text-orange-800 border-orange-200',
      completed: 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[type as keyof typeof colors] || colors.completed;
  };

  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-200 text-sm mb-8">
              <BookOpen className="h-4 w-4" />
              Meeting Records & Gallery
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Meeting Register
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Official records of our meetings, discussions, and collaborative sessions with comprehensive documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Meeting Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{meetings.length}</div>
              <div className="text-gray-600">Meetings Held</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{photos.length}</div>
              <div className="text-gray-600">Photos Documented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Attendance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">9+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Photo Slideshow Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meeting Gallery</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Captured moments from our team meetings and collaborative sessions
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardHeader className="pb-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Camera className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">Team Collaboration Gallery</CardTitle>
                    <CardDescription className="text-gray-600">
                      Documenting our journey in cybersecurity education
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {photos.length} Photos
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                {/* Slideshow */}
                <div className="relative h-80 md:h-[500px] overflow-hidden">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-6 text-white w-full">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getMeetingTypeColor(photo.type)}>
                              {photo.type.charAt(0).toUpperCase() + photo.type.slice(1)}
                            </Badge>
                            <span className="text-blue-200 text-sm">{photo.date}</span>
                          </div>
                          <h3 className="text-xl font-bold">{photo.caption}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 left-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg transition-all duration-200 shadow-lg"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Current Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide + 1} / {photos.length}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Meeting Register Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meeting Register</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Official records of our team meetings, decisions, and action items
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid gap-8">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:translate-y-[-4px]">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-gray-900">Meeting #{meeting.id}</CardTitle>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {meeting.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {meeting.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {meeting.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        <Users className="h-3 w-3 mr-1" />
                        {meeting.attendees.length} Attendees
                      </Badge>
                      <Badge className={getMeetingTypeColor(meeting.status)}>
                        {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          Agenda
                        </h4>
                        <p className="text-gray-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                          {meeting.agenda}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          Meeting Minutes
                        </h4>
                        <p className="text-gray-600 bg-green-50/50 p-3 rounded-lg border border-green-100">
                          {meeting.minutes}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-purple-600" />
                      Attendees
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {meeting.attendees.map((attendee) => (
                        <Badge key={attendee} variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                          {attendee}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm" className="border-gray-300">
                      <Download className="h-4 w-4 mr-1" />
                      Download Minutes
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-300">
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Meetings */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-4">
                <Sparkles className="h-4 w-4" />
                Upcoming Event
              </div>
              <CardTitle className="text-3xl">Next Team Meeting</CardTitle>
              <CardDescription className="text-blue-100">
                Join us for our upcoming planning session and strategy discussion
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                  <Calendar className="h-8 w-8 text-white mb-2" />
                  <div className="text-lg font-semibold">November 12, 2024</div>
                  <div className="text-blue-200 text-sm">Wednesday</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                  <Clock className="h-8 w-8 text-white mb-2" />
                  <div className="text-lg font-semibold">15:00 PM</div>
                  <div className="text-blue-200 text-sm">Duration: 1 hour</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
                  <Video className="h-8 w-8 text-white mb-2" />
                  <div className="text-lg font-semibold">Virtual Meeting</div>
                  <div className="text-blue-200 text-sm">Online Platform</div>
                </div>
              </div>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Agenda: Review project progress, discuss workshop preparations, and plan for upcoming partnerships with schools and organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleAddToCalendar}
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 font-semibold shadow-lg"
                >
                  Add to Calendar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={handleDownloadMinutes}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Previous Minutes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;