"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Users, 
  Clock, 
  Calendar, 
  Trophy, 
  Target,
  ChevronRight,
  Zap,
  Award,
  Star,
  Filter,
  Search
} from "lucide-react"

// Renaissance Past Events Data (2024-25) - Replace with actual data from your report
const pastRenaissanceEvents = [
  {
    id: 1,
    name: "Death Race 2024",
    category: "Robotics",
    description: "An intense robotics competition where teams built autonomous vehicles to navigate challenging obstacle courses. Teams competed in speed, precision, and innovation.",
    date: "March 2024",
    duration: "3 days",
    participants: 180,
    teams: 30,
    colleges: 12,
    prizePool: "₹50,000",
    winners: {
      first: "Team Alpha Bots - KJSIT",
      second: "Team Robo Warriors - SPIT", 
      third: "Team Tech Titans - TSEC"
    },
    highlights: [
      "30 teams from 12 colleges",
      "3-day intensive competition",
      "Live streaming with 2K+ viewers",
      "Industry mentors as judges"
    ],
    image: "/coding-competition-death-race-event.jpg",
    gallery: [
      "/coding-competition-death-race-event.jpg",
      "/robotics-workshop-students-building-robots.jpg"
    ]
  },
  {
    id: 2,
    name: "Innovation Hackathon",
    category: "Software",
    description: "48-hour coding marathon focused on developing innovative solutions for real-world problems. Themes included healthcare, education, and sustainability.",
    date: "February 2024",
    duration: "48 hours",
    participants: 240,
    teams: 60,
    colleges: 15,
    prizePool: "₹75,000",
    winners: {
      first: "Team CodeCrafters - KJSIT",
      second: "Team InnovatorsHub - VJTI",
      third: "Team TechSavvy - KJ Somaiya"
    },
    highlights: [
      "60 teams, 240 participants",
      "15 colleges participation",
      "24/7 mentor support",
      "Industry problem statements"
    ],
    image: "/hackathon-coding-students-laptops.jpg",
    gallery: [
      "/hackathon-coding-students-laptops.jpg",
      "/tech-talk-presentation-audience.jpg"
    ]
  },
  {
    id: 3,
    name: "AI Challenge 2024",
    category: "Artificial Intelligence",
    description: "Multi-round AI competition testing participants on machine learning, deep learning, and prompt engineering across various domains.",
    date: "January 2024",
    duration: "2 days",
    participants: 150,
    teams: 50,
    colleges: 10,
    prizePool: "₹40,000",
    winners: {
      first: "Team AI Pioneers - KJSIT",
      second: "Team ML Masters - SPIT",
      third: "Team Data Wizards - VJTI"
    },
    highlights: [
      "50 teams competing",
      "4 rounds of challenges",
      "Industry-standard datasets",
      "Live leaderboard tracking"
    ],
    image: "/ai-artificial-intelligence-competition-students-la.jpg",
    gallery: [
      "/ai-artificial-intelligence-competition-students-la.jpg",
      "/ai-machine-learning-workshop-students-laptops.jpg"
    ]
  }
]

