import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Get in touch with the IEEE KJSIT Student Branch
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#0066cc] mr-3" />
                <span className="text-gray-600">ieee.tech@somaiya.edu</span>
              </div>

              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#0066cc] mr-3" />
                <span className="text-gray-600">K. J. Somaiya Institute of Technology, Mumbai-22</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="p-2 bg-transparent">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent resize-none"
              ></textarea>

              <Button className="w-full bg-[#0066cc] hover:bg-[#003d7a]">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
