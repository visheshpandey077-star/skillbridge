import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { dummyProfile } from '@/data/dummyData';
import { MapPin, Mail, Phone, Briefcase, GraduationCap, Folder, Edit3, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProfilePage() {
  const profile = dummyProfile;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Profile header */}
        <div className="bg-card rounded-2xl shadow-card overflow-hidden">
          {/* Cover */}
          <div className="h-32 lg:h-48 bg-gradient-hero" />
          
          {/* Profile info */}
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 sm:-mt-16">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground text-4xl font-bold border-4 border-card shadow-lg">
                  {profile.name.charAt(0)}
                </div>
                <button className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-secondary transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex-1 sm:pb-2">
                <h1 className="font-display text-2xl font-bold">{profile.name}</h1>
                <p className="text-muted-foreground">{profile.title}</p>
              </div>
              
              <Button className="self-start sm:self-auto">
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                {profile.phone}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="about" className="mt-6">
          <TabsList className="w-full justify-start bg-card rounded-xl p-1 shadow-card">
            <TabsTrigger value="about" className="flex-1 sm:flex-none">About</TabsTrigger>
            <TabsTrigger value="experience" className="flex-1 sm:flex-none">Experience</TabsTrigger>
            <TabsTrigger value="projects" className="flex-1 sm:flex-none">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6 space-y-6">
            {/* Bio */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-3">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h2>
              {profile.education.map((edu, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="flex items-start gap-4 pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{exp.title}</h3>
                      <p className="text-primary text-sm">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.period}</p>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <h2 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Folder className="w-5 h-5" />
                Projects
              </h2>
              <div className="grid gap-4">
                {profile.projects.map((project, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
