import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection id="contact">
      <h2 className="text-2xl font-semibold mb-4">Let&apos;s Work Together</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
                Get in Touch
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                I&apos;m always interested in hearing about new projects and
                opportunities.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-sm sm:text-base hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
                {/* <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <a
                    href={`tel:${portfolioData.contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div> */}
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="grid gap-2">
                <h4 className="text-sm sm:text-base font-medium">
                  Quick Links
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={portfolioData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />{" "}
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={portfolioData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />{" "}
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href={portfolioData.contact.x}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />{" "}
                      X/Twitter
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default ContactSection;
