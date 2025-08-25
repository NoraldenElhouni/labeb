// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import {
//   Brain,
//   Rocket,
//   Shield,
//   TrendingUp,
//   Search,
//   Code,
//   Zap,
//   Users,
//   Star,
//   Mail,
//   MapPin,
//   Twitter,
//   Github,
//   Linkedin,
//   Menu,
//   X,
//   Sun,
//   Moon,
//   Satellite,
//   GraduationCap,
//   BarChart,
//   Phone,
//   Award,
// } from "lucide-react"
// import { ThemeProvider } from "@/components/theme-provider"
// import { useTheme } from "next-themes"
// import IconCloud from "@/components/magicui/icon-cloud"
// import Particles from "@/components/magicui/particles"

// function ThemeToggle() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <Button
//       variant="ghost"
//       size="sm"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="w-9 h-9 p-0"
//     >
//       <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   const navItems = [
//     { id: "home", label: "Home" },
//     { id: "services", label: "Services" },
//     { id: "solutions", label: "Solutions" },
//     { id: "team", label: "Team" },
//     { id: "partners", label: "Partners" },
//     { id: "achievements", label: "Achievements" },
//     { id: "case-studies", label: "Case Studies" },
//     { id: "process", label: "Process" },
//     { id: "stack", label: "Tech Stack" },
//     { id: "cloud", label: "Tech Cloud" },
//     { id: "testimonials", label: "Testimonials" },
//     { id: "faq", label: "FAQ" },
//     { id: "contact", label: "Contact" },
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) => document.getElementById(item.id))
//       const scrollPosition = window.scrollY + 100

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i]
//         if (section && section.offsetTop <= scrollPosition) {
//           setActiveSection(navItems[i].id)
//           break
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsOpen(false)
//   }

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//               LABEB AI
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
//                     activeSection === item.id ? "text-blue-400" : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             <ThemeToggle />
//             <Button
//               onClick={() => scrollToSection("contact")}
//               className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
//             >
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <ThemeToggle />
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-white/10">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
//                     activeSection === item.id ? "text-blue-400" : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <Button
//                 onClick={() => scrollToSection("contact")}
//                 className="w-full mt-4 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// function Hero() {
//   const { scrollY } = useScroll()
//   const y = useTransform(scrollY, [0, 500], [0, 150])

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent" />
//       <motion.div style={{ y }} className="absolute inset-0 opacity-30">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
//       </motion.div>

