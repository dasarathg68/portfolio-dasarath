import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../shared/AnimatedSection";

const HeroSection = () => (
  <AnimatedSection id="hero">
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Building Digital Solutions
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Full Stack Developer specializing in Web3, IoT, and Embedded Systems
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button asChild size="lg">
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </motion.div>
    </div>
  </AnimatedSection>
);

export default HeroSection;
