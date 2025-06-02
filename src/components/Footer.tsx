
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Akademia Techniczno-Artystyczna
            </h3>
            <p className="text-gray-400">
              Kształcimy przyszłych ekspertów w dziedzinach technicznych 
              i artystycznych od 1999 roku.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kierunki</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Informatyka</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Grafika Komputerowa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fotografia Cyfrowa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inżynieria Mechaniczna</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Dla Studentów</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Portal Studenta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biblioteka</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stypendia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kółka Naukowe</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Informacje</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">O uczelni</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rekrutacja</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aktualności</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Akademia Techniczno-Artystyczna. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
