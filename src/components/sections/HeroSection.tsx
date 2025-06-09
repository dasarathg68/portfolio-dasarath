import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="hero" className="min-h-[90vh] flex items-center">
    <div className="space-y-8">
      <motion.p
        className="text-lg font-light tracking-wider text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I&apos;m Dasarath
      </motion.p>

      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Engineer bridging Web3, hardware, governance, and DeSci{" "}
      </motion.h1>

      <motion.div
        className="pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button variant="outline" size="lg" className="text-base" asChild>
          <a href="#experience">View my work →</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
