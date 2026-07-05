// features/contact/components/ContactForm.tsx
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Check, X } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactForm = ({
  formState,
  handleChange,
  handleSubmit,
  isSubmitting,
  isSubmitted,
  error,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div>
        <label
          htmlFor="name"
          className={`block text-xs md:text-sm font-medium mb-1.5 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Nom
        </label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className={`w-full h-10 md:h-11 text-sm md:text-base transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500' 
              : 'focus:ring-neon-purple focus:border-neon-purple'
          }`}
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className={`block text-xs md:text-sm font-medium mb-1.5 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
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
          className={`w-full h-10 md:h-11 text-sm md:text-base transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500' 
              : 'focus:ring-neon-purple focus:border-neon-purple'
          }`}
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={`block text-xs md:text-sm font-medium mb-1.5 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          className={`w-full h-28 md:h-36 text-sm md:text-base resize-none transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder:text-gray-500 focus:ring-blue-500 focus:border-blue-500' 
              : 'focus:ring-neon-purple focus:border-neon-purple'
          }`}
          placeholder="Votre message..."
        />
      </div>

      <div className="flex flex-col items-end gap-3 pt-1">
        {/* ALERTE DE SUCCÈS */}
        {isSubmitted && (
          <Alert className={`w-full border-green-500 transition-colors duration-300 ${
            isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-50 text-green-800'
          }`}>
            <Check className={`h-4 w-4 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
            <AlertTitle className={`text-sm font-medium ${isDark ? 'text-green-300' : 'text-green-800'}`}>
              Message envoyé !
            </AlertTitle>
            <AlertDescription className={`text-xs ${isDark ? 'text-green-400' : 'text-green-700'}`}>
              Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
            </AlertDescription>
          </Alert>
        )}

        {/* ALERTE D'ERREUR */}
        {error && (
          <Alert variant="destructive" className="w-full">
            <X className="h-4 w-4" />
            <AlertTitle className="text-sm font-medium">
              Erreur d'envoi
            </AlertTitle>
            <AlertDescription className="text-xs">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* BOUTON D'ENVOI */}
        <Button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={`w-full sm:w-auto px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base transition-all duration-300 ${
            isSubmitted 
              ? 'bg-green-600 hover:bg-green-700 text-white' 
              : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 text-white'
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
              Envoi en cours...
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
  );
};

export default ContactForm;