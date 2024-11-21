import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import { Github, ExternalLink, FileText } from "lucide-react";

const ProjectsSection = () => {
  return (
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
    </AnimatedSection>
  );
};

export default ProjectsSection;