// Renaissance Upcoming Events 2025-26
const upcomingRenaissanceEvents = [
  {
    id: 1,
    name: "BGMI Tournament",
    category: "Gaming",
    description: "BGMI is more than just a game, it's a cultural phenomenon in India's gaming community. Every decision can be the difference between life and death. Engage in intense firefights, strategically plan your moves and outlast opponents in a race to be the last one standing.",
    date: "March 2025",
    duration: "2 days",
    venue: "IT Seminar Hall",
    expectedParticipants: 200,
    prizePool: "₹30,000",
    registrationOpen: true,
    difficulty: "Intermediate",
    tags: ["Gaming", "Strategy", "Team-based"],
    image: "/bgmi-gaming-tournament-students-playing-mobile-gam.jpg",
  },
  {
    id: 2,
    name: "AI Saga",
    category: "Artificial Intelligence",
    description: "A competition to find the top prompt creator for AI tools, testing efficiency, scenario simulation, and creativity. Rounds include Prompt Efficiency, Scenario Simulation, Creativity, and a stunning finale with AI image generation and voiceover creation.",
    date: "February 2025",
    duration: "1 day",
    venue: "Lab 603",
    expectedParticipants: 100,
    prizePool: "₹25,000",
    registrationOpen: true,
    difficulty: "Advanced",
    tags: ["AI", "Creativity", "Innovation"],
    image: "/ai-artificial-intelligence-competition-students-la.jpg",
  },
  {
    id: 3,
    name: "Tech Stake",
    category: "Programming",
    description: "Join us for a thrilling technical coding event where the stakes rise with every challenge! As participants solve increasingly complex problems, the risk and rewards grow higher. Test your skills, strategy, and nerve in this dynamic coding showdown!",
    date: "April 2025",
    duration: "2 days", 
    venue: "Lab 605",
    expectedParticipants: 120,
    prizePool: "₹40,000",
    registrationOpen: false,
    difficulty: "Expert",
    tags: ["Coding", "Algorithm", "Problem Solving"],
    image: "/high-stakes-coding-competition-intense-programming.jpg",
  },
  {
    id: 4,
    name: "Blind Coding",
    category: "Programming",
    description: "Blind Coding is a fast-paced single-round challenge where participants solve a problem in 30 minutes using any programming language. Submissions judged on correctness, efficiency, and readability.",
    date: "January 2025",
    duration: "1 day",
    venue: "Lab 701",
    expectedParticipants: 80,
    prizePool: "₹15,000",
    registrationOpen: true,
    difficulty: "Intermediate",
    tags: ["Coding", "Speed", "Logic"],
    image: "/blind-coding-programming-competition-students-typi.jpg",
  },
  {
    id: 5,
    name: "Tech Trivia",
    category: "Quiz",
    description: "The Tech Trivia event is a dynamic competition designed for 40-60 participants with four rounds of increasing difficulty. From tech basics to advanced topics, culminating in a rapid-fire buzzer round.",
    date: "February 2025",
    duration: "2 days",
    venue: "Lab 602",
    expectedParticipants: 60,
    prizePool: "₹20,000",
    registrationOpen: true,
    difficulty: "Beginner",
    tags: ["Quiz", "Knowledge", "Technology"],
    image: "/tech-trivia-quiz-competition-students-buzzer-round.jpg",
  },
  {
    id: 6,
    name: "Treasure Hunt",
    category: "Adventure",
    description: "Treasure hunt, the idea of hunting for hidden treasures has always been exciting and adventurous. In treasure hunt, participants work in small teams to find the treasure with the help of given clues. The team who decodes the code/clue and finds the treasure first will win the game.",
    date: "March 2025",
    duration: "1 day",
    venue: "College Campus",
    expectedParticipants: 150,
    prizePool: "₹18,000",
    registrationOpen: true,
    difficulty: "Beginner",
    tags: ["Adventure", "Team Work", "Problem Solving"],
    image: "/treasure-hunt-adventure-students-searching-clues.jpg",
  }
]

