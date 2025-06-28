import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TutorialsPage() {
  // Mock tutorial data
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with Web Development',
      description: 'A beginner-friendly introduction to HTML, CSS, and JavaScript for aspiring web developers.',
      category: 'Web Development',
      level: 'Beginner',
      duration: '30 mins',
      author: 'John Smith',
      date: '2023-08-15',
      image: 'web-development',
      featured: true,
    },
    {
      id: 2,
      title: 'Introduction to Data Science with Python',
      description: 'Learn the fundamentals of data analysis and visualization using Python libraries like Pandas and Matplotlib.',
      category: 'Data Science',
      level: 'Intermediate',
      duration: '45 mins',
      author: 'Emily Johnson',
      date: '2023-09-02',
      image: 'data-science',
      featured: true,
    },
    {
      id: 3,
      title: 'Mobile App Development with React Native',
      description: 'Build cross-platform mobile applications using React Native and JavaScript.',
      category: 'Mobile Development',
      level: 'Intermediate',
      duration: '40 mins',
      author: 'Michael Brown',
      date: '2023-07-28',
      image: 'mobile-dev',
      featured: false,
    },
    {
      id: 4,
      title: 'Cloud Computing Basics: AWS Fundamentals',
      description: 'Understand the core services and concepts of Amazon Web Services (AWS) cloud platform.',
      category: 'Cloud Computing',
      level: 'Beginner',
      duration: '35 mins',
      author: 'Sarah Williams',
      date: '2023-08-21',
      image: 'cloud-computing',
      featured: false,
    },
    {
      id: 5,
      title: 'Introduction to Machine Learning',
      description: 'Explore the fundamentals of machine learning algorithms and their practical applications.',
      category: 'Data Science',
      level: 'Advanced',
      duration: '50 mins',
      author: 'David Lee',
      date: '2023-09-10',
      image: 'machine-learning',
      featured: true,
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      description: 'Learn about the basic principles of cybersecurity and how to protect digital assets.',
      category: 'Cybersecurity',
      level: 'Beginner',
      duration: '25 mins',
      author: 'Lisa Chen',
      date: '2023-08-05',
      image: 'cybersecurity',
      featured: false,
    },
    {
      id: 7,
      title: 'Advanced JavaScript Techniques',
      description: 'Master advanced JavaScript concepts like closures, promises, and async/await.',
      category: 'Web Development',
      level: 'Advanced',
      duration: '55 mins',
      author: 'Robert Johnson',
      date: '2023-09-15',
      image: 'javascript',
      featured: false,
    },
    {
      id: 8,
      title: 'UI/UX Design Principles',
      description: 'Understand the core principles of user interface and user experience design.',
      category: 'Design',
      level: 'Intermediate',
      duration: '40 mins',
      author: 'Amanda Miller',
      date: '2023-07-25',
      image: 'ui-ux',
      featured: true,
    },
  ];

  // Get unique categories
  const categories = Array.from(new Set(tutorials.map(tutorial => tutorial.category)));

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Tutorials & Guides</h1>
        <p className="text-lg text-muted-foreground">
          Explore our collection of free tutorials, guides, and quick learning resources on various topics.
        </p>
      </div>

      {/* Featured Tutorials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tutorials.filter(t => t.featured).slice(0, 2).map((tutorial) => (
            <Card key={tutorial.id} className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 bg-muted">
                <div className="w-full h-full aspect-[4/3] md:aspect-auto flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                  <div className="text-lg font-semibold text-gray-400">{tutorial.image}</div>
                </div>
              </div>
              <div className="md:w-3/5 flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{tutorial.category}</Badge>
                    <Badge variant={tutorial.level === 'Beginner' ? 'secondary' : 
                                     tutorial.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {tutorial.level}
                    </Badge>
                  </div>
                  <CardTitle className="mt-2">{tutorial.title}</CardTitle>
                  <CardDescription>By {tutorial.author} • {new Date(tutorial.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {tutorial.description}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">Read Tutorial</Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* All Tutorials by Category */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Browse All Tutorials</h2>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Categories</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials
                  .filter(tutorial => tutorial.category === category)
                  .map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

// Tutorial Card Component
type Tutorial = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  author: string;
  date: string;
  image: string;
  featured: boolean;
};

function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="aspect-[16/9] bg-muted">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
          <div className="text-lg font-semibold text-gray-400">{tutorial.image}</div>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">{tutorial.category}</Badge>
          <Badge variant={tutorial.level === 'Beginner' ? 'secondary' : 
                           tutorial.level === 'Intermediate' ? 'default' : 'destructive'}>
            {tutorial.level}
          </Badge>
        </div>
        <CardTitle className="line-clamp-1">{tutorial.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>{tutorial.duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {tutorial.description}
        </p>
        <div className="flex items-center mt-4 text-sm text-muted-foreground">
          <BookOpen className="h-3.5 w-3.5 mr-1" />
          <span>By {tutorial.author}</span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-2">
        <Button variant="ghost" className="w-full justify-between">
          Read Tutorial
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}