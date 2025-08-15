const technologies = [
  "Flutter", "Dart", "Laravel", "Javascript", "Next.js", "CI/CD", "Docker", "RESTful APIs", "PostgreSQL", 
  "React","TypeScript", "MySQL","Postman", "AWS", "Git", "JWT Authentication", "Cloudinary", "Node.js","Nest.js"
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