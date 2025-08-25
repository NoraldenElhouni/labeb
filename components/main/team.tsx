"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
function Team() {
  const teamMembers = [
    {
      name: "Assel Melad",
      position: "Co-founder and CEO",
      image: "/team/Assel-melad.jpg",
    },
    {
      name: "Mahdi",
      position: "Co-founder and CTO",
      image: "/team/Mahdi.jpg",
    },
    {
      name: "Taha Mohammed",
      position: "Suhair Ali",
      image: "/team/Taha-mohammed.jpg",
    },
    {
      name: "Aysha Ehmeeid",
      position: "Coordinator of training",
      image: "/team/Aysha-ehmeeid.jpg",
    },
    {
      name: "Suhair Ali",
      position: "UI/UX Designer",
      image: "/team/Suhair-ali.jpg",
    },
    {
      name: "Noralden Alhouni",
      position: "dev",
      image: "/team/Noralden-alhouni.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300 text-center">
                <CardContent>
                  <div className="mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium mb-3">
                      {member.position}
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
