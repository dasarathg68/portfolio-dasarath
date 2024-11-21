import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";

const AchievementsSection = () => {
  return (
    <AnimatedSection id="achievements">
      <h2 className="text-2xl font-semibold mb-4">Activities & Achievements</h2>
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
  );
};

export default AchievementsSection;
