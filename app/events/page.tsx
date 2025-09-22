"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Clock } from "lucide-react"

// Upcoming Renaissance Events Data
const upcomingEvents = [
  {
    id: 1,
    name: "BGMI Tournament",
    description:
      "BGMI is more than just a game, it's a cultural phenomenon in India's gaming community. Every decision can be the difference between life and death. It engages in intense firefights, strategically plan your moves and outlast opponents in a race to be the last one standing.",
    days: 2,
    venue: "IT Seminar Hall",
    type: "Non-Tech",
    priority: 1,
    image: "/bgmi-gaming-tournament-students-playing-mobile-gam.jpg",
  },
  {
    id: 2,
    name: "Treasure Hunt",
    description:
      "Treasure hunt, the idea of hunting for hidden treasures has always been exciting and adventurous. In treasure hunt, participants work in small teams to find the treasure with the help of given clues. The team who decodes the code/clue and finds the treasure first will win the game.",
    days: 1,
    venue: "College Campus",
    type: "Non-Tech",
    priority: 2,
    image: "/treasure-hunt-adventure-students-searching-clues.jpg",
  },
  {
    id: 3,
    name: "AI Saga",
    description:
      "A competition to find the top prompt creator for AI tools, testing efficiency, scenario simulation, and creativity. Rounds include Prompt Efficiency, Scenario Simulation, Creativity, and a stunning finale with AI image generation and voiceover creation.",
    days: 1,
    venue: "Lab 603",
    type: "Tech",
    priority: 5,
    image: "/ai-artificial-intelligence-competition-students-la.jpg",
  },
  {
    id: 4,
    name: "Tech Trivia",
    description:
      "The Tech Trivia event is a dynamic competition designed for 40-60 participants with four rounds of increasing difficulty. From tech basics to advanced topics, culminating in a rapid-fire buzzer round.",
    days: 2,
    venue: "Lab 602",
    type: "Tech",
    priority: 6,
    image: "/tech-trivia-quiz-competition-students-buzzer-round.jpg",
  },
  {
    id: 5,
    name: "Blind Coding",
    description:
      "Blind Coding is a fast-paced single-round challenge where participants solve a problem in 30 minutes using any programming language. Submissions judged on correctness, efficiency, and readability.",
    days: 1,
    venue: "Lab 701",
    type: "Tech",
    priority: 7,
    image: "/blind-coding-programming-competition-students-typi.jpg",
  },
  {
    id: 6,
    name: "Tech Stake",
    description:
      "Join us for a thrilling technical coding event where the stakes rise with every challenge! As participants solve increasingly complex problems, the risk and rewards grow higher. Test your skills, strategy, and nerve in this dynamic coding showdown!",
    days: 2,
    venue: "Lab 605",
    type: "Tech",
    priority: 8,
    image: "/high-stakes-coding-competition-intense-programming.jpg",
  },
]

// Past Events Data (placeholder - replace with actual data)
const pastEvents = [
  {
    id: 1,
    name: "Death Race 2024",
    description: "Robotics competition that challenged teams to build autonomous vehicles",
    participants: 150,
    teams: 25,
    image: "/coding-competition-death-race-event.jpg",
    stats: { participants: "150+", teams: "25", duration: "3 days" },
  },
  {
    id: 2,
    name: "Innovation Hackathon",
    description: "48-hour coding marathon for innovative solutions",
    participants: 200,
    teams: 40,
    image: "/hackathon-coding-students-laptops.jpg",
    stats: { participants: "200+", teams: "40", duration: "48 hours" },
  },
  {
    id: 3,
    name: "Tech Talk Series",
    description: "Industry experts sharing insights on emerging technologies",
    participants: 300,
    teams: 0,
    image: "/tech-talk-presentation-audience.jpg",
    stats: { participants: "300+", speakers: "12", sessions: "6" },
  },
]

// Workshop Data
const workshops = {
  novel: [
    {
      id: 1,
      name: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering fundamentals of AI and ML",
      duration: "2 days",
      participants: 80,
      image: "/ai-machine-learning-workshop-students-laptops.jpg",
    },
    {
      id: 2,
      name: "Blockchain Technology",
      description: "Understanding blockchain and cryptocurrency development",
      duration: "1 day",
      participants: 60,
      image: "/blockchain-workshop-cryptocurrency-technology.jpg",
    },
  ],
  stem: [
    {
      id: 1,
      name: "Robotics & Automation",
      description: "Building and programming autonomous robots",
      duration: "3 days",
      participants: 100,
      image: "/robotics-workshop-students-building-robots.jpg",
    },
    {
      id: 2,
      name: "IoT Development",
      description: "Internet of Things projects and applications",
      duration: "2 days",
      participants: 75,
      image: "/iot-workshop-sensors-microcontrollers-students.jpg",
    },
  ],
}

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#00629B] to-[#0d47a1]">
        <div className="absolute inset-0">
          <div className="particles-container absolute inset-0 opacity-20">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
            {/* Connection lines */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`,
                  width: `${50 + Math.random() * 100}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* IEEE Badge */}
          <div className="inline-block mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg animate-fade-in">
            <span className="text-[#FFD700] font-semibold text-sm tracking-wider">IEEE KJSIT 2025-26</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] via-[#FFA000] to-[#FF8F00] bg-clip-text text-transparent animate-gradient">
            Events
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">Innovation in Action</h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Discover our technical festivals, workshops, and competitions that shape the future of technology
          </p>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out 0.3s both;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* Renaissance Techfest Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Renaissance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our flagship techfest bringing together innovation, competition, and technical excellence
            </p>
            <div className="w-24 h-1 bg-[#00629B] mx-auto"></div>
          </div>

          {/* Event Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-2 rounded-full">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "upcoming" ? "bg-[#00629B] text-white shadow-lg" : "text-gray-600 hover:text-[#00629B]"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "past" ? "bg-[#00629B] text-white shadow-lg" : "text-gray-600 hover:text-[#00629B]"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          {activeTab === "upcoming" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#00629B]/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          event.type === "Tech" ? "bg-[#00629B] text-white" : "bg-[#FFD700] text-gray-900"
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {event.days} Day{event.days > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-[#00629B] hover:bg-[#005080] text-white group-hover:scale-105 transition-all duration-300">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Past Events */}
          {activeTab === "past" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00629B] transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(event.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-[#00629B]">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-[#00629B] text-[#00629B] hover:bg-[#00629B] hover:text-white bg-transparent"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Hands-on learning experiences in cutting-edge technologies
            </p>
            <div className="w-24 h-1 bg-[#00629B] mx-auto"></div>
          </div>

          {/* Novel Workshops */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Novel Workshops</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.novel.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{workshop.name}</h4>
                    <p className="text-gray-600 mb-4">{workshop.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {workshop.participants} participants
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STEM Workshops */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">STEM Workshops</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.stem.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{workshop.name}</h4>
                    <p className="text-gray-600 mb-4">{workshop.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {workshop.participants} participants
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#00629B] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-lg opacity-90">Total Participants</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
              <div className="text-lg opacity-90">Events Organized</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-lg opacity-90">Workshops Conducted</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                100+
              </div>
              <div className="text-lg opacity-90">Projects Showcased</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
