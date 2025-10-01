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
  Camera,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const meetings = [
    {
      id: 1,
      date: '2024-10-15',
      time: '14:00',
      location: 'Virtual Meeting',
      attendees: ['Emmanuel Kasuba', 'Francis Mwamba', 'Amos Zulu', 'Charity Kunda', 'Paul Kashiba'],
      agenda: 'Project kickoff and role assignments',
      minutes: 'Discussed project timeline, assigned initial tasks, and set up communication channels.'
    },
    {
      id: 2,
      date: '2024-10-22',
      time: '15:30',
      location: 'Campus Library',
      attendees: ['All Team Members'],
      agenda: 'Curriculum development brainstorming',
      minutes: 'Brainstormed curriculum structure, identified key cybersecurity topics for beginners.'
    },
    {
      id: 3,
      date: '2024-10-29',
      time: '16:00',
      location: 'Virtual Meeting',
      attendees: ['Emmanuel Kasuba', 'Francis Mwamba', 'Jessica Sumaili'],
      agenda: 'Website development progress review',
      minutes: 'Reviewed website prototype, discussed UI improvements and content strategy.'
    },
    {
      id: 4,
      date: '2024-11-05',
      time: '14:00',
      location: 'Student Center',
      attendees: ['All Team Members'],
      agenda: 'Workshop material preparation',
      minutes: 'Finalized workshop exercises, assigned material creation tasks.'
    }
  ];

  const photos = [
    {
      id: 1,
      src: '/images/meetings/meeting-1.jpg',
      caption: 'Project Kickoff Meeting - October 15, 2024',
      date: '2024-10-15'
    },
    {
      id: 2,
      src: '/images/meetings/meeting-2.jpg',
      caption: 'Curriculum Brainstorming Session',
      date: '2024-10-22'
    },
    {
      id: 3,
      src: '/images/meetings/meeting-3.jpg',
      caption: 'Team Collaboration at Campus Library',
      date: '2024-10-22'
    },
    {
      id: 4,
      src: '/images/meetings/meeting-4.jpg',
      caption: 'Website Development Discussion',
      date: '2024-10-29'
    },
    {
      id: 5,
      src: '/images/meetings/meeting-5.jpg',
      caption: 'Workshop Material Planning',
      date: '2024-11-05'
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(250,204,21,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full mb-6 border border-brand-blue/20">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Meeting Records & Gallery</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Meeting Register
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Official records of our meetings, discussions, and collaborative sessions with photo documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Slideshow Section */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meeting Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Captured moments from our team meetings and collaborative sessions
            </p>
          </div>

          <Card className="border-0 shadow-card bg-gradient-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                {/* Slideshow */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
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
                        onError={(e) => {
                          e.currentTarget.src = '/images/placeholder-meeting.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-6 text-white">
                          <h3 className="text-xl font-bold mb-2">{photo.caption}</h3>
                          <p className="text-blue-100">{photo.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meeting Register Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meeting Register</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Official records of our team meetings, decisions, and action items
            </p>
          </div>

          <div className="grid gap-8">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="border-0 shadow-card bg-gradient-card hover:shadow-cyber transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Meeting #{meeting.id}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(meeting.date).toLocaleDateString()}
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
                    <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue border-brand-blue/20">
                      {meeting.attendees.length} Attendees
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Agenda
                      </h4>
                      <p className="text-foreground">{meeting.agenda}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Meeting Minutes
                      </h4>
                      <p className="text-foreground">{meeting.minutes}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Attendees</h4>
                    <div className="flex flex-wrap gap-2">
                      {meeting.attendees.map((attendee) => (
                        <Badge key={attendee} variant="secondary" className="text-xs">
                          {attendee}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Meetings */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-card bg-gradient-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Next Team Meeting</CardTitle>
              <CardDescription>
                Join us for our upcoming planning session
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-brand-blue" />
                  <span className="font-semibold">November 12, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-cyber-accent" />
                  <span className="font-semibold">15:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Virtual Meeting</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Agenda: Review project progress, discuss workshop preparations, and plan for upcoming partnerships.
              </p>
              <Button asChild variant="flashy">
                <a href="#">
                  Add to Calendar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;