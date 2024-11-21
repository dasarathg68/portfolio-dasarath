import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedSection } from "../shared/AnimatedSection";
import portfolioData from "@/utils/data.json";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <AnimatedSection id="education">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-6">
        {portfolioData.education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                {edu.degree}
              </CardTitle>
              <CardDescription>
                {edu.institution}, {edu.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{edu.period}</p>
              <p className="font-medium mt-2">{edu.grade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default EducationSection;
