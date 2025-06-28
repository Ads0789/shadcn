import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import { courses } from '@/lib/course-data';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Get unique categories
  const categories = Array.from(new Set(courses.map(course => course.category)));
  
  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'all' || course.level === filterLevel;
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  return (
    <div className="container py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Courses</h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of courses designed to help you master new skills and advance your career.
        </p>
      </div>

      {/* Search and filters */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <div className="md:col-span-2">
          <Input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <Select value={filterLevel} onValueChange={setFilterLevel}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Level</SelectLabel>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Course Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                      <div className="text-lg font-semibold text-gray-400">{course.title}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : 
                                     course.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex justify-between text-sm mt-4">
                      <div>
                        <span className="font-medium">{course.lessons}</span> lessons
                      </div>
                      <div>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/courses/${course.id}`}>
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="popular" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses
              .filter(course => course.popular)
              .map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                      <div className="text-lg font-semibold text-gray-400">{course.title}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : 
                                     course.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex justify-between text-sm mt-4">
                      <div>
                        <span className="font-medium">{course.lessons}</span> lessons
                      </div>
                      <div>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/courses/${course.id}`}>
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="new" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses
              .filter(course => course.isNew)
              .map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                      <div className="text-lg font-semibold text-gray-400">{course.title}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : 
                                     course.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex justify-between text-sm mt-4">
                      <div>
                        <span className="font-medium">{course.lessons}</span> lessons
                      </div>
                      <div>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/courses/${course.id}`}>
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="trending" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses
              .filter(course => course.trending)
              .map((course) => (
                <Card key={course.id} className="overflow-hidden">
                  <div className="aspect-video w-full bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                      <div className="text-lg font-semibold text-gray-400">{course.title}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{course.title}</CardTitle>
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : 
                                     course.level === 'Intermediate' ? 'default' : 'destructive'}>
                        {course.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.category}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex justify-between text-sm mt-4">
                      <div>
                        <span className="font-medium">{course.lessons}</span> lessons
                      </div>
                      <div>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/courses/${course.id}`}>
                        View Course <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}