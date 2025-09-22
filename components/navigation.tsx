"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Users, Calendar, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: Users },
    { name: "Teams", href: "/teams", icon: Users },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "AlgoForge", href: "/algoforge", icon: Code },
  ]

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 text-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <Image
                    src="/images/ieee-kjsit-logo.png"
                    alt="IEEE KJSIT Logo"
                    width={350}
                    height={113}
                    className="h-20 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#00629B] transition-all duration-300 rounded-lg hover:bg-blue-50/80 group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00629B]/5 to-[#005080]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#00629B] to-[#005080] group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </Link>
                ))}

                <div className="ml-6 pl-6 border-l border-gray-200">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#00629B] to-[#005080] hover:from-[#005080] hover:to-[#00629B] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/events">Join Events</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#00629B] hover:bg-blue-50/80 relative z-[60] rounded-lg"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>
        {/* Backdrop overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00629B] to-[#005080] p-6 text-white">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/ieee-kjsit-logo.png"
                alt="IEEE KJSIT Logo"
                width={100}
                height={32}
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-sm text-blue-100 mt-2">IEEE Students Chapter</p>
          </div>

          {/* Navigation Items */}
          <div className="py-6">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-[#00629B] transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors duration-200">
                    <IconComponent className="h-5 w-5 text-gray-600 group-hover:text-[#00629B]" />
                  </div>
                  <span className="font-medium text-base">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">K. J. Somaiya Institute of Technology</p>
              <p className="text-xs text-gray-400 mt-1">Mumbai-22</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
