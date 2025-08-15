import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero pt-20 px-6 vsm:px-12 md:px-16">
      <div className="w-full mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
        {/* Left Column - Text Content */}
        <div className="space-y-6 lg:pr-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight break-words">
              Okeke Chris Ajuluchukwu 
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-medium">
              Software Engineer
            </p>
          </div>
          
          <p className="sm:text-lg text-muted-foreground leading-relaxed max-w-2xl break-words">
            I am a Software Engineer with strong knolowdge in Java programming language, 
            a passion for building robust cutting-edge applications. My journey through the 
            tech world has been a thrilling ride, combining my love for coding, and 
            customer-centric approach into a blend of skills that I bring to every project. 
            I love crafting dependable software solutions that fulfill my clients' needs 
            from concept to launch. As a software engineer, I take charge every phase of 
            the development process, ensuring each application is both robust and user-friendly.
          </p>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-card shadow-2xl">
              <img
                src={profileImage}
                alt="Okeke Chris Ajuluchukwu"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-muted/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;