// Workshop Data - Replace with actual STEM workshop reports
const workshops = {
  novel: [
    {
      id: 3,
      name: "Photonics Workshop at Nareshwadi Learning Centre",
      description: "On 17th August 2024, a hands-on Photonics outreach was conducted at Nareshwadi Learning Centre, Dahanu (Palghar) under the guidance of Dr. Roshan Makkar. Six IEEE KJSIT student volunteers engaged 8th–10th graders with practical demonstrations on plane mirrors, laws of reflection, color observations, and properties of concave and convex lenses.",
      duration: "8:00 A.M onwards",
      lastConducted: "17 August 2024",
      participants: 6,
      outcomes: [
        "Hands-on understanding of laws of reflection",
        "Familiarity with concave and convex lens behavior",
        "Practical exposure to optical instruments",
        "Increased curiosity and interest in photonics"
      ],
      targetAudience: "8th–10th-grade students",
      image: "/Workshops/photonics/photonics1.png",
      gallery: [
        "/Workshops/photonics/photonics1.png",
        "/Workshops/photonics/photonics2.png",
        "/Workshops/photonics/photonics3.png"
      ],
      topics: [
        "Plane mirrors",
        "Laws of reflection",
        "Color observations",
        "Concave lenses",
        "Convex lenses",
        "Optical instruments"
      ]
    },
    {
      id: 4,
      name: "STM32CubeIDE Introduction Lecture",
      description: "A one-hour theory session introducing the STM32 microcontroller family and STM32CubeIDE workflow for TY EXTC students. Covered board variants, pinouts, peripherals (GPIO, ADC, timers, UART), development flow, debugging, and real-world applications in robotics and automation.",
      duration: "1:10 PM – 2:10 PM (1 hour)",
      lastConducted: "7 August 2025",
      participants: 13,
      outcomes: [
        "Understand STM32 family advantages and use-cases",
        "Map microcontroller features to project requirements",
        "Grasp CubeIDE flow: config, code, build, debug",
        "Identify peripherals: GPIO, ADC, timers, UART",
        "Confidence to explore STM32 ecosystem independently"
      ],
      targetAudience: "Third Year EXTC students",
      image: "/Workshops/photonics/STM/stm1.1.png",
      gallery: [
        "/Workshops/photonics/STM/stm1.1.png",
        "/Workshops/photonics/STM/stm1.2.png",
        "/Workshops/photonics/STM/stm1.3.png"
      ],
      topics: [
        "STM32 Overview",
        "STM32CubeIDE Workflow",
        "GPIO Configuration",
        "ADC Basics",
        "Timer Functions",
        "UART Communication",
        "Debugging in CubeIDE",
        "Low-power Considerations"
      ]
    }
  ],
  stem: [
    {
      id: 1,
      name: "STEM Workshop: Basics of Electronics (Orientation)",
      description: "Foundational introduction to voltage, current, resistance and hands-on breadboard practice (LED, resistor, diode, battery, potentiometer). Jointly organized by IEEE Bombay Section and IEEE-KJSIT.",
      duration: "2 hours (1:00 PM – 3:00 PM)",
      lastConducted: "October 1, 2024",
      participants: 80,
      schools: 1,
      outcomes: [
        "Exposure to core electronics concepts",
        "Practical breadboard proficiency (LED blink setup)",
        "Problem-solving through hands-on activity",
        "Peer networking and collaboration"
      ],
      targetAudience: "High school students",
      image: "/STEM%20Workshops/stem1.png",
      gallery: [
        "/STEM%20Workshops/stem1.png",
        "/STEM%20Workshops/stem1.1.png",
        "/STEM%20Workshops/stem1.2.png",
        "/STEM%20Workshops/stem1.3.png"
      ],
      topics: ["Voltage", "Current", "Resistance", "Breadboard", "LED", "Resistor", "Diode", "Battery", "Potentiometer"],
      venue: "V.P.M Kannada High School & Junior College, Mulund"
    },
    {
      id: 2,
      name: "STEM Workshop: Basics of Electronics (Orientation)",
      description: "Introductory session covering fundamentals of electronics followed by a live practical on breadboard usage and basic modules (LED with resistor, diode, battery, potentiometer).",
      duration: "1.5 hours (2:00 PM – 3:30 PM)",
      lastConducted: "September 24, 2024",
      participants: 80,
      schools: 1,
      outcomes: [
        "Understanding of basic electronics building blocks",
        "Hands-on LED circuit on breadboard",
        "Confidence to explore simple electronic projects",
        "Increased interest in STEM fields"
      ],
      targetAudience: "High school students",
      image: "/STEM%20Workshops/stem2.0.png",
      gallery: [
        "/STEM%20Workshops/stem2.0.png",
        "/STEM%20Workshops/stem2.1.png",
        "/STEM%20Workshops/stem2.2.png",
        "/STEM%20Workshops/stem2.3.png"
      ],
      topics: ["Voltage", "Current", "Resistance", "Breadboard", "LED", "Resistor", "Diode", "Battery", "Potentiometer"],
      venue: "Auxilium Convent High School, Wadala"
    }
  ]
}

const renaissanceStats = {
  totalParticipants: "1000+",
  events: "25+",
  colleges: "20+",
  duration: "2 Days"
}

