import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="ieee-gradient text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* IEEE KJSIT Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/ieee-kjsit-logo.png"
                alt="IEEE KJSIT Logo"
                width={350}
                height={113}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-blue-100 text-sm text-pretty">
              IEEE Student Branch at K.J. Somaiya Institute of Technology, dedicated to advancing technology for
              humanity through innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-blue-100 hover:text-[#ffd700] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-100 hover:text-[#ffd700] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-blue-100 hover:text-[#ffd700] transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-blue-100 hover:text-[#ffd700] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/algoforge" className="text-blue-100 hover:text-[#ffd700] transition-colors">
                  AlgoForge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-blue-100">
              <p>ieee@kjsit.somaiya.edu.in</p>
              <p>+91 98765 43210</p>
              <p className="text-pretty">K.J. Somaiya Institute of Technology, Sion East, Mumbai</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100 text-sm">© 2024 IEEE KJSIT Student Branch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
