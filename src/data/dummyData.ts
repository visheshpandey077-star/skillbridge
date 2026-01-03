// Dummy data for the application

export const dummyJobs = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time' as const,
    salary: '$120K - $160K',
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Contract' as const,
    salary: '$80 - $100/hr',
    posted: '1 week ago',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'New York, NY',
    type: 'Full-time' as const,
    salary: '$100K - $140K',
    posted: '3 days ago',
    skills: ['Node.js', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    id: '4',
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'Austin, TX',
    type: 'Freelance' as const,
    salary: '$70 - $90/hr',
    posted: '5 days ago',
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
  },
  {
    id: '5',
    title: 'Data Analyst',
    company: 'DataDriven Co.',
    location: 'Chicago, IL',
    type: 'Part-time' as const,
    salary: '$50K - $70K',
    posted: '1 day ago',
    skills: ['Python', 'SQL', 'Tableau', 'Excel'],
  },
];

export const dummyCandidates = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Full Stack Developer',
    location: 'San Francisco, CA',
    rating: 4.9,
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    experience: '5 years',
    availability: 'Immediately',
    matchScore: 95,
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'UX Designer',
    location: 'Remote',
    rating: 4.8,
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    experience: '4 years',
    availability: '2 weeks',
    matchScore: 88,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Data Scientist',
    location: 'New York, NY',
    rating: 4.7,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Statistics'],
    experience: '3 years',
    availability: 'Immediately',
    matchScore: 82,
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Mobile Developer',
    location: 'Seattle, WA',
    rating: 4.9,
    skills: ['React Native', 'Swift', 'Kotlin', 'Firebase'],
    experience: '6 years',
    availability: '1 month',
    matchScore: 79,
  },
];

export const dummySkills = [
  { skill: 'React', level: 85, category: 'Frontend' },
  { skill: 'TypeScript', level: 78, category: 'Languages' },
  { skill: 'Node.js', level: 72, category: 'Backend' },
  { skill: 'PostgreSQL', level: 65, category: 'Database' },
  { skill: 'AWS', level: 55, category: 'Cloud' },
  { skill: 'Docker', level: 48, category: 'DevOps' },
  { skill: 'GraphQL', level: 60, category: 'API' },
  { skill: 'UI/UX Design', level: 70, category: 'Design' },
];

export const dummyStats = {
  fresher: {
    profileViews: { value: 1247, change: '+12% from last week', changeType: 'positive' as const },
    applications: { value: 23, change: '5 pending', changeType: 'neutral' as const },
    interviews: { value: 4, change: '2 this week', changeType: 'positive' as const },
    savedJobs: { value: 18, change: '3 new matches', changeType: 'positive' as const },
  },
  recruiter: {
    activeJobs: { value: 12, change: '+3 this month', changeType: 'positive' as const },
    totalCandidates: { value: 847, change: '+89 new this week', changeType: 'positive' as const },
    interviews: { value: 24, change: '8 scheduled', changeType: 'neutral' as const },
    hires: { value: 6, change: 'This quarter', changeType: 'positive' as const },
  },
};

export const dummyProfile = {
  name: 'Alex Thompson',
  title: 'Full Stack Developer',
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  phone: '+1 (555) 123-4567',
  bio: 'Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
  skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'],
  experience: [
    {
      title: 'Senior Developer',
      company: 'TechCorp',
      period: '2021 - Present',
      description: 'Leading frontend development for enterprise applications.',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      description: 'Built and maintained core product features.',
    },
  ],
  education: [
    {
      degree: 'B.S. Computer Science',
      school: 'Stanford University',
      year: '2019',
    },
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-featured e-commerce platform with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      name: 'Task Management App',
      description: 'Created a collaborative task management application',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    },
  ],
};