function WorkshopImage({ gallery, image }: { gallery?: string[]; image: string }) {
  const images = gallery && gallery.length > 0 ? gallery : [image]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <div className="relative w-full aspect-[16/9] bg-white overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="workshop"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          draggable={false}
        />
      ))}
    </div>
  )
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])

  // Deterministic pseudo-random positions for background particles to avoid
  // hydration mismatches and mobile blink while scrolling
  function mulberry32(seed: number) {
    return function () {
      let t = (seed += 0x6d2b79f5)
      t = Math.imul(t ^ (t >>> 15), t | 1)
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }
  const rand = mulberry32(1337)
  const particles = Array.from({ length: 30 }, () => ({ x: rand(), y: rand(), d: 2 + rand() * 2 }))

  const categories = ["all", "Programming", "AI", "Gaming", "Quiz", "Adventure", "Robotics"]
  
  const filteredUpcomingEvents = upcomingRenaissanceEvents.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#00629B]">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          {/* Animated Background Elements (deterministic, no window access) */}
          <div className="absolute inset-0">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%`, width: 4, height: 4 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{ duration: 3 + (i % 10) * 0.2, repeat: Infinity, delay: (i % 20) * 0.1 }}
              />
            ))}
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg mb-6">
              <Zap className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] font-semibold text-sm tracking-wider">IEEE KJSIT 2025-26</span>
            </div>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA000] to-[#FF8F00] bg-clip-text text-transparent">
                Events
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovation in Action
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover our technical festivals, workshops, and competitions that shape the future of technology
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFA000] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Explore Renaissance
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white hover:text-[#00629B] font-semibold px-8 py-4 rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              View Workshops
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Renaissance Techfest Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA000] rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00629B] to-[#0d47a1] bg-clip-text text-transparent">
                Renaissance
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our flagship 2-day techfest bringing together innovation, competition, and technical excellence
            </p>
            
            {/* Renaissance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {Object.entries(renaissanceStats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00629B] mb-2">{value}</div>
                  <div className="text-sm md:text-base text-gray-600 capitalize font-medium">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Event Navigation */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-white p-1.5 md:p-2 rounded-2xl shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "upcoming" 
                    ? "bg-[#00629B] text-white shadow-lg transform scale-105" 
                    : "text-gray-600 hover:text-[#00629B] hover:bg-gray-50"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === "past" 
                    ? "bg-[#00629B] text-white shadow-lg transform scale-105" 
                    : "text-gray-600 hover:text-[#00629B] hover:bg-gray-50"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          {activeTab === "upcoming" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-[#00629B] text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {category === "all" ? "All Events" : category}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00629B] focus:border-transparent w-64 sm:w-72 md:w-80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredUpcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#00629B]/30 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 bg-[#00629B] text-white rounded-full text-xs font-semibold">
                          {event.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.difficulty === "Beginner" ? "bg-green-100 text-green-800" :
                          event.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {event.difficulty}
                        </span>
                      </div>
                      {event.registrationOpen && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold animate-pulse">
                            Open
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
                        {event.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{event.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{event.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{event.venue}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{event.expectedParticipants} expected</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button 
                        className={`w-full font-semibold transition-all duration-300 group-hover:scale-105 ${
                          event.registrationOpen 
                            ? "bg-[#00629B] hover:bg-[#005080] text-white" 
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!event.registrationOpen}
                      >
                        {event.registrationOpen ? "Register Now" : "Coming Soon"}
                        {event.registrationOpen && <ChevronRight className="ml-2 w-4 h-4" />}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Past Events Grid */}
          {activeTab === "past" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastRenaissanceEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#00629B] text-white rounded-full text-xs font-semibold">
                          {event.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#00629B] rounded-full text-xs font-semibold">
                          {event.date}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-[#00629B]">{event.participants}</div>
                          <div className="text-xs text-gray-500">Participants</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-[#00629B]">{event.teams}</div>
                          <div className="text-xs text-gray-500">Teams</div>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-[#00629B]">{event.colleges}</div>
                          <div className="text-xs text-gray-500">Colleges</div>
                        </div>
                      </div>
                      
                      {/* Winners */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                          <Award className="w-4 h-4 text-[#FFD700]" />
                          Winners
                        </h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-[#FFD700] text-black rounded-full flex items-center justify-center text-xs font-bold">1</div>
                            <span className="truncate">{event.winners.first}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                            <span className="truncate">{event.winners.second}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-[#CD7F32] text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                            <span className="truncate">{event.winners.third}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        variant="outline"
                        className="w-full border-[#00629B] text-[#00629B] hover:bg-[#00629B] hover:text-white bg-transparent text-sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Workshops</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Hands-on learning experiences in cutting-edge technologies and STEM education
            </p>
            <div className="w-24 h-1 bg-[#00629B] mx-auto"></div>
          </motion.div>

          {/* STEM Workshops */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#FFA000] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">STEM Workshops</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.stem.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <WorkshopImage gallery={(workshop as any).gallery} image={workshop.image || "/placeholder.svg"} />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-[#FFD700] text-black rounded-full text-sm font-semibold">
                        STEM Outreach
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-sm font-semibold">
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{workshop.name}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-[#00629B]">{workshop.participants}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-[#00629B]">{workshop.schools}</div>
                        <div className="text-xs text-gray-500">Schools</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-[#00629B]">{workshop.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {workshop.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Topics Covered</h5>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic) => (
                          <span key={topic} className="px-3 py-1 bg-[#FFD700]/20 text-[#B8860B] rounded-full text-sm font-medium">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      <strong>Target Audience:</strong> {workshop.targetAudience}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA000] hover:from-[#FFA000] hover:to-[#FFD700] text-black font-semibold">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Novel Workshops */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-[#00629B] to-[#0d47a1] rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Novel Workshops</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.novel.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <WorkshopImage gallery={(workshop as any).gallery} image={workshop.image || "/placeholder.svg"} />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-2 bg-[#00629B] text-white rounded-full text-sm font-semibold">
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{workshop.name}</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{workshop.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{workshop.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.lastConducted}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Learning Outcomes</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {workshop.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#00629B] rounded-full"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Topics Covered</h5>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic) => (
                          <span key={topic} className="px-3 py-1 bg-[#00629B]/10 text-[#00629B] rounded-full text-sm font-medium">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      <strong>Target Audience:</strong> {workshop.targetAudience}
                    </div>
                    
                    <Button className="w-full bg-[#00629B] hover:bg-[#005080] text-white font-semibold">
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}