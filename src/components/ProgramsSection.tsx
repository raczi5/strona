
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Code, Camera, Wrench, Cpu, Music } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Informatyka",
      description: "Programowanie, sztuczna inteligencja, cyberbezpieczeństwo",
      icon: Code,
      badge: "Techniczny",
      duration: "3.5 roku",
      level: "Studia I stopnia",
    },
    {
      title: "Grafika Komputerowa",
      description: "Design, animacja 3D, grafika w grach komputerowych",
      icon: Palette,
      badge: "Artystyczny",
      duration: "3.5 roku",
      level: "Studia I stopnia",
    },
    {
      title: "Fotografia Cyfrowa",
      description: "Fotografia artystyczna, retusz cyfrowy, multimedia",
      icon: Camera,
      badge: "Artystyczny",
      duration: "3 lata",
      level: "Studia I stopnia",
    },
    {
      title: "Inżynieria Mechaniczna",
      description: "Projektowanie CAD, automatyka, robotyka przemysłowa",
      icon: Wrench,
      badge: "Techniczny",
      duration: "3.5 roku",
      level: "Studia I stopnia",
    },
    {
      title: "Elektronika",
      description: "Układy cyfrowe, IoT, systemy wbudowane",
      icon: Cpu,
      badge: "Techniczny",
      duration: "3.5 roku",
      level: "Studia I stopnia",
    },
    {
      title: "Produkcja Muzyczna",
      description: "Nagrywanie, mastering, kompozycja elektroniczna",
      icon: Music,
      badge: "Artystyczny",
      duration: "3 lata",
      level: "Studia I stopnia",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasze Kierunki Studiów
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferujemy nowoczesne kierunki łączące technologię z kreatywnością, 
            przygotowujące do przyszłych wyzwań zawodowych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <program.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge 
                    variant={program.badge === "Techniczny" ? "default" : "secondary"}
                    className={program.badge === "Techniczny" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}
                  >
                    {program.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Czas trwania:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Poziom:</span>
                    <span className="font-medium">{program.level}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Dowiedz się więcej
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