//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
//           >
//             Smart solutions powered by{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
//               artificial intelligence
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
//           >
//             LABEB AI is a Libyan tech startup enabling organizations to achieve secure and efficient digital
//             transformation while ensuring data privacy protection.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
//           >
//             <Button
//               size="lg"
//               onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//               className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-lg px-8 py-3"
//             >
//               Get Started
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
//               className="text-lg px-8 py-3 border-white/20 hover:bg-white/5"
//             >
//               Our Services
//             </Button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-sm text-muted-foreground mb-8"
//           >
//             Supported by
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-wrap justify-center items-center gap-8 opacity-60"
//           >
//             {["Innovation Garden", "Tadauowl", "WASATA", "ATOM", "IFC", "EU", "SUPER NOVA", "SPARK"].map(
//               (partner, index) => (
//                 <div key={index} className="text-sm font-semibold">
//                   {partner}
//                 </div>
//               ),
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Services() {
//   const services = [
//     {
//       icon: Brain,
//       title: "AI Solutions Development",
//       description: "Smart solutions based on artificial intelligence technologies tailored to various sectors.",
//     },
//     {
//       icon: Satellite,
//       title: "Satellite Monitoring Systems",
//       description: "Satellite-based monitoring system for leak detection, specifically designed for oil companies.",
//     },
//     {
//       icon: GraduationCap,
//       title: "AI Training Programs",
//       description:
//         "Training programs and workshops on safe use of AI and digital transformation tools ensuring data privacy.",
//     },
//     {
//       icon: Users,
//       title: "Technical Consulting",
//       description:
//         "Technical consulting services to help organizations adopt AI strategies and integrate them into operations.",
//     },
//     {
//       icon: BarChart,
//       title: "Intelligent Systems",
//       description: "Designing intelligent systems to improve productivity, data analysis, and decision-making support.",
//     },
//     {
//       icon: Shield,
//       title: "Management Consulting",
//       description: "Specialized management consulting in corporate governance to enhance performance and transparency.",
//     },
//   ]

//   return (
//     <section id="services" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             End-to-end engineering solutions for modern businesses
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
//                 <CardHeader>
//                   <service.icon className="h-12 w-12 text-blue-400 mb-4" />
//                   <CardTitle className="text-xl">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Solutions() {
//   const solutions = [
//     {
//       icon: Rocket,
//       title: "Faster launches",
//       description: "Template libraries + battle-tested patterns.",
//     },
//     {
//       icon: Shield,
//       title: "Lower risk",
//       description: "Quality gates, testing, SLOs.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Scale securely",
//       description: "Least-privilege, secrets, compliance hints.",
//     },
//   ]

//   return (
//     <section id="solutions" className="py-24 bg-muted/30">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose LABEB AI</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             We deliver results that matter to your business
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {solutions.map((solution, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl p-8 h-full">
//                 <solution.icon className="h-16 w-16 text-blue-400 mx-auto mb-6" />
//                 <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
//                 <p className="text-muted-foreground text-lg leading-relaxed">{solution.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Team() {
//   const teamMembers = [
//     {
//       name: "Dr. Ahmed Hassan",
//       position: "CEO & AI Research Director",
//       image: "/professional-headshot-of-middle-eastern-male-ceo-i.png",
//       bio: "Leading AI researcher with 15+ years in machine learning and digital transformation.",
//     },
//     {
//       name: "Sarah Al-Mansouri",
//       position: "CTO & Lead Developer",
//       image: "/professional-headshot-of-middle-eastern-female-cto.png",
//       bio: "Expert in satellite systems and AI integration with extensive experience in oil & gas sector.",
//     },
//     {
//       name: "Omar Khalil",
//       position: "Head of Consulting",
//       image: "/professional-headshot-of-middle-eastern-male-consu.png",
//       bio: "Management consultant specializing in corporate governance and digital transformation strategies.",
//     },
//     {
//       name: "Fatima Al-Zahra",
//       position: "AI Training Specialist",
//       image: "/professional-headshot-of-middle-eastern-female-tra.png",
//       bio: "Expert in AI education and training programs with focus on data privacy and ethical AI use.",
//     },
//   ]

//   return (
//     <section id="team" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Experienced professionals driving innovation in AI and digital transformation
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300 text-center">
//                 <CardContent className="p-6">
//                   <div className="mb-4">
//                     <img
//                       src={member.image || "/placeholder.svg"}
//                       alt={member.name}
//                       className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                     />
//                     <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                     <p className="text-blue-400 font-medium mb-3">{member.position}</p>
//                     <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function SuccessPartners() {
//   const partners = [
//     { name: "Innovation Garden", logo: "/logos/innovation-garden.png" },
//     { name: "Tadauowl", logo: "/logos/tadauowl.png" },
//     { name: "WASATA", logo: "/logos/wasata.png" },
//     { name: "ATOM", logo: "/logos/atom.png" },
//     { name: "IFC", logo: "/logos/ifc.png" },
//     { name: "European Union", logo: "/logos/european-union.png" },
//     { name: "SUPER NOVA", logo: "/logos/super-nova.png" },
//     { name: "SPARK", logo: "/logos/spark.png" },
//     { name: "TechFlow Inc.", logo: "/logos/techflow.png" },
//     { name: "InnovateLab", logo: "/logos/innovatelab.png" },
//     { name: "StartupXYZ", logo: "/logos/startupxyz.png" },
//     { name: "Digital Solutions Co.", logo: "/logos/digital-solutions.png" },
//   ]

//   return (
//     <section id="partners" className="py-24 bg-muted/30">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Success Partners</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Trusted by leading organizations and supported by prestigious institutions
//           </p>
//         </motion.div>

//         <div className="relative overflow-hidden">
//           <motion.div
//             animate={{
//               x: [0, -100 * partners.length],
//             }}
//             transition={{
//               x: {
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//                 duration: 30,
//                 ease: "linear",
//               },
//             }}
//             className="flex space-x-16 whitespace-nowrap"
//           >
//             {[...partners, ...partners].map((partner, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg px-8 py-6 min-w-[200px] flex items-center justify-center"
//               >
//                 <img
//                   src={partner.logo || "/placeholder.svg"}
//                   alt={`${partner.name} logo`}
//                   className="h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Achievements() {
//   const achievements = [
//     {
//       title: "ISO 27001 Certification",
//       description: "Information Security Management System certification ensuring data protection standards.",
//       year: "2024",
//       image: "/iso-27001-certificate-document.png",
//     },
//     {
//       title: "AI Ethics Compliance",
//       description: "Certified for ethical AI development and deployment practices.",
//       year: "2024",
//       image: "/ai-ethics-certification-document.png",
//     },
//     {
//       title: "Digital Transformation Excellence",
//       description: "Recognition for outstanding digital transformation consulting services.",
//       year: "2023",
//       image: "/digital-transformation-award-certificate.png",
//     },
//     {
//       title: "Innovation Award",
//       description: "Awarded for innovative satellite monitoring solutions in the oil & gas sector.",
//       year: "2023",
//       image: "/innovation-award-certificate.png",
//     },
//   ]

//   return (
//     <section id="achievements" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements We're Proud Of</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Recognition and certifications that validate our commitment to excellence
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {achievements.map((achievement, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
//                 <CardContent className="p-6">
//                   <div className="mb-4">
//                     <img
//                       src={achievement.image || "/placeholder.svg"}
//                       alt={achievement.title}
//                       className="w-full h-32 object-cover rounded-lg mb-4"
//                     />
//                     <div className="flex items-center justify-between mb-2">
//                       <Award className="h-6 w-6 text-yellow-400" />
//                       <span className="text-sm text-blue-400 font-semibold">{achievement.year}</span>
//                     </div>
//                     <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
//                     <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function CaseStudies() {
//   const cases = [
//     {
//       title: "E-commerce Platform Optimization",
//       goal: "Reduce infrastructure costs while improving performance",
//       result: "−38% infra cost, +27% conversion",
//     },
//     {
//       title: "AI-Powered Analytics Dashboard",
//       goal: "Build real-time data processing pipeline",
//       result: "TtF −45%, 99.9% uptime",
//     },
//     {
//       title: "Mobile App Modernization",
//       goal: "Migrate legacy system to cloud-native architecture",
//       result: "+150% user engagement, −60% load times",
//     },
//   ]

//   return (
//     <section id="case-studies" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Real results from real projects</p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {cases.map((caseStudy, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
//                   <CardDescription className="text-base">{caseStudy.goal}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-2xl font-bold text-green-400 mb-4">{caseStudy.result}</div>
//                   <Button variant="outline" className="w-full bg-transparent">
//                     Read more
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function Process() {
//   const steps = [
//     { icon: Search, title: "Discover", description: "Understanding your needs and goals" },
//     { icon: Code, title: "Define", description: "Creating detailed specifications" },
//     { icon: Zap, title: "Architect", description: "Designing scalable solutions" },
//     { icon: Users, title: "Build", description: "Developing with best practices" },
//     { icon: TrendingUp, title: "Measure", description: "Iterating based on data" },
//   ]

//   return (
//     <section id="process" className="py-24 bg-muted/30">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Process</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             A proven methodology for delivering exceptional results
//           </p>
//         </motion.div>

//         <div className="relative">
//           <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transform -translate-y-1/2" />

//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center relative"
//               >
//                 <div className="bg-background border-2 border-blue-500/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 relative z-10">
//                   <step.icon className="h-8 w-8 text-blue-400" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{step.title}</h3>
//                 <p className="text-muted-foreground">{step.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function TechStack() {
//   const technologies = [
//     "Next.js",
//     "React",
//     "Node.js",
//     "Python",
//     "Go",
//     "PostgreSQL",
//     "Redis",
//     "Kubernetes",
//     "Docker",
//     "AWS",
//     "GCP",
//     "Azure",
//     "LangChain",
//     "OpenAI",
//   ]

//   return (
//     <section id="stack" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             We work with the latest and most reliable technologies
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4"
//         >
//           {technologies.map((tech, index) => (
//             <div
//               key={index}
//               className="bg-muted/50 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 text-sm font-medium hover:bg-muted/80 transition-colors"
//             >
//               {tech}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function TechCloud() {
//   const slugs = [
//     "typescript",
//     "javascript",
//     "dart",
//     "java",
//     "react",
//     "flutter",
//     "android",
//     "html5",
//     "css3",
//     "nodedotjs",
//     "express",
//     "nextdotjs",
//     "prisma",
//     "amazonaws",
//     "postgresql",
//     "firebase",
//     "nginx",
//     "vercel",
//     "testinglibrary",
//     "jest",
//     "cypress",
//     "docker",
//     "git",
//     "jira",
//     "github",
//     "gitlab",
//     "visualstudiocode",
//     "androidstudio",
//     "sonarqube",
//     "figma",
//   ]

//   return (
//     <section id="cloud" className="py-24 bg-gradient-to-b from-background to-muted/20">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Technology Universe</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Explore the technologies that power our innovative solutions
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background/50 backdrop-blur-sm px-20 pb-20 pt-8 mx-auto"
//         >
//           <Particles className="absolute inset-0" quantity={50} ease={80} color="#0ea5e9" refresh={false} />

//           <IconCloud iconSlugs={slugs} />

//           {/* LABEB AI logo in the center */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             <div className="bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full p-4 shadow-2xl">
//               <img src="/labeb-ai-logo.png" alt="LABEB AI Logo" className="w-20 h-20 object-contain" />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function Testimonials() {
//   const testimonials = [
//     {
//       quote:
//         "LABEB AI transformed our infrastructure and reduced our costs by 40% while improving performance. Their expertise in cloud architecture is unmatched.",
//       name: "Sarah Chen",
//       role: "CTO",
//       company: "TechFlow Inc.",
//     },
//     {
//       quote:
//         "The AI integration they built for us has revolutionized our customer service. Response times improved by 60% and customer satisfaction is at an all-time high.",
//       name: "Michael Rodriguez",
//       role: "Head of Product",
//       company: "InnovateLab",
//     },
//     {
//       quote:
//         "Working with LABEB AI was seamless. They delivered our mobile app ahead of schedule and it's been performing flawlessly in production.",
//       name: "Emily Johnson",
//       role: "Founder",
//       company: "StartupXYZ",
//     },
//   ]

//   return (
//     <section id="testimonials" className="py-24">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it</p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-full bg-card/50 backdrop-blur-sm border-white/10">
//                 <CardContent className="p-6">
//                   <div className="flex mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <blockquote className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
//                   <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-muted-foreground">
//                       {testimonial.role}, {testimonial.company}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function FAQ() {
//   const faqs = [
//     {
//       question: "What are your typical project timelines?",
//       answer:
//         "Project timelines vary based on scope and complexity. Simple integrations can be completed in 2-4 weeks, while full-scale applications typically take 3-6 months. We provide detailed timelines during our initial consultation.",
//     },
//     {
//       question: "What are your pricing models?",
//       answer:
//         "We offer flexible pricing models including fixed-price projects, time and materials, and retainer agreements. Our rates are competitive and reflect the senior-level expertise of our team.",
//     },
//     {
//       question: "Who owns the code after project completion?",
//       answer:
//         "You retain full ownership of all code, documentation, and intellectual property created for your project. We provide complete source code and documentation upon project completion.",
//     },
//     {
//       question: "How do you handle security and compliance?",
//       answer:
//         "Security is built into every aspect of our development process. We follow industry best practices, implement proper authentication and authorization, and can help with compliance requirements like SOC 2, HIPAA, or GDPR.",
//     },
//     {
//       question: "What does your engagement model look like?",
//       answer:
//         "We typically start with a discovery phase to understand your needs, followed by architecture and planning, then iterative development with regular check-ins. We maintain transparent communication throughout the entire process.",
//     },
//     {
//       question: "Do you provide ongoing support after launch?",
//       answer:
//         "Yes, we offer various support and maintenance packages to ensure your application continues to perform optimally. This includes monitoring, updates, bug fixes, and feature enhancements as needed.",
//     },
//   ]

//   return (
//     <section id="faq" className="py-24 bg-muted/30">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Everything you need to know about working with us
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto"
//         >
//           <Accordion type="single" collapsible className="w-full">
//             {faqs.map((faq, index) => (
//               <AccordionItem key={index} value={`item-${index}`}>
//                 <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     // Reset form
//     setFormData({ name: "", email: "", company: "", message: "" })
//     setIsSubmitting(false)

//     // Show success message (you can implement toast notifications here)
//     alert("Thank you for your message! We'll get back to you soon.")
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <section id="contact" className="py-24 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-transparent">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Ready to transform your business with AI? Let's discuss your project.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="bg-card/50 backdrop-blur-sm border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Contact Information</CardTitle>
//                 <CardDescription>Reach out to us directly or fill out the form</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-5 w-5 text-blue-400" />
//                   <span>Assel@labebai.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-5 w-5 text-blue-400" />
//                   <span>+218947722558</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="h-5 w-5 text-blue-400" />
//                   <span>Libya</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Card className="bg-card/50 backdrop-blur-sm border-white/10">
//               <CardHeader>
//                 <CardTitle className="text-2xl">Send us a Message</CardTitle>
//                 <CardDescription>We'll get back to you within 24 hours</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium mb-2">
//                         Name *
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="bg-background/50 border-white/20"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium mb-2">
//                         Email *
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="bg-background/50 border-white/20"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium mb-2">
//                       Company
//                     </label>
//                     <Input
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className="bg-background/50 border-white/20"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={4}
//                       className="bg-background/50 border-white/20"
//                     />
//                   </div>
//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Footer() {
//   return (
//     <footer className="bg-background border-t border-white/10 py-12">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-2">
//             <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
//               LABEB AI
//             </div>
//             <p className="text-muted-foreground mb-4 max-w-md">
//               Libyan tech startup specializing in smart solutions powered by artificial intelligence for secure digital
//               transformation.
//             </p>
//             <div className="flex space-x-4">
//               <Button variant="outline" size="sm">
//                 <Twitter className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="sm">
//                 <Github className="h-4 w-4" />
//               </Button>
//               <Button variant="outline" size="sm">
//                 <Linkedin className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
//                   Services
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}>
//                   Team
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}>
//                   Partners
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
//                   Contact
//                 </button>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Legal</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li>
//                 <a href="#" className="hover:text-foreground transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-foreground transition-colors">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-foreground transition-colors">
//                   Cookie Policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
//           <p>&copy; 2024 LABEB AI. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// function MobileCTA() {
//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-white/10 p-4">
//       <Button
//         onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//         className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
//       >
//         Get Started
//       </Button>
//     </div>
//   )
// }

// export default function LABEBAILanding() {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
//       <div className="min-h-screen bg-background text-foreground">
//         <a
//           href="#main-content"
//           className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
//         >
//           Skip to content
//         </a>

//         <Navbar />

//         <main id="main-content">
//           <Hero />
//           <Services />
//           <Solutions />
//           <Team />
//           <SuccessPartners />
//           <Achievements />
//           <CaseStudies />
//           <Process />
//           <TechStack />
//           <TechCloud />
//           <Testimonials />
//           <FAQ />
//           <Contact />
//         </main>

//         <Footer />
//         <MobileCTA />
//       </div>
//     </ThemeProvider>
//   )
// }
