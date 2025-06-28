import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-40 bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <NavLink 
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              EduLearn
            </NavLink>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to="/" className={({isActive}) => 
                  cn("group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  isActive ? "bg-accent text-accent-foreground" : "")}>
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <NavLink
                          to="/courses"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Browse Courses
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our comprehensive library of courses designed to help you master new skills
                          </p>
                        </NavLink>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavLink
                        to="/tutorials"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Tutorials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Step-by-step guides for beginners
                        </p>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">About Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about our mission and approach to education
                        </p>
                      </NavLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 EduLearn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <NavLink to="/about" className="text-sm text-muted-foreground hover:underline">
              About
            </NavLink>
            <NavLink to="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </NavLink>
            <NavLink to="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </NavLink>
            <NavLink to="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;