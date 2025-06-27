import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bot, Zap, Target, GitMerge } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.1),transparent)] pointer-events-none"></div>
      
      {/* Main Content Container */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center py-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-white to-blue-400 bg-clip-text text-transparent tracking-wider animate-fade-in">
            INTELLIGENT SUPPORT ASSISTANT
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Split Screen Layout */}
        <div className="flex-1 flex">
          {/* Left Side - Ticket Terminators */}
          <div className="w-1/2 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black p-8 border-r border-blue-500/30 relative">
            {/* Neon Glow Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)]"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-4xl font-bold text-center mb-12 text-blue-300 tracking-widest">
                TICKET TERMINATORS
              </h2>
              
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {/* Chatbot Card */}
                <Card className="bg-gray-800/80 border-2 border-blue-500/50 p-6 hover:border-blue-400 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Bot className="w-8 h-8 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-blue-300">Chatbot</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 border-0 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                    View Project
                  </Button>
                </Card>

                {/* FRT Card */}
                <Card className="bg-gray-800/80 border-2 border-teal-500/50 p-6 hover:border-teal-400 hover:bg-gray-800/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 group backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-teal-400 mr-3 group-hover:text-teal-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-teal-300">Auto FRT</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                </p>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 border-0 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
                    View Project
                  </Button>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Side - Ticket Avengers */}
          <div className="w-1/2 bg-gradient-to-br from-red-900 via-black to-red-800 p-8 relative">
            {/* Red Glow Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent)]"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-4xl font-bold text-center mb-12 text-red-300 tracking-widest">
                TICKET AVENGERS
              </h2>
              
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {/* Auto Triage Card */}
                <Card className="bg-black/80 border-2 border-red-500/50 p-6 hover:border-red-400 hover:bg-black/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 group backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Target className="w-8 h-8 text-red-400 mr-3 group-hover:text-red-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-red-300">Auto Triage</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                </p>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 border-0 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
                    Learn More
                  </Button>
                </Card>

                {/* Similar Ticket Card */}
                <Card className="bg-black/80 border-2 border-orange-500/50 p-6 hover:border-orange-400 hover:bg-black/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <GitMerge className="w-8 h-8 text-orange-400 mr-3 group-hover:text-orange-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-orange-300">Similar Ticket</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                </p>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 border-0 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
                    Learn More
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;