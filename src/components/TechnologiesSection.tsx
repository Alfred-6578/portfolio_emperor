const technologies = [
  "Java", "Spring Boot", "Spring Security", "RESTful APIs", "PostgreSQL", 
  "React", "MongoDB", "Swagger", "TypeScript", "MySQL", "JavaScript", 
  "Postman", "AWS", "Git", "DynamoDB", "Hibernate", "JWT Authentication", 
  "Docker", "Cloudinary"
];

const TechnologiesSection = () => {
  return (
    <section className="py-20 px-6 vsm:px-12 md:px-16 bg-card">
      <div className=" mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
          Technologies
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl ">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-tech-badge text-tech-badge-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;