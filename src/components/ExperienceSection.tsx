const experiences = [
  {
    period: "2024 - Present",
    title: "Software Engineer",
    company: "Decagon",
    description: "Developed and maintained scalable web applications using Java, Spring Boot, and RESTful APIs. Integrated applications with PostgreSQL and MongoDB databases. Collaborated with cross-functional teams to define project requirements and ensure high-performance solutions. Focused on optimizing application performance, security, and scalability.",
    technologies: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "PostgreSQL", "React", "MongoDB", "Swagger", "TypeScript"]
  },
  {
    period: "2022 - 2023",
    title: "Associate Software Engineer",
    company: "Primeezy Limited",
    description: "Designed and developed backend systems and APIs using Java and Spring Boot. Collaborated closely with frontend developers to integrate backend services with frontend components. Implemented secure, high-performance solutions and optimized database queries for MySQL.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "JavaScript", "Postman", "AWS"]
  },
  {
    period: "2022 - 2023",
    title: "Backend Developer (Intern)",
    company: "Clique Tech Inc",
    description: "Contributed to the development and maintenance of scalable backend services and applications using Java and Spring Boot. Designed and implemented robust RESTful APIs to ensure seamless data communication. Optimized database interactions using both relational (PostgreSQL) and NoSQL (DynamoDB) databases. Collaborated effectively with cross-functional teams, ensuring timely delivery of high-quality software solutions in an Agile environment. Emphasized best practices in security, performance, and scalability throughout the development process.",
    technologies: ["Java", "Spring Boot", "RESTful APIs", "Git", "DynamoDB"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 vsm:px-12 md:px-16 bg-background">
      <div className="mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-card rounded-xl p-8 max-tny:px-6 border border-border hover:border-accent transition-colors duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                <div className="mb-4 lg:mb-0">
                  <p className="text-muted-foreground text-sm font-medium mb-2">
                    {exp.period}
                  </p>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent-foreground font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-tech-badge text-tech-badge-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;