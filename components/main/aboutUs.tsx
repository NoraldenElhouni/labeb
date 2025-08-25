"use client";

import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            LABEB AI is a Libyan tech startup specializing in smart solutions
            powered by artificial intelligence. The company aims to enable
            organizations to achieve secure and efficient digital transformation
            while ensuring data privacy protection. Labeeb AI also offers
            specialized training programs to help businesses effectively utilize
            smart tools, enhancing their productivity and innovation. The
            company aspires to be a leading partner for institutions in Libya
            and the region by providing innovative technology solutions that
            support sustainable growth and the development of the local business
            environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
