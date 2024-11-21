import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <AnimatedSection id="certifications">
      <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <Award className="mr-2 h-4 w-4" />
                  <span>{cert.issuer}</span>
                </div>
                <Badge variant="secondary">{cert.date}</Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default CertificationsSection;
