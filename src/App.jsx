import { FaJava } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";

import { IoLogoHtml5 as HTML} from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiPostman } from "react-icons/si";




import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Smartphone,
  ArrowUp,
} from "lucide-react";

export default function App() {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection,setActiveSection] = useState("home");
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };
  const [typedText] = useState("");
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [showBackToTop] = useState(false);
  const frontendSkills = [
    { name: "React", level: 95 },
    { name: "Vue.js", level: 88 },
    { name: "TypeScript", level: 92 },
    { name: "Next.js", level: 90 },
    { name: "Tailwind CSS", level: 94 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 93 },
    { name: "Python", level: 87 },
    { name: "PostgreSQL", level: 89 },
    { name: "MongoDB", level: 85 },
    { name: "GraphQL", level: 82 },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "Pokemon.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "fullstack",
      github: "https://github.com/Channu-22/PokemonUniverse_Project",
      demo: "https://pokemon-universe-project-channu2002.vercel.app/",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      category: "fullstack",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization and reporting.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Python", "FastAPI", "Chart.js"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Real-time Chat App",
      description:
        "Modern chat application with real-time messaging, file sharing, and group conversations.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "WebSocket", "Firebase", "Material-UI"],
      category: "fullstack",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "AI Analytics Tool",
      description:
        "AI-powered analytics platform for business intelligence and predictive analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      category: "ai",
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and transaction management.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Firebase", "Node.js", "JWT"],
      category: "mobile",
      github: "#",
      demo: "#",
    },
  ];
  const [projectFilter, setProjectFilter] = useState("all");

  const filteredProjects =
    projectFilter === "all"
      ? projects
      : projects.filter((project) => project.category === projectFilter);

      
const text = "Chanabasappa";



  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Navbar */}

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: `rgba(15, 23, 42, ${headerOpacity})` }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
           <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text  flex gap-1">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -10, 0, 10, 0], // up -> center -> down -> center (wave)
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            delay: index * 0.1, // wave starts left to right
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-cyan-400 relative ${
                      activeSection === item ? "text-cyan-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                        layoutId="activeSection"
                      />
                    )}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 p-4 rounded-lg backdrop-blur-md bg-slate-800/50 border border-white/10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left py-2 capitalize hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </button>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <motion.div
          className="text-center z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img
                  src="/chanvir.png?height=120&width=120"
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Chanabasappa Sinnur
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-8 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-cyan-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
           "I have hands-on experience with Java, SQL, and the MERN stack, and I’m deeply driven by a strong interest in web development and emerging technologies. I’m actively seeking opportunities as a Software Engineer, SDE, or Web Developer where I can contribute and grow."


          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
            <a
              href=""
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent" 
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="text-cyan-400 h-8 w-8" />
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <img
                  src="/chanvir.png?height=400&width=400"
                  alt="About Me"
                  className="relative rounded-2xl w-full h-96 object-cover border border-white/10"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate fullstack developer with over 5 years of
                experience in creating innovative web applications and digital
                solutions. My journey in tech started with a curiosity for
                problem-solving and has evolved into a deep love for crafting
                exceptional user experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern JavaScript frameworks, cloud
                technologies, and scalable architecture design. When I'm not
                coding, you'll find me exploring new technologies, contributing
                to open-source projects, or mentoring aspiring developers.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { label: "Years Experience", value: "0" },
                  { label: "Projects Completed", value: "22+" },
                  
                  { label: "Code Commits", value: "180+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>


          {/* Technology Icons */}
          <motion.div
  className="mt-16 grid grid-cols-4 auto-rows-[120px] md:auto-rows-[150px] gap-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {[
    { name: "React", icon: Code, colSpan: 2, rowSpan: 2 },
    { name: "HTML", icon: HTML, colSpan: 1, rowSpan: 1 },
    { name: "Node.js", icon: Server, colSpan: 1, rowSpan: 1 },
    { name: "Database", icon: Database, colSpan: 2, rowSpan: 1 },
    { name: "Mobile", icon: Smartphone, colSpan: 1, rowSpan: 1 },
    { name: "API", icon: Server, colSpan: 1, rowSpan: 2 },
    { name: "Cloud", icon: Database, colSpan: 2, rowSpan: 1 },
  ].map((tech, index) => (
    <motion.div
      key={tech.name}
      className={`flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer
        col-span-${tech.colSpan} row-span-${tech.rowSpan}`}
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <tech.icon className="h-10 w-10 text-cyan-400 group-hover:text-purple-400 transition-colors mb-2" />
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </motion.div>
  ))}
</motion.div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
             Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group backdrop-blur-sm bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <a href="https://pokemon-universe-project-channu2002.vercel.app/"
                          size="sm"
                          className="bg-cyan-500 hover:bg-cyan-600 py-1.5 px-4 rounded-2xl"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                        <a
                        href="https://github.com/Channu-22/PokemonUniverse_Project"
                          size="sm"
                          variant="outline"
                         className="bg-cyan-500 hover:bg-cyan-600 py-1.5 px-4 rounded-2xl"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-slate-700/50 text-cyan-400 border border-cyan-400/20 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "channusinnur22072002@gmail.com",
                      href: "channusinnur22072002@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 9322605251",
                      href: "tel:+15551234567",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Solapur,Maharashtra,India",
                      href: "#",
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <contact.icon className="h-6 w-6 text-cyan-400 mr-4 group-hover:text-purple-400 transition-colors" />
                      <div>
                        <div className="text-sm text-gray-400">
                          {contact.label}
                        </div>
                        <div className="text-white group-hover:text-cyan-400 transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Github,
                        href: "https://github.com/Channu-22",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/chanabasappa-sinnur-826414246/",
                        label: "LinkedIn",
                      },
                      { icon: Twitter, href: "#", label: "Twitter" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md px-4 py-2 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md px-4 py-2 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md px-4 py-2 transition-all"
                />

                {/* Message */}
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md px-4 py-2 transition-all resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Alex Johnson. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
