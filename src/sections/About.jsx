import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Bayzid, a student and aspiring developer with a strong
                curiosity for technology and problem-solving. I enjoy building
                modern web experiences and continuously learning new skills in
                software development and cybersecurity. For me, technology is
                not just about writing code—it's about creating solutions that
                make an impact.
              </p>
              <p>
                Beyond programming, I'm an active athlete who plays basketball,
                hockey, and handball. Sports have taught me discipline,
                teamwork, leadership, and the importance of staying consistent
                even when things become challenging. These qualities shape the
                way I approach both my academic and technical journey.
              </p>
              <p>
                I also have a deep passion for traveling and exploring new
                places and cultures. Although I haven't had the opportunity to
                travel as much as I would like, I believe every new experience
                offers valuable lessons and broadens my perspective on life and
                people.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My goal is to keep growing as a developer, expand my knowledge
                in emerging technologies, and build projects that combine
                creativity with functionality. I'm always excited to learn,
                collaborate, and take on new challenges that push me to become
                better every day.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, ind) => (
                <div key={ind} className="glass p-6 rounded-2xl animate-fade-in"  style={{ animationDelay: `${(ind + 1) * 100}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
                    <h3 className="w-6 h-6 text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
