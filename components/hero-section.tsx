"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function HeroSection() {
  useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        })
      }
    }

    const timer = setTimeout(loadParticles, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92] text-white px-4 pt-8 md:pt-16 lg:pt-24 pb-10">
      <div id="particles-js" className="absolute inset-0 z-10"></div>

      <div className="max-w-5xl mx-auto text-center relative z-20 px-2 md:px-4">
        <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-3 md:mb-6 text-[#FFD700] tracking-wider animate-fade-down">
          IEEE KJSIT 2025-26
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-balance leading-tight md:leading-[1.1] lg:leading-[1.05]">
          <span className="inline-block bg-gradient-to-r from-[#FFD700] via-[#ffa500] to-[#FFD700] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
            IEEE KJSIT
          </span>
          <br />
          <span className="text-white drop-shadow-lg">
            Advancing Technology
            <br />
            for Humanity
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-blue-100/90 mb-8 md:mb-10 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-up">
          Empowering students through innovation, knowledge, and technical excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button
            size="lg"
            className="bg-[#00629B] hover:bg-[#005080] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Discover More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/50 text-white hover:bg-white hover:text-[#00629B] font-semibold px-8 py-3 rounded-full bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Our Events
          </Button>
        </div>
      </div>
    </section>
  )
}
