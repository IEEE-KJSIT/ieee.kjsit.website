import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const teamData = {
  leadership: [
    {
      name: "Taher Stovewala",
      position: "Chairperson",
      image: "/professional-male-student-leader-portrait.jpg",
      description: "Leading IEEE KJSIT with vision, innovation, and dedication to technical excellence.",
      linkedin: "#",
      email: "taher@ieee.kjsit.edu",
    },
    {
      name: "Roshan Rawat",
      position: "Vice Chairperson",
      image: "/professional-male-student-leader-portrait.jpg",
      description: "Supporting strategic initiatives and fostering collaborative growth within the branch.",
      linkedin: "#",
      email: "roshan@ieee.kjsit.edu",
    },
  ],
  core: [
    {
      name: "Krishna Jogi",
      position: "Secretary",
      image: "/professional-male-student.png",
      description: "Managing communications, documentation, and administrative excellence.",
      linkedin: "#",
      email: "krishna@ieee.kjsit.edu",
    },
    {
      name: "Navya Prabhu",
      position: "Treasurer",
      image: "/professional-female-student-portrait.jpg",
      description: "Managing financial planning, budgets, and resource allocation.",
      linkedin: "#",
      email: "navya@ieee.kjsit.edu",
    },
    {
      name: "Shriya Koul",
      position: "Public Relations Officer",
      image: "/professional-female-student-portrait.jpg",
      description: "Building relationships and managing external communications.",
      linkedin: "#",
      email: "shriya@ieee.kjsit.edu",
    },
    {
      name: "Harshad Jagtap",
      position: "Chief Marketing Officer",
      image: "/professional-male-student.png",
      description: "Driving marketing strategies and brand development initiatives.",
      linkedin: "#",
      email: "harshad@ieee.kjsit.edu",
    },
    {
      name: "Aditya Ranjan",
      position: "Chief Executive Officer",
      image: "/professional-male-student.png",
      description: "Overseeing operations and driving strategic execution of branch initiatives.",
      linkedin: "#",
      email: "aditya@ieee.kjsit.edu",
    },
    {
      name: "Qasim Kharodia",
      position: "Chief Technical Officer",
      image: "/professional-male-student.png",
      description: "Leading technical innovation and development projects.",
      linkedin: "#",
      email: "qasim@ieee.kjsit.edu",
    },
    {
      name: "Viren Patel",
      position: "Chief Operating Officer",
      image: "/professional-male-student.png",
      description: "Managing day-to-day operations and process optimization.",
      linkedin: "#",
      email: "viren@ieee.kjsit.edu",
    },
    {
      name: "Saksham Sapru",
      position: "Digital Media Manager",
      image: "/professional-male-student.png",
      description: "Managing digital presence and multimedia content creation.",
      linkedin: "#",
      email: "saksham@ieee.kjsit.edu",
    },
  ],
  subCore: [
    {
      name: "Aayush Gujarathi",
      position: "Jt. Secretary",
      image: "/professional-student-portrait.png",
      description: "Supporting secretarial duties and administrative tasks.",
      linkedin: "#",
    },
    {
      name: "Anshita Vasani",
      position: "Jt. Treasurer",
      image: "/professional-female-student-portrait.jpg",
      description: "Assisting with financial management and budget tracking.",
      linkedin: "#",
    },
    {
      name: "Udhay Bhardwaj",
      position: "Jt. Public Relations Officer",
      image: "/professional-student-portrait.png",
      description: "Supporting PR activities and community engagement.",
      linkedin: "#",
    },
    {
      name: "Kesa Sayyed",
      position: "Jt. Chief Executive Officer",
      image: "/professional-female-student-portrait.jpg",
      description: "Assisting with executive operations and strategic planning.",
      linkedin: "#",
    },
    {
      name: "Aliasghar Masood",
      position: "Jt. Chief Technical Officer",
      image: "/professional-student-portrait.png",
      description: "Supporting technical projects and innovation initiatives.",
      linkedin: "#",
    },
  ],
  marketingAdmins: [
    {
      name: "Manthan Bhanushali",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Leading marketing initiatives and brand development strategies.",
    },
    {
      name: "Jay Dayma",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Supporting marketing campaigns and promotional activities.",
    },
    {
      name: "Naitri Shah",
      position: "Jt. Admin",
      image: "/professional-female-student-portrait.jpg",
      description: "Assisting with marketing content and outreach programs.",
    },
  ],
  organisingAdmins: [
    {
      name: "Virendra Jain",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Coordinating events and managing organizational logistics.",
    },
    {
      name: "Pragati Shinde",
      position: "Admin",
      image: "/professional-female-student-portrait.jpg",
      description: "Overseeing event planning and execution processes.",
    },
    {
      name: "Piyush Kolhe",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Supporting event coordination and venue management.",
    },
    {
      name: "Vinay Bendale",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Assisting with organizational tasks and event logistics.",
    },
  ],
  prAdmins: [
    {
      name: "Sudhanshu Bhilare",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Managing public relations and external communications.",
    },
    {
      name: "Ashutosh S Ramani",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Supporting PR activities and media relations.",
    },
  ],
  dccAdmins: [
    {
      name: "Suraj Jagtap",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Managing DCC operations and coordination activities.",
    },
    {
      name: "Shashank Kiran Rathod",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Overseeing DCC initiatives and project management.",
    },
    {
      name: "Yuval Shah",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Supporting DCC operations and administrative tasks.",
    },
    {
      name: "Dipesh Bhanudas Dalvi",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Assisting with DCC coordination and project support.",
    },
  ],
  techAdmins: [
    {
      name: "Niharika Maurya",
      position: "Admin",
      image: "/professional-female-student-portrait.jpg",
      description: "Leading technical projects and innovation initiatives.",
    },
    {
      name: "Vyom Vyas",
      position: "Admin",
      image: "/professional-student-portrait.png",
      description: "Managing technical operations and development projects.",
    },
    {
      name: "Aditya Kesarkar",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Supporting technical development and project execution.",
    },
    {
      name: "Vedant Sawant",
      position: "Jt. Admin",
      image: "/professional-student-portrait.png",
      description: "Assisting with technical initiatives and system management.",
    },
  ],
  members: [
    "Aarav Patel",
    "Aadhya Singh",
    "Abhinav Kumar",
    "Aditi Sharma",
    "Akash Gupta",
    "Anisha Reddy",
    "Arjun Nair",
    "Avni Joshi",
    "Bhavya Mehta",
    "Chirag Shah",
    "Diya Agarwal",
    "Harsh Verma",
    "Ishaan Malhotra",
    "Jiya Kapoor",
    "Karan Thakur",
    "Kavya Iyer",
    "Manav Desai",
    "Naina Chopra",
    "Om Prakash",
    "Pooja Yadav",
    "Rahul Saxena",
    "Riya Bansal",
    "Rohan Jain",
    "Sakshi Pandey",
    "Tanvi Kulkarni",
    "Uday Shetty",
    "Varun Ahluwalia",
    "Yash Tiwari",
    "Zara Khan",
    "Aman Srivastava",
  ],
  techMembers: [
    "Anup Mehta",
    "Shlok Khade",
    "Arnav Ghag",
    "Shrishti Tewary",
    "Sanskruti Jadhav",
    "Ayush Sahu",
    "Bhakti Kote",
    "Neha Sonawane",
    "Alshifa Inamdar",
    "Shivam Shukla",
  ],
  orgMembers: [
    "Karan Vora",
    "Bhavy Doshi",
    "Atharv Bagwe",
    "Tanish Bhagat",
    "Poojan Mehta",
    "Riddhi Patil",
    "Sarwar Agahria",
    "Lakshmi Menon",
    "Saad Shaikh",
    "Varad Kadam",
    "Riya Gaud",
    "Sonia Patil",
    "Arushi Narkar",
    "Ahmedali Fateh",
    "Himanshu Makwana",
  ],
  dccMembers: ["Geerija Koli", "Ayushi Kosambi", "Niraj Khate", "Palak Barapatre"],
  prMembers: ["Nireeksh Bhandary", "Meet", "Manav Shah", "Riddhi Patel", "Vinisha Patel", "Uday Gavhankar"],
  marketingMembers: ["Prafull Ahire", "Suraj Chhajed", "Arnav Dumane"],
}

