import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Check, Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-26">
      <div className="section-container max-w-5xl mx-auto">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <div className="relative w-32 mx-auto">
            <hr className="w-full border-t-2 border-gray-300" />
            <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
          </div>
          <p className="text-lg text-gray-600">
            Une question, un projet ou intéressé par une collaboration ?
            N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
          {/* Carte des contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 neon-border">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10">
                  <Mail size={20} className="text-neon-purple" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a 
                    href="mailto:hei.lisa.30@gmail.com" 
                    className="text-gray-600 hover:text-neon-purple transition-colors break-all"
                  >
                    hei.lisa.30@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10">
                  <Phone size={20} className="text-neon-purple" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700">Téléphone</h4>
                  <a 
                    href="tel:+261348133458" 
                    className="text-gray-600 hover:text-neon-purple transition-colors"
                  >
                    +261 34 81 334 58
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10">
                  <MapPin size={20} className="text-neon-purple" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-700">Adresse</h4>
                  <p className="text-gray-600">
                    Lot 198 NJO Mahatsinjo Avaradrano
                  </p>
                </div>
              </div>

              {/* Social links dans une sous-carte */}
              <div className="mt-8 p-5 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-left">
                    <h4 className="font-semibold text-gray-700">Réseaux sociaux</h4>
                    <p className="text-sm text-gray-500">Suivez-moi pour plus d'actualités</p>
                  </div>
                  <div className="h-px w-full sm:h-8 sm:w-px sm:min-h-6 bg-gradient-to-r from-neon-purple to-neon-blue sm:bg-gradient-to-b"></div>
                  <SocialLinks
                    className="flex gap-4 justify-center sm:justify-start"
                    variant="gradient"
                    iconSize={22}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carte du formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 neon-border">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full focus:ring-neon-purple focus:border-neon-purple"
                  placeholder="Votre nom"
                />
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full focus:ring-neon-purple focus:border-neon-purple"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full h-32 focus:ring-neon-purple focus:border-neon-purple"
                  placeholder="Votre message"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white px-6 ${
                    isSubmitted ? "bg-green-500" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <Check size={20} />
                      Message envoyé !
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Envoyer
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;