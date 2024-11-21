import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import Image from "next/image";
import dasarathg68Image from "@/app/dachu.jpg";
import { SocialLink } from "../shared/SocialLink";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <AnimatedSection id="about">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <Card>
        <CardContent className="flex flex-col items-center gap-6 pt-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Avatar className="h-24 w-24">
              <Image
                src={dasarathg68Image}
                alt={portfolioData.name}
                width={96}
                height={96}
                className="rounded-full object-cover"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </motion.div>
          <p className="text-lg">{portfolioData.about}</p>
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
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export default AboutSection;
