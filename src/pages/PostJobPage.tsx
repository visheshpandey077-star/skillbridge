import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, Plus, DollarSign, MapPin, Briefcase, Clock } from 'lucide-react';
import { useState } from 'react';

export default function PostJobPage() {
  const [skills, setSkills] = useState<string[]>(['React', 'TypeScript']);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl lg:text-3xl font-bold">Post a New Job</h1>
          <p className="text-muted-foreground mt-1">
            Create a job listing to find the perfect candidate
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Basic info */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-6">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Job Title</label>
                <Input placeholder="e.g. Senior Frontend Developer" className="h-12" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Department</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Employment Type</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Job Description</label>
                <Textarea
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </div>

          {/* Location & salary */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-6">Location & Compensation</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="e.g. San Francisco, CA" className="h-12 pl-10" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Work Setting</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select setting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Salary Range (Min)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="number" placeholder="80,000" className="h-12 pl-10" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Salary Range (Max)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="number" placeholder="120,000" className="h-12 pl-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & requirements */}
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <h2 className="font-display text-lg font-semibold mb-6">Skills & Requirements</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Required Skills</label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                    className="h-12"
                  />
                  <Button type="button" onClick={addSkill} className="shrink-0">
                    <Plus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="gap-1 px-3 py-1.5">
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)} className="hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Experience Level</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5-10 years)</SelectItem>
                      <SelectItem value="lead">Lead (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Education</label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No requirement</SelectItem>
                      <SelectItem value="bachelor">Bachelor's degree</SelectItem>
                      <SelectItem value="master">Master's degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button variant="outline" size="lg" type="button">
              Save as Draft
            </Button>
            <Button variant="gradient" size="lg" type="submit">
              Publish Job
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
