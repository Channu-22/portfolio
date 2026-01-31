import { FaJava as JAVA } from "react-icons/fa6";
import { TbFileTypeSql as SQL } from "react-icons/tb";
import { IoLogoHtml5 as HTML } from "react-icons/io5";
import { FaCss3 as CSS } from "react-icons/fa6";
import { RiTailwindCssFill as CSS2 } from "react-icons/ri";
import { IoLogoJavascript as JAVASCRIPT } from "react-icons/io5";
import { RiReactjsLine as REACT } from "react-icons/ri";
import { BiLogoMongodb as MONGO } from "react-icons/bi";
import { FaNode as NODE } from "react-icons/fa6";
import { SiExpress as EXPRESS } from "react-icons/si";
import { FaGithubSquare as GIT } from "react-icons/fa";
import { SiPostman as POSTMAN } from "react-icons/si";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  const [activeSection, setActiveSection] = useState("home");
  const [typedText] = useState("");
  const heroY = useTransform(scrollY, [0, 500], [0, -150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [showBackToTop] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xkgzzzbz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage(
          "Message sent successfully! We'll get back to you soon."
        );
        reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

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
      title: "Food Delivery–Frontend",
      description:
        "Built a responsive food delivery user interface using React and Tailwind CSS. Users can browse food items, view details, add items to the cart, manage quantities, and place orders. Implemented secure authentication with JWT, real-time cart updates, and Stripe payment integration for smooth checkout. Focused on clean UI, fast performance, and mobile-first design.",
      image: "/foodDel.png",
      tech: [
        "TailwindCSS",
        "ReactJS",
        "Context API",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "JWT",
        "Stripe API",
      ],
      category: "fullstack",
      github: "https://github.com/Channu-22/Food_Del_2026/",
      demo: "https://food-del-channu-frontend.onrender.com/",
    },

    {
      id: 2,
      title: "Food Delivery-Admin Panel",
      description:
        "Developed an admin dashboard to manage the food delivery platform efficiently. Admins can add, update, and delete food items, manage categories, view user orders, and track order status. Implemented secure admin authentication and role-based access. Integrated backend APIs using Node.js and Express with MongoDB for real-time data management.",
      image: "/admin.png",
      tech: ["TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "JWT"],
      category: "fullstack",
      github: "https://github.com/Channu-22/Food_Del_2026",
      demo: "https://food-del-channu-adminpanel.onrender.com/",
    },
    {
      id: 3,
      title: "Ecommerce",
      description:
        "Developed a dynamic e-commerce web app with firebase. Full-featured platform with signUp and signIn method.",
      image: "/ecommerce.png",
      tech: ["TailwindCSS", "ReactJS", "FireBase"],
      category: "fullstack",
      github: "https://github.com/Channu-22/ecommerce22/",
      demo: "https://ecommerce-channu22.vercel.app",
    },
    {
      id: 4,
      title: "Movies",
      description:
        "Developed a dynamic Movix web app using React, Redux Toolkit, and Firebase. Full-featured platform with secure sign up/sign in and real-time movies from TMDB API.",
      image: "/Movix.png",
      tech: ["TailwindCSS", "ReactJS", "ReduxToolKit", "FireBase"],
      category: "fullstack",
      github: "https://github.com/Channu-22/Movies_Project_22",
      demo: "https://movies-project-channu-22.vercel.app/",
    },
    {
      id: 5,
      title: "pokemonUniverse",
      description:
        "Built PokémonUniverse, a responsive web app using HTML, CSS, JS with PokéAPI integration to fetch and display dynamic nested Pokémon data.",
      image: "/Pokemon.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Channu-22/PokemonUniverse_Project",
      demo: "https://pokemon-universe-project-channu2002.vercel.app/",
    },
    {
      id: 6,
      title: "LeaderBoard",
      description:
        "Developed a Leaderboard app with React.js, featuring real-time score updates, user ranking, and a responsive, interactive interface.",
      image: "/leaderBoard.png",
      tech: ["TailwindCSS", "React"],
      category: "frontend",
      github: "https://github.com/Channu-22/leaderBoard_React",
      demo: "https://leader-board-react-channu22.vercel.app/",
    },
    {
      id: 7,
      title: "emojiList",
      description:
        "Created EmojiList, a fun web app using HTML, CSS, and JavaScript to search and display emojis with real-time filtering and meaning display.",
      image: "/emoji.png",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Channu-22/emojiList",
      demo: "https://emojilist-peach.vercel.app/",
    },
    {
      id: 8,
      title: "sinnurRestaurant",
      description:
        "Designed a fully responsive restaurant website using Tailwind CSS, featuring hero section, chef showcase, styled menu, smooth navigation, and custom transitions.",
      image: "sinnur.png",
      tech: ["HTML", "tailwindCSS"],
      category: "frontend",
      github: "https://github.com/Channu-22/sinnurRestaurant",
      demo: "https://sinnur-restaurant.vercel.app/",
    },
    {
      id: 9,
      title: "TodoList",
      description:
        "Built a Task Manager with dynamic UI using JavaScript, featuring add, edit, delete functionality and smart button state handling.",
      image: "/todoList.png",
      tech: ["React"],
      category: "frontend",
      github: "https://github.com/Channu-22/simpleTodoList_projectInReact",
      demo: "https://simple-todo-list-project-in-react-c.vercel.app/",
    },
    {
      id: 10,
      title: "amazon webScrapping",
      description:
        "Web scraped Amazon using Node.js to extract product data (brand, title, image, rating, price) and converted it into JSON and XLSX formats for analysis.",
      tech: ["NodeJS"],
      category: "backend",
      github: "https://github.com/Channu-22/amazon_webScrapping",
      demo: "#",
    },
    {
      id: 11,
      title: "myFirstProject",
      description:
        "Created a responsive multi-section layout using HTML and CSS featuring a navigation bar and content sections about Shivaji Maharaj, a traditional Indian woman, and the Vitthal Temple, with text and images arranged in a clean, visually appealing design.",
      image: "/first.png",
      tech: ["HTML", "CSS"],
      category: "frontend",
      github: "https://github.com/Channu-22/simpleLayout1",
      demo: "https://simple-layout1-channu22.vercel.app/",
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
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text flex gap-1">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 cursor-pointer">
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
                  src="/channu2.jpg?height=120&width=120"
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
            "I have hands-on experience with Java, SQL, and the MERN stack, and
            I’m deeply driven by a strong interest in web development and
            emerging technologies. I’m actively seeking opportunities as a
            Software Engineer, SDE, or Web Developer where I can contribute and
            grow."
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
              href="/ChannuSinnur_B.tech.pdf"
              download="Chanabasappa_B.tech.pdf"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent flex items-center justify-center"
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
                  src="/channu1.jpg?height=400&width=400"
                  alt="About Me"
                  className="relative rounded-2xl w-full h-[500px] object-cover border border-white/10"
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
                I am fluent in programming languages like Java and SQL, with a
                strong interest in full-stack web development. My passion lies
                in building modern web technologies and real-world applications
                that solve real problems. On the frontend, I work with React.js
                to create interactive and responsive user interfaces. On the
                backend, I build scalable APIs and server-side applications
                using Node.js, Express.js, and MongoDB. I love turning ideas
                into working products and continuously strive to sharpen my
                skills in both frontend and backend development.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { label: "Years Experience", value: "0" },
                  { label: "Projects Completed", value: "30+" },
                  { label: "Code Commits", value: "250+" },
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
              { name: "Java", icon: JAVA, colSpan: 2, rowSpan: 2 },
              { name: "SQL", icon: SQL, colSpan: 2, rowSpan: 2 },
              { name: "HTML", icon: HTML, colSpan: 1, rowSpan: 1 },
              { name: "CSS", icon: CSS, colSpan: 2, rowSpan: 2 },
              { name: "Tailwind CSS", icon: CSS2, colSpan: 2, rowSpan: 1 },
              { name: "JavaScript", icon: JAVASCRIPT, colSpan: 1, rowSpan: 1 },
              { name: "React JS", icon: REACT, colSpan: 2, rowSpan: 1 },
              { name: "Node JS", icon: NODE, colSpan: 2, rowSpan: 1 },
              { name: "Express JS", icon: EXPRESS, colSpan: 2, rowSpan: 1 },
              { name: "MongoDB", icon: MONGO, colSpan: 2, rowSpan: 1 },
              { name: "Github", icon: GIT, colSpan: 2, rowSpan: 1 },
              { name: "Postman", icon: POSTMAN, colSpan: 2, rowSpan: 1 },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer col-span-${tech.colSpan} row-span-${tech.rowSpan}`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <tech.icon className="h-10 w-10 text-cyan-400 group-hover:text-purple-400 transition-colors mb-2" />
                <span className="text-[20px] text-gray-300 group-hover:text-white transition-colors">
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
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 hover:bg-cyan-600 py-1.5 px-4 rounded-2xl flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-500 hover:bg-cyan-600 py-1.5 px-4 rounded-2xl flex items-center"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Git
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
                      href: "mailto:channusinnur22072002@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 9322605251",
                      href: "tel:+919322605251",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Solapur, Maharashtra, India",
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
                        target="_blank"
                        rel="noopener noreferrer"
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

              <div className="space-y-6">
                {submitMessage && (
                  <div
                    className={`mb-6 p-4 rounded-xl text-center font-medium ${
                      submitMessage.includes("successfully")
                        ? "bg-emerald-900/30 text-emerald-400 border border-emerald-400/50"
                        : "bg-red-900/30 text-red-400 border border-red-400/50"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md transition-all duration-300 ${
                          errors.name
                            ? "border-red-400 bg-red-900/30"
                            : "border-white/10 hover:border-cyan-400/50"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400 font-medium">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={`w-full px-4 py-3 bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md transition-all duration-300 ${
                          errors.email
                            ? "border-red-400 bg-red-900/30"
                            : "border-white/10 hover:border-cyan-400/50"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-400 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      className={`w-full px-4 py-3 bg-slate-800/50 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 rounded-md transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-400 bg-red-900/30"
                          : "border-white/10 hover:border-cyan-400/50"
                      }`}
                      placeholder="Tell us what's on your mind..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed scale-95"
                        : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                </form>

                {/* Footer Message */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-400">
                    <svg
                      className="w-5 h-5 text-cyan-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm font-medium text-purple-400">
                      Expect a reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
