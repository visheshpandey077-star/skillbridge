import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CandidateCard } from '@/components/cards/CandidateCard';
import { dummyCandidates } from '@/data/dummyData';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const skills = ['All Skills', 'React', 'Node.js', 'Python', 'TypeScript', 'AWS', 'Machine Learning'];
const experience = ['All Experience', '0-2 years', '2-5 years', '5-10 years', '10+ years'];
const availability = ['All Availability', 'Immediately', '2 weeks', '1 month', '2+ months'];

export default function TalentSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All Skills');
  const [selectedExperience, setSelectedExperience] = useState('All Experience');
  const [selectedAvailability, setSelectedAvailability] = useState('All Availability');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter) && !filter.startsWith('All')) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSelectedSkill('All Skills');
    setSelectedExperience('All Experience');
    setSelectedAvailability('All Availability');
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-display text-2xl lg:text-3xl font-bold">Find Talent</h1>
          <p className="text-muted-foreground mt-1">
            Discover top candidates from our pool of {dummyCandidates.length * 100}+ professionals
          </p>
        </div>

        {/* Search and filters */}
        <div className="bg-card rounded-2xl p-4 shadow-card mb-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, skills, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button
              variant={showFilters ? 'default' : 'outline'}
              size="lg"
              onClick={() => setShowFilters(!showFilters)}
              className="shrink-0"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>

          {/* Filter dropdowns */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-border">
              <Select value={selectedSkill} onValueChange={(value) => { setSelectedSkill(value); addFilter(value); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent>
                  {skills.map((skill) => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExperience} onValueChange={(value) => { setSelectedExperience(value); addFilter(value); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experience.map((exp) => (
                    <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedAvailability} onValueChange={(value) => { setSelectedAvailability(value); addFilter(value); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  {availability.map((avail) => (
                    <SelectItem key={avail} value={avail}>{avail}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="gap-1">
                  {filter}
                  <button onClick={() => removeFilter(filter)} className="hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-destructive hover:text-destructive">
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{dummyCandidates.length}</span> candidates
          </p>
          <Select defaultValue="match">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Best Match</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
              <SelectItem value="available">Soonest Available</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Candidate grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {dummyCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} {...candidate} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
