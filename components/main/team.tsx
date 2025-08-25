"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
function Team() {
  const teamMembers = [
    {
      name: "Dr. Ahmed Hassan",
      position: "CEO & AI Research Director",
      image: "/professional-headshot-of-middle-eastern-male-ceo-i.png",
      bio: "Leading AI researcher with 15+ years in machine learning and digital transformation.",
    },
    {
      name: "Sarah Al-Mansouri",
      position: "CTO & Lead Developer",
      image: "/professional-headshot-of-middle-eastern-female-cto.png",
      bio: "Expert in satellite systems and AI integration with extensive experience in oil & gas sector.",
    },
    {
      name: "Omar Khalil",
      position: "Head of Consulting",
      image: "/professional-headshot-of-middle-eastern-male-consu.png",
      bio: "Management consultant specializing in corporate governance and digital transformation strategies.",
    },
    {
      name: "Fatima Al-Zahra",
      position: "AI Training Specialist",
      image: "/professional-headshot-of-middle-eastern-female-tra.png",
      bio: "Expert in AI education and training programs with focus on data privacy and ethical AI use.",
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals driving innovation in AI and digital
            transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
