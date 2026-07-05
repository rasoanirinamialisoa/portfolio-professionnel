// src/App.tsx
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "./layout/sidebar/Sidebar";
import Hero from "./components/hero/components/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/components/Skills";
import Experience from "./components/experience/components/Experience";
import Projects from "./components/projects/components/Projects";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 md:ml-60 overflow-hidden">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
              <ScrollToTop />
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;