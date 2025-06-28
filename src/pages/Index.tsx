import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredCourses } from '@/lib/course-data';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Unlock Your Potential with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EduLearn</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Discover expert-led courses designed to help you master new skills, 
                advance your career, and explore your passions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video bg-gray-100/50 rounded-xl overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20">
                <div className="text-2xl font-semibold text-gray-400">Learning Video Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your Next Course
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Search our library of courses to start learning today.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex space-x-2">
                <Input type="text" placeholder="Search for courses..." className="max-w-lg flex-1" />
                <Button type="submit">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="w-full py-12 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Featured Courses
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Explore our most popular courses and start learning today.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredCourses.slice(0, 3).map((course) => (
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
                  <CardDescription>{course.description.substring(0, 100)}...</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
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
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose EduLearn
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Our platform offers a range of features to enhance your learning experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Learn from industry professionals with years of experience in their fields.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Study at your own pace with on-demand video lessons and downloadable resources.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Interactive Exercises</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Reinforce your knowledge with hands-on projects and quizzes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Connect with fellow learners and get help when you need it.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Earn recognized certificates upon completion to showcase your skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Career Advancement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Develop in-demand skills that help you advance in your career path.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Ready to Start Learning?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed">
                Join thousands of students already learning on our platform.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2">
              <Button size="lg" variant="secondary" className="w-full">
                Sign Up for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}