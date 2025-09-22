import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="inline-block">
            <p className="text-lg text-gray-600 text-pretty">Discover the IEEE KJSIT Student Branch</p>
            <div className="w-16 h-1 bg-[#0066cc] mx-auto mt-2"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/kjsit-building.png"
              alt="K.J. Somaiya Institute of Technology Building"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">K. J. Somaiya Institute of Technology</h3>
              <div className="w-16 h-1 bg-[#dc2626]"></div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="text-pretty">
                KJSIT has been accredited by NAAC with 'A' grade (3.21 CGPA) for 5 years. Three programs of KJSIT have
                been accredited by National Board of Accreditation (NBA). KJSIT has been presented the Best College
                Award by the University of Mumbai for A.Y. 2018-19 (Urban Region), CSI (Mumbai Chapter) and ISTE (MH and
                Goa Section).
              </p>

              <p className="text-pretty">
                IEEE KJSIT commits to foster technological innovation and excellence for the benefit of humanity. We
                nurture and promote innovative technical ideas, solicit and refine quality technical information, and
                support personal development on all fronts in an individual.
              </p>
            </div>

            <Button className="mt-6 bg-[#0066cc] hover:bg-[#003d7a]">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
