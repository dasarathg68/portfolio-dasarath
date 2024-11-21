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

const ExperienceSection = () => {
  return (
    <AnimatedSection id="experience">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-6">
        {portfolioData.experience.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {job.title}
                <div className="flex space-x-2">
                  {job.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={job.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${job.company}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {job.link && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Website for ${job.company}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {job.docs && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={job.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Documentation for ${job.company}`}
                      >
                        <FileText className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardTitle>
              <CardDescription>
                {job.company}, {job.location} | {job.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
