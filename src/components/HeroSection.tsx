
import { ArrowRight, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Akademia{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Techniczno-Artystyczna
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Łączymy techniczną precyzję z artystyczną kreatywnością. 
                Rozwijaj swoje talenty w nowoczesnych kierunkach studiów, 
                które przygotują Cię do przyszłości.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Rozpocznij naukę
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Poznaj ofertę
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2500+</div>
                <div className="text-sm text-gray-600">Studentów</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Kierunków</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Zatrudnialność</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                alt="Studenci w laboratorium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600">Lat doświadczenia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
