
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, Award, Target } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  const journey = [
    {
      period: "2025 - Present",
      title: "UI/UX Designer & Frontend Developer",
      description: "Specializing in creating beautiful user interfaces and engaging digital experiences"
    },
    {
      period: "2025",
      title: "Video Editor",
      description: "Crafting compelling visual stories through expert video editing and post-production"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose-Driven Design",
      description: "Every design decision serves a purpose and enhances user experience"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Committed to delivering high-quality work that exceeds expectations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm Gautam Nikum, a passionate creative professional who brings ideas to life through design and technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hello! I'm Gautam Nikum, a multi-disciplinary creative professional with a passion for creating exceptional digital experiences. I've had the privilege of working with 2 amazing clients and completing 2 projects.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  My journey in the creative field began with a fascination for how design and technology can come together to solve real-world problems. I specialize in three key areas: UI/UX Design, Video Editing, and Frontend Development.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  What drives me is the opportunity to transform ideas into tangible, beautiful, and functional digital products that make a difference in people's lives.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 mr-4 text-purple-400" />
                    <span>gautamnikum147@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 mr-4 text-purple-400" />
                    <span>9171054803</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-5 w-5 mr-4 text-purple-400" />
                    <span>3 Months Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
                <div className="space-y-6">
                  {journey.map((item, index) => (
                    <div key={index} className="border-l-2 border-purple-400 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-400 rounded-full"></div>
                      <div className="text-purple-300 font-semibold mb-1">{item.period}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">My Values</h3>
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <value.icon className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-1">Hours</div>
              <div className="text-gray-300 text-sm">Available</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-white font-semibold mb-1">Happy</div>
              <div className="text-gray-300 text-sm">Clients</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">2</div>
              <div className="text-white font-semibold mb-1">Completed</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
