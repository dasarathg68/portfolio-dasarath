"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  Award,
  FileText,
  X,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import portfolioData from "@/utils/data.json";

const Section = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
      id={id}
    >
      {children}
    </motion.section>
  );
};

const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    className="hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{portfolioData.name}</h1>
            <nav className="hidden md:flex gap-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#achievements">Achievements</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed inset-y-0 right-0 z-50 w-64 bg-background shadow-lg md:hidden"
          >
            <div className="p-4">
              <Button
                variant="ghost"
                onClick={closeMobileMenu}
                className="mb-4"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              <nav className="flex flex-col gap-4">
                <NavLink href="#about" onClick={closeMobileMenu}>
                  About
                </NavLink>
                <NavLink href="#experience" onClick={closeMobileMenu}>
                  Experience
                </NavLink>
                <NavLink href="#skills" onClick={closeMobileMenu}>
                  Skills
                </NavLink>
                <NavLink href="#projects" onClick={closeMobileMenu}>
                  Projects
                </NavLink>
                <NavLink href="#achievements" onClick={closeMobileMenu}>
                  Achievements
                </NavLink>
                <NavLink href="#certifications" onClick={closeMobileMenu}>
                  Certifications
                </NavLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto py-6 px-4">
        <Section id="about">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-6 pt-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt={portfolioData.name}
                />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg">{portfolioData.about}</p>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section id="experience">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            {portfolioData.experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.company}, {job.location} | {job.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="education">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    {edu.degree}
                  </CardTitle>
                  <CardDescription>
                    {edu.institution}, {edu.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="font-medium mt-2">{edu.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="skills">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill, index) => (
              <Badge key={index}>{skill}</Badge>
            ))}
          </div>
        </Section>

        <Section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      {project.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.live && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.docs && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.docs}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Documentation for ${project.title}`}
                          >
                            <FileText className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
        <Section id="achievements">
          <h2 className="text-2xl font-semibold mb-4">
            Activities & Achievements
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {portfolioData.activities_and_achievements.map(
                  (achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Badge variant="secondary" className="mr-2 mt-1">
                        •
                      </Badge>
                      <span>{achievement}</span>
                    </li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
        </Section>

        <Section id="certifications">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Award className="mr-2 h-4 w-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <Badge variant="secondary">{cert.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Button>
          </div>
          <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
