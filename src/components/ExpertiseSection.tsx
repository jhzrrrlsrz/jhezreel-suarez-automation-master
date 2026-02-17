import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, Briefcase, Code, Globe } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const categories = [
  {
    icon: Bot,
    title: "Automation Platforms",
    skills: [
      { name: "n8n", value: 98 },
      { name: "Zapier", value: 95 },
      { name: "Make", value: 92 },
    ],
  },
  {
    icon: Briefcase,
    title: "Business Tools",
    skills: [
      { name: "GoHighLevel", value: 90 },
      { name: "Monday.com", value: 88 },
      { name: "HubSpot", value: 92 },
      { name: "Shopify", value: 85 },
    ],
  },
  {
    icon: Code,
    title: "Development & Design",
    skills: [
      { name: "WordPress", value: 90 },
      { name: "HTML/CSS", value: 97 },
      { name: "JavaScript & React", value: 95 },
      { name: "Git", value: 95 },
    ],
  },
  {
    icon: Globe,
    title: "API & Integration",
    skills: [
      { name: "Google APIs", value: 93 },
      { name: "RESTful APIs", value: 88 },
      { name: "Webhooks", value: 97 },
      { name: "OAuth & SSO", value: 92 },
    ],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="bg-background py-20 fade-in-section">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold text-teal sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground">
            Full-stack automation capabilities with cutting-edge AI integration
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <Card key={cat.title} className="border-border/50 bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10">
                    <cat.icon className="h-5 w-5 text-teal" />
                  </div>
                  <CardTitle className="font-display text-lg">{cat.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="font-medium text-teal">{skill.value}%</span>
                    </div>
                    <Progress value={skill.value} className="h-2 bg-muted [&>div]:bg-teal" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
