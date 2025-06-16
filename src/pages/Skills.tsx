
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Code, Star, Wrench } from "lucide-react";
import Footer from "../components/Footer";

const Skills = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces",
      skills: ["Figma", "Adobe XD", "Sketch", "Canva"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Crafting compelling visual stories through expert editing",
      skills: ["Color Grading", "Transitions", "Effects"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const getSkillLevel = (skill: string) => {
    const levels: { [key: string]: number } = {
      "Figma": 90,
      "Adobe XD": 85,
      "Sketch": 80,
      "Canva": 95,
      "Color Grading": 88,
      "Transitions": 92,
      "Effects": 85,
      "HTML": 90,
      "CSS": 88,
      "JavaScript": 82,
      "React": 85
    };
    return levels[skill] || 80;
  };

  const toolsAndTechnologies = [
    { name: "Figma", category: "Design", logo: "/lovable-uploads/3e03ff72-ee5e-462c-a3d8-2bd608eaa839.png" },
    { name: "Adobe XD", category: "Design", logo: "/lovable-uploads/ff7f655f-ea7c-4b0b-bb04-bd308a99effd.png" },
    { name: "Sketch", category: "Design", logo: "/lovable-uploads/d15c7e2b-ff6e-4603-a07c-914e22e73be1.png" },
    { name: "HTML", category: "Development", logo: "/lovable-uploads/7a35dea3-4949-4e2b-a65b-22d82f33fe53.png" },
    { name: "CSS", category: "Development", logo: "/lovable-uploads/87bb7652-0ed9-4e54-a556-710fcd5905ae.png" },
    { name: "JavaScript", category: "Development", logo: "/lovable-uploads/413964af-8515-48db-ab46-acdb819c2c44.png" },
    { name: "React", category: "Development", logo: "/lovable-uploads/6a780a7c-02b8-4c8a-baea-550f66a80bea.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">My Skills</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and creative capabilities across design, development, and video production
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill}</span>
                        <span className="text-purple-300 text-sm">{getSkillLevel(skill)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${getSkillLevel(skill)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies Section */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <Wrench className="mr-3 h-6 w-6 text-purple-400" />
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {toolsAndTechnologies.map((tool, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{tool.name}</h4>
                    <p className="text-gray-400 text-sm">{tool.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Skills */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Design Process</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mr-2 mb-2">User Research</Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mr-2 mb-2">Wireframing</Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mr-2 mb-2">Prototyping</Badge>
                  <Badge variant="outline" className="border-purple-400 text-purple-300 mr-2 mb-2">User Testing</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Technical Skills</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-blue-400 text-blue-300 mr-2 mb-2">Responsive Design</Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-300 mr-2 mb-2">Version Control</Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-300 mr-2 mb-2">Cross-browser Testing</Badge>
                  <Badge variant="outline" className="border-blue-400 text-blue-300 mr-2 mb-2">Performance Optimization</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience Level */}
        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 inline-block">
            <CardContent className="p-8">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Figma training</h3>
              <p className="text-4xl font-bold text-purple-400 mb-2">1 Month</p>
              <p className="text-gray-300">Dedicated to continuous learning and growth</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
