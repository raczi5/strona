
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FacultySection = () => {
  const faculty = [
    {
      name: "Prof. dr hab. Anna Kowalska",
      position: "Kierownik Katedry Informatyki",
      specialization: "Sztuczna Inteligencja",
      experience: "15 lat",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
    },
    {
      name: "Dr inż. Piotr Nowak",
      position: "Adiunkt",
      specialization: "Grafika Komputerowa",
      experience: "10 lat",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Mgr art. Maria Wiśniewska",
      position: "Wykładowca",
      specialization: "Fotografia Artystyczna",
      experience: "8 lat",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      name: "Dr hab. inż. Tomasz Zieliński",
      position: "Profesor nadzwyczajny",
      specialization: "Robotyka",
      experience: "12 lat",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasza Kadra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doświadczeni praktycy i naukowcy, którzy łączą wiedzę teoretyczną 
            z praktycznym doświadczeniem w branży.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.position}
                  </p>
                  <Badge variant="secondary" className="mb-2">
                    {member.specialization}
                  </Badge>
                  <div className="text-sm text-gray-600">
                    Doświadczenie: {member.experience}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
