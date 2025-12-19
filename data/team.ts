export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    socials?: {
      linkedin?: string;
      github?: string;
      instagram?: string;
    };
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "pratibimb-gupta",
      name: "Pratibimb Gupta",
      role: "Founder | AI Engineer",
      bio: "Works on AI systems, code-generation platforms, and competitive hackathons with a focus on real-world impact.",
      image: "/team/pratibimb.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/pratibimb-gupta-20b918288/",
        github: "https://github.com/championorwhat",
        instagram: "https://www.instagram.com/pratibimbgupta?igsh=NTl4anZuYnNvY2J5"
      }
    },
    {
      id: "member-2",
      name: "Team Member 2",
      role: "Backend Engineer",
      bio: "Specializes in scalable APIs, databases, and distributed backend systems.",
      image: "/team/member2.jpg"
    },
    {
      id: "member-3",
      name: "Team Member 3",
      role: "Frontend Engineer",
      bio: "Focuses on modern UI/UX, performance, and design systems.",
      image: "/team/member3.jpg"
    }
  ];
  