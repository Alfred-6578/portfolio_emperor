import aboutImage from "@/assets/about.png";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-card shadow-xl">
                <img
                  src={aboutImage}
                  alt="About Uchechukwu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              About Me
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empowering businesses with reliable and scalable software solutions. 
              With a strong foundation in backend development, I build systems that 
              streamline operations, enhance security and drive growth. Let's take 
              your technology to the next level together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;