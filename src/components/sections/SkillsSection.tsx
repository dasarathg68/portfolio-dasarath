import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {portfolioData.skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Badge variant="secondary">{skill}</Badge>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
