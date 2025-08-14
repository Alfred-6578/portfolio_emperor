import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Qlock-In App",
    description: "Qlock-In is an innovative clock-in app designed to streamline attendance tracking for businesses. Utilizing digital face recognition, it facilitates a convenient and efficient clock-in and clock-out process for staff members. Ideal for use on tablets or small display units, Qlock-In ensures a secure and seamless experience at the entrance of any office building.",
    image: project1,
    technologies: ["Java", "Spring Boot", "React", "Hibernate", "JWT Authentication", "PostgreSQL"]
  },
  {
    title: "Escalayt",
    description: "Escalayt is a comprehensive facility management system designed to seamlessly track and handle all facility related issues in an organization. The app allow employees to create request, add attachement, comment ticket, and rate ticket resoluton. Escalayt app allows management to promptly resolve issues, review repairs, assign request to approprate teams, enabling businesses to effectively manage resources.",
    image: project2,
    technologies: ["React", "JavaScript", "Java", "Spring Boot", "Spring Security", "Docker", "PostgreSQL", "Git"]
  },
  {
    title: "World Banking",
    description: "World Banking App is an innovative banking application that offers seamless financial management features, including account tracking, transactions, and customer service, designed to enhance user experience and streamline banking operations.",
    image: project3,
    technologies: ["Java", "Docker", "Swagger", "Cloudinary"]
  },
  {
    title: "Task Management App",
    description: "An application for helps teams and individuals organize projects, track progress, and enhance productivity through an intuitive, user-friendly interface.",
    image: project4,
    technologies: ["Spring Boot", "Spring Security", "Postman", "PostgreSQL", "Git"]
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
          Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-card rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-tech-badge text-tech-badge-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;