"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
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
  Moon,
  Sun,
} from "lucide-react";
import portfolioData from "@/utils/data.json";
import { useTheme } from "next-themes";

interface Node {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
}

const BlockchainNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const nodes: Node[] = [];
    const numNodes = 20;
    const nodeRadius = 5;
    const connectionDistance = 150;

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: nodeRadius,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        // Bounce off edges
        if (node.x < node.radius || node.x > canvas.width - node.radius)
          node.speedX *= -1;
        if (node.y < node.radius || node.y > canvas.height - node.radius)
          node.speedY *= -1;
      });

      // Set colors based on theme
      const nodeColor =
        theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)";
      const connectionColor =
        theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";

      // Draw connections
      ctx.beginPath();
      nodes.forEach((nodeA, index) => {
        nodes.slice(index + 1).forEach((nodeB) => {
          const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
          if (distance < connectionDistance) {
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
          }
        });
      });
      ctx.strokeStyle = connectionColor;
      ctx.stroke();

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
  );
};

const AnimatedSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
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
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="hover:text-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  </motion.div>
);

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { theme, setTheme } = useTheme();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BlockchainNetworkBackground />
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <motion.div
          className="top-0 left-0 right-0 h-1 bg-primary origin-left"
          style={{ scaleX }}
        />
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              {portfolioData.name}
            </motion.h1>
            <nav className="hidden md:flex gap-4 items-center">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#achievements">Achievements</NavLink>
              <NavLink href="#certifications">Certifications</NavLink>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="mb-4"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
              <nav className="flex flex-col gap-4">
                <NavLink
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  href="#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </NavLink>
                <NavLink
                  href="#education"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Education
                </NavLink>
                <NavLink
                  href="#skills"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </NavLink>
                <NavLink
                  href="#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </NavLink>
                <NavLink
                  href="#achievements"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Achievements
                </NavLink>
                <NavLink
                  href="#certifications"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certifications
                </NavLink>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto py-6 px-4">
        <AnimatedSection id="about">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card>
            <CardContent className="flex flex-col md:flex-row items-center gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt={portfolioData.name}
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <p className="text-lg">{portfolioData.about}</p>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="experience">
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
        </AnimatedSection>

        <AnimatedSection id="education">
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
        </AnimatedSection>

        <AnimatedSection id="skills">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge>{skill}</Badge>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      {project.github && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
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
                        </motion.div>
                      )}
                      {project.live && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
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
                        </motion.div>
                      )}
                      {project.docs && (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
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
                        </motion.div>
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
        </AnimatedSection>

        <AnimatedSection id="achievements">
          <h2 className="text-2xl font-semibold mb-4">
            Activities & Achievements
          </h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-2">
                {portfolioData.activities_and_achievements.map(
                  (achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge variant="secondary" className="mr-2 mt-1">
                        •
                      </Badge>
                      <span>{achievement}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="certifications">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="overflow-hidden">
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
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-4 mb-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>
            </motion.div>
          </div>
          <p>&copy; 2024 {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
