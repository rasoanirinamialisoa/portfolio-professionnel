import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Check, Mail, Phone, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";
import contactService from "../service/contactService";
import { Alert } from "./ui/alert";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postContact = async (contactData: {
    name: string;
    email: string;
    message: string;
  }) => {
    return await contactService(contactData);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setIsSubmitted(false);
    setError(null);

    try {
      await postContact(formState);

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Submit error:", error);
      setError("Erreur lors de l'envoi du message. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-12 md:py-16 bg-white">
      <div className="section-container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Titre - Gardé comme avant */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block text-xs md:text-sm font-medium text-purple-600 tracking-widest uppercase mb-2 md:mb-3">
            Une question, un projet ou intéressé par une collaboration ?
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-900">
            Contactez-moi <span className="text-neon-blue font-medium">!</span>
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-purple-600 mx-auto mt-3 md:mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7 lg:gap-10 mt-4 md:mt-6">
          {/* Carte des contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-7 neon-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-gray-800">Coordonnées</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 flex-shrink-0">
                  <Mail size={16} className="md:w-5 md:h-5 text-neon-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm md:text-base text-gray-700">Email</h4>
                  <a 
                    href="mailto:hei.lisa.30@gmail.com" 
                    className="text-sm md:text-base text-gray-600 hover:text-neon-purple transition-colors break-all"
                  >
                    hei.lisa.30@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 flex-shrink-0">
                  <Phone size={16} className="md:w-5 md:h-5 text-neon-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm md:text-base text-gray-700">Téléphone / Whatsapp</h4>
                  <a 
                    href="https://wa.me/+261348133458" 
                    className="text-sm md:text-base text-gray-600 hover:text-neon-purple transition-colors"
                  >
                    +261 34 81 334 58
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-3 md:p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 flex-shrink-0">
                  <MapPin size={16} className="md:w-5 md:h-5 text-neon-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm md:text-base text-gray-700">Adresse</h4>
                  <p className="text-sm md:text-base text-gray-600 truncate">
                    Lot 198 NJO Mahatsinjo Avaradrano
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-4 md:mt-6 p-4 md:p-4 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
                  <p className="text-xs md:text-sm text-gray-500">Suivez-moi pour plus d'actualités</p>
                  <div className="h-px w-full sm:h-6 sm:w-px sm:min-h-6 bg-gradient-to-r from-neon-purple to-neon-blue sm:bg-gradient-to-b"></div>
                  <SocialLinks
                    className="flex gap-3 md:gap-4"
                    variant="outline"
                    iconSize={18}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carte du formulaire */}
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-7 neon-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-gray-800">Envoyez un message</h3> 
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5"
                >
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full h-10 md:h-11 text-sm md:text-base focus:ring-neon-purple focus:border-neon-purple"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5"
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
                  className="w-full h-10 md:h-11 text-sm md:text-base focus:ring-neon-purple focus:border-neon-purple"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full h-28 md:h-36 text-sm md:text-base focus:ring-neon-purple focus:border-neon-purple resize-none"
                  placeholder="Votre message"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 md:gap-4 pt-1">
                {/* MESSAGE D'ALERTE */}
                {isSubmitted && (
                  <Alert
                    variant="default"
                    className="w-full sm:w-auto py-2 px-3 text-xs md:text-sm border-green-500 bg-green-50 text-green-800"
                  >
                    Message envoyé ✔
                  </Alert>
                )}

                {error && (
                  <Alert
                    variant="destructive"
                    className="w-full sm:w-auto py-2 px-3 text-xs md:text-sm"
                  >
                    {error}
                  </Alert>
                )}

                {/* BOUTON */}
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full sm:w-auto bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 text-white px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base ${
                    isSubmitted ? "bg-green-500" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white"
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
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Envoi...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={16} className="md:w-5 md:h-5" />
                      Envoyé !
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={14} className="md:w-4 md:h-4" />
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