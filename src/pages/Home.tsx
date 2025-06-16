
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Mail, Phone, MapPin, Calendar, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const stats = [
    { icon: Calendar, label: " Project Experience", value: "3 Months" },
    { icon: Users, label: "Happy Clients", value: "2" },
    { icon: Star, label: "Projects", value: "2" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gautam Nikum</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                UI/UX Designer • Frontend Developer • Video Editor
                <blockquote> Bringing ideas to life through impactful UI/UX design.</blockquote>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full">
                  <Link to="/contact">
                    Get In Touch <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>   
                <a href="https://docs.google.com/document/d/1QF6bGCrGrrFV5pz3wcnW2Ps0ULRMfhCQUvAiSHZBaT4/export?format=pdf"
  target="_blank">         
                  <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                    
                  </Button>
                  </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/aboutimage - Copy.png" 
                  alt="Gautam Nikum"
                  className="w-80 h-80 rounded-full object-cover border-4 border-purple-400/30 shadow-2xl"
                />
                <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
             I'm a versatile digital professional with expertise in UI/UX design, video editing, and frontend development. I love bringing ideas to life through beautiful designs and seamless user experiences.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-gray-300 mb-6">
                    I'm a multi-disciplinary creative professional specializing in UI/UX design, video editing, and frontend development. With 3 months of experience, I've worked with 2 happy clients and completed 2 successful projects.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Mail className="h-4 w-4 mr-3 text-purple-400" />
                      gautamnikum147@gmail.com
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="h-4 w-4 mr-3 text-purple-400" />
                      9171054803
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center lg:text-left">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my latest work in UI/UX design, video editing, and web development
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
               <img src="Frame 427319087.png" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">UI/UX Design</span>
              
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2"> IT Training Institute Webpage</h3>
                <p className="text-gray-300 mb-4">
                 Create a visually engaging and user-friendly platform for an IT training brand.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">Figma</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">UX Design</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">User Research</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>Case Study:</strong> Designed a mobile-first website for an IT training institute with smooth navigation, responsive layout, and clear course categories. Included a bold hero section, placement highlights, trainer showcase, FAQs, testimonials, and a quick inquiry form to boost engagement and conversions. The design focused on providing a seamless and intuitive user experience across all devices.


                </p>
                <a
  href="https://www.figma.com/proto/5h8no42pJZC5fziZY67Vtc/Portfolio-project?node-id=317-15603&t=UYRfFb1nv8UPh5Wh-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A19"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="sm"
    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
  >
    View Project <ArrowRight className="ml-2 h-3 w-3" />
  </Button>
</a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                <img src="Frame 427319086.png" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2"> Spiritual E-commerce Design</h3>
                <p className="text-gray-300 mb-4">
                  Building a smooth and soulful shopping journey for spiritual product lovers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">Figma</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">UX Design</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">User Research</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>Case Study:</strong> Designed a responsive e-commerce site for a personal brand offering spiritual and fragrance products like kapoordhani, diyas, and agarbattis. Focused on clean layout, product categories, flash sales, and strong CTA. Included banners, trust sections, and a smooth flow from product view to checkout to boost user experience and conversions.
                </p>
                <a
  href="https://www.figma.com/proto/5h8no42pJZC5fziZY67Vtc/Portfolio-project?node-id=470-15077&t=9Jy2g5Jsb3xx0t5a-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A19"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="sm"
    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
  >
    View Project <ArrowRight className="ml-2 h-3 w-3" />
  </Button>
</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
