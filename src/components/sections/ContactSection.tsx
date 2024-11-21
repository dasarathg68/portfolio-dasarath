import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <AnimatedSection id="contact">
      <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <a
                    href={`tel:${portfolioData.contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-2">
                <h4 className="font-medium">Quick Links</h4>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a
                      href={portfolioData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={portfolioData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
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
