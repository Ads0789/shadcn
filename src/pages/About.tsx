import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About EduLearn</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to transform education by making high-quality learning accessible to everyone, everywhere.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="grid gap-6 md:grid-cols-2 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="mb-4 text-muted-foreground">
            EduLearn was founded in 2020 with a simple idea: education should be accessible, engaging, and effective for everyone.
            What began as a small collection of programming tutorials has grown into a comprehensive learning platform serving
            students and professionals around the world.
          </p>
          <p className="text-muted-foreground">
            Our team of educators, technologists, and lifelong learners is dedicated to creating the best learning experience
            possible. We believe that everyone deserves access to high-quality education, regardless of their background or circumstances.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">50,000+</div>
            <p className="text-lg">Students worldwide</p>
          </div>
          <Separator orientation="vertical" className="mx-8 h-16" />
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">200+</div>
            <p className="text-lg">Courses available</p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl">
            "To empower individuals to reach their full potential through accessible, engaging, and effective educational experiences."
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe education should be available to everyone, regardless of location or background.
                We strive to remove barriers to quality learning resources.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're committed to providing the highest quality educational content,
                constantly improving our courses and learning experience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We embrace new technologies and teaching methods to create
                engaging, effective learning experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              name: 'Sarah Johnson',
              role: 'CEO & Founder',
              bio: 'Former professor with 15+ years in education technology.',
              avatar: 'SJ',
            },
            {
              name: 'Michael Chen',
              role: 'Head of Content',
              bio: 'Curriculum design expert passionate about effective learning.',
              avatar: 'MC',
            },
            {
              name: 'Aisha Patel',
              role: 'Chief Technology Officer',
              bio: 'Tech innovator focused on creating accessible learning platforms.',
              avatar: 'AP',
            },
            {
              name: 'David Wilson',
              role: 'Head of Instruction',
              bio: 'Award-winning educator with expertise in multiple fields.',
              avatar: 'DW',
            },
          ].map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="text-xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sign up for courses?</AccordionTrigger>
              <AccordionContent>
                To sign up for courses, create an account on our platform, browse our course catalog,
                and enroll in any course that interests you. Many courses offer free previews so you
                can get a feel for the content before committing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are the certifications recognized by employers?</AccordionTrigger>
              <AccordionContent>
                Yes, our certifications are recognized by many employers worldwide. We partner with
                industry leaders to ensure our curriculum meets current industry standards and needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I access courses on mobile devices?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Our platform is fully responsive and works on all devices. We also offer
                mobile apps for iOS and Android that allow for offline learning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do I become an instructor?</AccordionTrigger>
              <AccordionContent>
                We're always looking for experts to join our teaching community. Visit our "Become an Instructor"
                page to learn about our application process and requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 30-day money-back guarantee for most courses. If you're not satisfied
                with your purchase, you can request a full refund within 30 days of enrollment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Have questions or want to learn more about our platform? Our team is here to help.
        </p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
}