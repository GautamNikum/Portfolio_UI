 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Mail, Phone, MapPin, Calendar, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";  

const Home = () => {
  const stats = [
    { icon: Calendar, label: "Experience", value: "1 Year" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Star, label: "Projects", value: "100+" },
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

              Video Editor
                <blockquote> Bringing ideas to life through impactful and creative video editing.</blockquote>

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full">
                  <Link to="/contact">
                    Get In Touch <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>   
                <a href="https://docs.google.com/document/d/1QF6bGCrGrrFV5pz3wcnW2Ps0ULRMfhCQUvAiSHZBaT4/export?format=pdf"
  target="_blank">         
                  {/* <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                    
                  </Button> */}
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
            I'm a passionate video editor and creative storyteller with 7 months of hands-on experience at DebugShala, where I worked on a variety of content—from educational videos to social media reels. Alongside this, I’ve taken on freelance projects, helping brands bring their ideas to life through impactful visuals and compelling scripts. With a focus on storytelling, rhythm, and detail, I aim to create edits that not only look great but also connect deeply with the audience.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                  <p className="text-gray-300 mb-6">
                    I'm a creative video editor and script writer with 7 months of experience at DebugShala and freelance projects. I specialize in turning raw footage into engaging visual stories that connect and inspire audiences.


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
              Explore my latest work in Video Editing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
              
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
               <img src="image.png" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Promotional Video</span>
              
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2"> IT Training Institute ADD</h3>
                <p className="text-gray-300 mb-4">
                 Created visually engaging and informative video content for an IT training brand, enhancing learning experiences and boosting audience engagement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">Smooth Animation</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">Clear Message</span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">Engaging Visuals</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>What i do</strong> Edited a series of promotional and educational videos for an IT training institute, focusing on visual clarity, brand consistency, and viewer engagement. The videos featured dynamic text overlays, animated transitions, course highlights, trainer introductions, placement success stories, FAQs, and student testimonials. Each video was crafted to simplify complex topics, build trust, and drive inquiries—optimized for platforms like YouTube, Instagram, and websites to ensure maximum reach and impact.


                </p>
                
  <a
        href="https://drive.google.com/file/d/1nXhPSjjgWO_nKgYYQDEdJL3VZ0whzsLV/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 text-sm rounded-md flex items-center">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </a>  

              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                <img src="Aditya.png" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Story Telling</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Placed Students Story Telling</h3>
                <p className="text-gray-300 mb-4">
                Created visually engaging and informative Story Telling video for an IT training brand, enhancing learning experiences and boosting audience engagement..
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">Story Telling</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">User Engagment</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">High quality Visuals</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>What i do</strong> Created a storytelling-based promotional video for an IT training brand, highlighting its courses, placement success, and student growth journey. Focused on a narrative flow that connects emotionally with viewers, using dynamic text, smooth transitions, and engaging visuals. Included brand elements, testimonials, and a strong call to action to boost trust, engagement, and enrollment conversions.
                </p>
           <a
        href="https://drive.google.com/drive/folders/1wG0OWnlQszfYS2JoY4yJ5rxqM5nYemgc?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 text-sm rounded-md flex items-center">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </a>
              </CardContent>
            </Card>


               <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative overflow-hidden">
                <img src="chatgpt.png" alt="" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Educational </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Educational Content</h3>
                <p className="text-gray-300 mb-4">
                Created visually engaging and informative Story Telling video for an AI Trainig Institute, enhancing learning experiences and boosting audience engagement..
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">Story Telling</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">User Engagment</span>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">High quality Visuals</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  <strong>What i do</strong> Created an educational awareness video for Talent Catalyst AI, focusing on explaining AI and Generative AI technologies in a clear and simplified manner. The video detailed how to frame effective prompts to get accurate responses from AI chatbots. It featured engaging visuals, clean text overlays, and smooth transitions to maintain viewer attention. Designed to build understanding and confidence among learners, the video aimed to demystify complex AI concepts and empower viewers to use Generative AI tools more effectively. Optimized for YouTube, Instagram, and websites to maximize reach, awareness, and learning impact.
                </p>
           <a
        href="https://drive.google.com/file/d/1U1ihNQlCD0Ben8Vb_iIlM8zIXLTBpsnQ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 text-sm rounded-md flex items-center">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </button>
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
