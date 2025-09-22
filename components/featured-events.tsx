"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Death Race",
    description: "Robotics competition during Renaissance",
    image: "/coding-competition-death-race-event.jpg",
  },
  {
    id: 2,
    title: "Tech Talk Series",
    description: "Industry experts sharing insights on emerging technologies",
    image: "/tech-talk-presentation-audience.jpg",
  },
  {
    id: 3,
    title: "Innovation Hackathon",
    description: "48-hour coding marathon for innovative solutions",
    image: "/hackathon-coding-students-laptops.jpg",
  },
]

export default function FeaturedEvents() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our recent technical activities and events</p>
          <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Background Image */}
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-6">
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h3>
                    <p className="text-lg md:text-xl mb-8 opacity-90">{event.description}</p>
                    <Button className="bg-[#00629B] hover:bg-[#005080] text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
