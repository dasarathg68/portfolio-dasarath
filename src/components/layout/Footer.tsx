import { SocialLink } from "../shared/SocialLink";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import portfolioData from "@/utils/data.json";

const Footer = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <SocialLink
            href={portfolioData.contact.github}
            icon={Github}
            label="GitHub Profile"
          />
          <SocialLink
            href={portfolioData.contact.linkedin}
            icon={Linkedin}
            label="LinkedIn Profile"
          />
          <SocialLink
            href={`mailto:${portfolioData.contact.email}`}
            icon={Mail}
            label="Email"
          />
          <SocialLink
            href={`tel:${portfolioData.contact.phone}`}
            icon={Phone}
            label="Phone"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
