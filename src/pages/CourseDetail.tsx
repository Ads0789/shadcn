import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, CheckCircle2, Clock, Play, BookOpen } from 'lucide-react';
import { courses } from '@/lib/course-data';

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  lessons: number;
  duration: string;
  popular: boolean;
  isNew: boolean;
  trending: boolean;
  image: string;
};

export default function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the course by ID
    const foundCourse = courses.find(c => c.id === Number(courseId));
    if (foundCourse) {
      setCourse(foundCourse);
    }
    setLoading(false);
  }, [courseId]);

  if (loading) {
    return (
      <div className="container py-8">
        <p>Loading course information...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Course not found</h1>
        <p className="mb-4">Sorry, the course you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    );
  }

  // Mock lesson data based on the course information
  const lessons = Array.from({ length: course.lessons }, (_, i) => ({
    id: i + 1,
    title: `Lesson ${i + 1}: ${i === 0 ? 'Introduction' : `${course.title} Concepts Part ${i}`}`,
    duration: `${Math.floor(Math.random() * 15) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    completed: i === 0,
  }));

  return (
    <div className="container py-8">
      {/* Course Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="ghost" asChild size="sm">
            <Link to="/courses">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link>
          </Button>
          <Badge variant="outline">{course.category}</Badge>
          <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'default' : 'destructive'}>
            {course.level}
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-4">
              {course.description}
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>{course.lessons} Lessons</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Course Progress</span>
                <span>1/{course.lessons} Completed</span>
              </div>
              <Progress value={Math.round(100 / course.lessons)} />
            </div>

            <div className="flex gap-4">
              <Button>
                <Play className="h-4 w-4 mr-2" />
                Continue Learning
              </Button>
              <Button variant="outline">View Course Materials</Button>
            </div>
          </div>

          <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
              <div className="text-2xl font-semibold text-gray-400">Course Preview</div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <Tabs defaultValue="curriculum" className="mb-8">
        <TabsList>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        
        <TabsContent value="curriculum" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>
                This course contains {course.lessons} lessons with a total duration of {course.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {lessons.map((lesson) => (
                  <li key={lesson.id} className="border rounded-md p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {lesson.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <div className="h-5 w-5 border rounded-full" />
                        )}
                        <span className="font-medium">{lesson.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">What You'll Learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Key learning outcome #{item} for {course.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-2">Course Description</h3>
                <p className="text-muted-foreground">
                  {course.description}
                </p>
                <p className="text-muted-foreground mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-2">Prerequisites</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Basic understanding of {course.category}</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Familiarity with core concepts</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Resources</CardTitle>
              <CardDescription>
                Download supplementary materials for this course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="border rounded-md p-4 flex justify-between items-center">
                  <span className="font-medium">Course Slides</span>
                  <Button variant="outline" size="sm">Download</Button>
                </li>
                <li className="border rounded-md p-4 flex justify-between items-center">
                  <span className="font-medium">Exercise Files</span>
                  <Button variant="outline" size="sm">Download</Button>
                </li>
                <li className="border rounded-md p-4 flex justify-between items-center">
                  <span className="font-medium">Additional Reading</span>
                  <Button variant="outline" size="sm">Download</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Reviews</CardTitle>
              <CardDescription>
                See what other students are saying about this course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: 'Alex Johnson',
                    rating: 5,
                    comment: 'Excellent course! I learned so much and the instructor explains concepts clearly.'
                  },
                  {
                    name: 'Sarah Miller',
                    rating: 4,
                    comment: 'Great content and well-structured. Would recommend to beginners.'
                  },
                  {
                    name: 'Robert Chen',
                    rating: 5,
                    comment: 'This course exceeded my expectations. The practical examples were very helpful.'
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{review.name}</h4>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Related Courses */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses
            .filter(c => c.category === course.category && c.id !== course.id)
            .slice(0, 3)
            .map((relatedCourse) => (
              <Card key={relatedCourse.id} className="overflow-hidden">
                <div className="aspect-video w-full bg-muted">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                    <div className="text-lg font-semibold text-gray-400">{relatedCourse.title}</div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="line-clamp-1">{relatedCourse.title}</CardTitle>
                    <Badge variant={relatedCourse.level === 'Beginner' ? 'secondary' : 
                                     relatedCourse.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {relatedCourse.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <span className="font-medium">{relatedCourse.lessons}</span> lessons
                    </div>
                    <div>
                      <span className="font-medium">{relatedCourse.duration}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/courses/${relatedCourse.id}`}>
                      View Course
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}