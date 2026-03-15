import { Card, CardContent } from "@/components/ui/card"

const leaders = [
  {
    name: "Dr. Vivek Sunnapwar",
    position: "PRINCIPAL, KJSIT",
    image: "/images/principal-dr-vivek-sunnapwar.png",
    description:
      "With an ideology that the root of innovation is 'Interest', the curriculum offers a wide range of elective courses grouped into core and inter-disciplinary domains. At par with international engineering education, the students can choose to study courses concerning areas of their interests.",
  },
  {
    name: "Prof. Pranali Hatode",
    position: "IEEE COORDINATOR, KJSIT",
    image: "/images/prof-pranali-hatode.png",
    description:
      "With its vision and mission in mind, The IEEE will always continue to uplift the engineers to get up skilled and develop a foresight in their respective fields for the betterment of themselves and the society at large, wherever they may be.",
  },
  {
    name: "Prof. Sandeep Mishra",
    position: "IEEE COUNSELLOR, KJSIT",
    image: "/images/prof-sandeep-mishra.png",
    description:
      "We at KJSIT are focused at student's all round academic and personal development. I believe the IEEE provides a professional and capable platform for multi-skilled, professional, co-curricular, extracurricular and lifelong learning activities which develop an efficient engineer down the road.",
  },
]

export default function LeadershipSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Leadership</h2>
          <div className="relative inline-block">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-pretty font-medium">
              Meet the visionaries guiding our IEEE Student Branch
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0066cc] rounded-full"></div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Principal Card - Featured */}
          <div className="flex justify-center">
            <Card className="max-w-2xl w-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={leaders[0].image || "/placeholder.svg"}
                        alt={leaders[0].name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#0066cc] shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0066cc] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leaders[0].name}</h3>
                    <div className="relative inline-block mb-4">
                      <p className="text-[#0066cc] font-bold text-sm tracking-wide uppercase">{leaders[0].position}</p>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-pretty">{leaders[0].description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coordinator and Counsellor Cards - Side by side */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leaders.slice(1).map((leader, index) => (
              <div
                key={index + 1}
                className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="mb-6">
                      <div className="relative inline-block">
                        <img
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-[#0066cc] shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#0066cc] rounded-full flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>

                    <div className="relative inline-block mb-4">
                      <p className="text-[#0066cc] font-bold text-sm tracking-wide uppercase">{leader.position}</p>
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed text-pretty">{leader.description}</p>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
