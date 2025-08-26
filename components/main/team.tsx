"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

function Team() {
  const t = useTranslations("team");

  const teamMembers = [
    {
      name: t("members.assel"),
      position: "Co-founder and CEO",
      image: "/team/Assel-melad.jpg",
      link: "https://www.linkedin.com/in/assel-melad/",
    },
    {
      name: t("members.mahdi"),
      position: "Co-founder and CTO",
      image: "/team/mahdi.jpg",
      link: "https://www.linkedin.com/in/mahdi-alagab/",
    },
    {
      name: t("members.taha"),
      position: "Communication",
      image: "/team/Taha-mohammed.jpg",
    },
    {
      name: t("members.aysha"),
      position: "Coordinator of training",
      image: "/team/Aysha-ehmeeid.jpg",
    },
    {
      name: t("members.suhair"),
      position: "UI/UX Designer",
      image: "/team/Suhair-ali.jpg",
    },
    {
      name: t("members.noralden"),
      position: "Web Developer",
      image: "/team/Noralden-alhouni.jpg",
      link: "https://www.linkedin.com/in/nouralden-alhouni-515488212/",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const CardContentBlock = (
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
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {member.link ? (
                  <Link href={member.link}>{CardContentBlock}</Link>
                ) : (
                  CardContentBlock
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;
