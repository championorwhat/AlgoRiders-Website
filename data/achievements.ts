export interface Achievement {
    id: string;
    title: string;
    event: string;
    year: string;
    description: string;
    category: "Hackathon" | "Freelance" | "Recognition";
  }
  
  export const achievements: Achievement[] = [
    {
      id: "national-ai-hackathon",
      title: "Winner",
      event: "National Level AI Hackathon",
      year: "2024",
      description:
        "Built an AI-powered system under strict time constraints and secured first place among competing teams.",
      category: "Hackathon"
    },
    {
      id: "sih-top-5",
      title: "Top 5 Finalist",
      event: "Smart India Hackathon",
      year: "2023",
      description:
        "Qualified to the final stages by developing a scalable prototype addressing real-world challenges.",
      category: "Hackathon"
    },
    {
      id: "freelance-milestone",
      title: "15+ Projects Delivered",
      event: "Freelance Engineering",
      year: "2024",
      description:
        "Successfully delivered production-grade systems for clients across multiple domains.",
      category: "Freelance"
    }
  ];
  