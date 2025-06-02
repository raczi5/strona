
import { ArrowRight, Users, BookOpen, Award, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacultySection from "@/components/FacultySection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <FacultySection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <ChatBox />
    </div>
  );
};

export default Index;
