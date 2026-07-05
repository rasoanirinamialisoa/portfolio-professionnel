// 📁 src/layout/sidebar/SidebarConfig.ts
import { Home, User, FolderKanban, MailIcon, Briefcase, Brain } from 'lucide-react';

export const navLinks = [
  { name: 'Accueil', id: 'hero', icon: Home },
  { name: 'À propos', id: 'about', icon: User },
  { name: 'Compétences', id: 'skills', icon: Brain },
  { name: 'Expériences', id: 'experience', icon: Briefcase },
  { name: 'Projets', id: 'projects', icon: FolderKanban },
  { name: 'Contact', id: 'contact', icon: MailIcon },
];