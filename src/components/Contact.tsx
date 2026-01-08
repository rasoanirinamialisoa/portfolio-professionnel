import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Check, Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
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
      console.log('Form submitted:', formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Contact</h2> {/* Taille réduite sur mobile */}
            <div className="relative w-32 mx-auto">
              <hr className="w-full border-t-2 border-gray-300" />
              <hr className="w-20 border-t-4 border-neon-purple absolute top-0 left-1/2 -translate-x-1/2 font-bold" />
            </div>
            <p className="text-lg text-gray-600">
                Intéressé par une collaboration ? N'hésitez pas à me contacter.
              </p>
          </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-purple-300" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">hei.lisa.30@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-purple-300" />
                <div>
                  <h3 className="text-xl font-semibold">Téléphone</h3>
                  <p className="text-gray-600">+261 34 81 334 58</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-purple-300" />
                <div>
                  <h3 className="text-xl font-semibold">Adresse</h3>
                  <p className="text-gray-600">Lot 198 NJO Mahatsinjo Avaradrano</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Suivez-moi</h3>
                <SocialLinks className="pt-4 space-x-4" variant="outline" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 neon-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                    isSubmitted ? 'bg-green-500' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