function LeadershipCard({ member }: { member: any }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700 group-hover:duration-300"></div>
      <Card className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-gray-100">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00629B] to-[#004e92]"></div>
        <CardContent className="p-8 text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-sm opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="relative w-24 h-24 rounded-full object-cover mx-auto border-4 border-[#00629B] shadow-lg group-hover:border-blue-500 transition-colors duration-300"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#00629B] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-[#00629B] font-semibold text-lg mb-4">{member.position}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
          <div className="flex justify-center space-x-4">
            <a
              href={member.linkedin}
              className="text-[#00629B] hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
              </svg>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="text-[#00629B] hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function CoreCard({ member }: { member: any }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00629B] to-[#004e92] rounded-xl blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
      <Card className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-102 group-hover:shadow-xl border border-gray-50">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00629B] to-[#004e92]"></div>
        <CardContent className="p-6 text-center">
          <div className="relative mb-4">
            <img
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover mx-auto border-3 border-gray-200 shadow-md group-hover:border-[#00629B] transition-colors duration-300 group-hover:shadow-lg"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#00629B] transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-[#00629B] font-semibold mb-3">{member.position}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
          <div className="flex justify-center space-x-3">
            <a
              href={member.linkedin}
              className="text-[#00629B] hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
              </svg>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="text-[#00629B] hover:text-blue-500 transition-colors duration-200 transform hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SubCoreCard({ member }: { member: any }) {
  return (
    <Card className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-[#00629B] hover:border-l-blue-500">
      <CardContent className="p-5 text-center">
        <div className="relative mb-4">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-gray-200 group-hover:border-[#00629B] transition-colors duration-300"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#00629B] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-[#00629B] font-semibold text-sm mb-3">{member.position}</p>
        <p className="text-gray-600 text-xs leading-relaxed mb-3">{member.description}</p>
        <a
          href={member.linkedin}
          className="inline-flex items-center text-[#00629B] hover:text-blue-500 transition-colors text-xs transform hover:scale-105"
        >
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
          </svg>
          Connect
        </a>
      </CardContent>
    </Card>
  )
}

function StandardCard({ member }: { member: any }) {
  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 text-center">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="w-14 h-14 rounded-full object-cover mx-auto border-2 border-gray-200 mb-3"
        />
        <h3 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-[#00629B] font-medium text-sm mb-2">{member.position}</p>
        <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMembersGrid({ members }: { members: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {members.map((name, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 text-center hover:shadow-md transition-shadow duration-200"
        >
          <p className="text-sm font-medium text-gray-900">{name}</p>
        </div>
      ))}
    </div>
  )
}

function DepartmentalTeamSection({ title, members }: { title: string; members: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#00629B] mb-2">{title}</h3>
        <div className="w-12 h-0.5 bg-[#BA0C2F] mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {members.map((name, index) => (
          <div key={index} className="text-center">
            <p className="text-sm font-medium text-gray-700">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TeamsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#000428] to-[#004e92]">
        {/* Particles Background */}
        <div id="particles-js-teams" className="absolute inset-0 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          {/* IEEE Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-[#FFD700] font-semibold text-sm md:text-base mb-6 border border-white/20 letter-spacing-wide animate-fade-down">
            IEEE KJSIT 2025-26
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up">
            <span className="text-gradient bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
              Visionary
            </span>
            <br />
            Leaders of Tomorrow
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-up animation-delay-200 text-pretty">
            Meet the dedicated individuals working together to make IEEE KJSIT extraordinary
          </p>

          {/* Scroll Indicator */}
          <div className="animate-fade-up animation-delay-400">
            <p className="text-sm text-blue-200 mb-2 tracking-wider">SCROLL TO EXPLORE</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Leadership Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] to-[#004e92] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamData.leadership.map((member, index) => (
                <LeadershipCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Core Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Team</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] to-[#004e92] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamData.core.map((member, index) => (
                <CoreCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Sub-Core Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sub-Core</h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#00629B] to-[#004e92] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamData.subCore.map((member, index) => (
                <SubCoreCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Marketing Admins Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Marketing Admins</h2>
              <div className="w-16 h-0.5 bg-[#00629B] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.marketingAdmins.map((member, index) => (
                <StandardCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Organising Admins Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Organising Admins</h2>
              <div className="w-16 h-0.5 bg-[#00629B] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.organisingAdmins.map((member, index) => (
                <StandardCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* PR Admins Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">PR Admins</h2>
              <div className="w-16 h-0.5 bg-[#00629B] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {teamData.prAdmins.map((member, index) => (
                <StandardCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* DCC Admins Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">DCC Admins</h2>
              <div className="w-16 h-0.5 bg-[#00629B] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.dccAdmins.map((member, index) => (
                <StandardCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Tech Admins Section */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Tech Admins</h2>
              <div className="w-16 h-0.5 bg-[#00629B] mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamData.techAdmins.map((member, index) => (
                <StandardCard key={index} member={member} />
              ))}
            </div>
          </div>

          {/* Our Team Members Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00629B] mb-4">Our Team Members</h2>
              <div className="w-20 h-1 bg-[#BA0C2F] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <DepartmentalTeamSection title="Technical Team" members={teamData.techMembers} />
              <DepartmentalTeamSection title="DCC Team" members={teamData.dccMembers} />
              <DepartmentalTeamSection title="ORG Team" members={teamData.orgMembers} />
              <DepartmentalTeamSection title="Marketing Team" members={teamData.marketingMembers} />
            </div>

            <div className="mt-8 max-w-md mx-auto">
              <DepartmentalTeamSection title="PR Team" members={teamData.prMembers} />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Particles.js Initialization Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof particlesJS !== 'undefined') {
              particlesJS("particles-js-teams", {
                "particles": {
                  "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                  "color": { "value": "#ffffff" },
                  "shape": { "type": "circle" },
                  "opacity": { "value": 0.5, "random": false },
                  "size": { "value": 3, "random": true },
                  "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                  "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                  "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
                },
                "retina_detect": true
              });
            }
          `,
        }}
      />
    </main>
  )
}
