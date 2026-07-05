// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				
				// ===== PALETTE NUDE (ajoutée) =====
				ivory: {
					50: '#FDFBF9',
					100: '#FBF8F4',
					200: '#F7F1E6',
					300: '#F0E8D9',
					400: '#E8DCCA',
					500: '#DDCDB8',
					600: '#D0BDA4',
					700: '#BFAB8D',
					800: '#AC9778',
					900: '#967F62',
				},
				sand: {
					50: '#FCF9F6',
					100: '#F8F3EC',
					200: '#F0E8DE',
					300: '#E5DACB',
					400: '#D7C8B5',
					500: '#C6B49C',
					600: '#B39F83',
					700: '#9D886B',
					800: '#846F54',
					900: '#69583F',
				},
				powder: {
					50: '#F5F8FA',
					100: '#EAF0F4',
					200: '#D0DEE6',
					300: '#B8CCD8',
					400: '#9DB8C8',
					500: '#82A4B8',
					600: '#6A8DA3',
					700: '#54768A',
					800: '#405E6F',
					900: '#2F4755',
				},
				dusty: {
					50: '#F0F4F7',
					100: '#DCE6ED',
					200: '#B8CCD9',
					300: '#8DB1C4',
					400: '#6B99B0',
					500: '#518299',
					600: '#3D6B7F',
					700: '#2E5465',
					800: '#22404E',
					900: '#182D38',
				},
				steel: {
					50: '#EFF3F5',
					100: '#D5DFE5',
					200: '#A8BBC8',
					300: '#7B96A8',
					400: '#5A768A',
					500: '#3E5C6C',
					600: '#314A58',
					700: '#263A45',
					800: '#1C2B33',
					900: '#131E24',
				},
				
				// ===== COULEURS NEON (existantes) =====
				neon: {
					pink: 'rgb(218, 55, 201)',
					purple: '#8f33e4',
					indigo: 'rgb(255, 255, 255)',
					blue: '#064cbe',
					dark: 'rgb(4, 1, 90)',
					// Ajout des couleurs nude pour compatibilité
					ivory: '#F7F1E6',
					sand: '#E0D0BA',
					powder: '#D0DEE6',
					dusty: '#8DB1C4',
					steel: '#3E5C6C',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1)'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fadeIn': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'glowPulse': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(255, 97, 213, 0.7), 0 0 10px rgba(255, 97, 213, 0.5)' },
					'50%': { boxShadow: '0 0 15px rgba(255, 97, 213, 0.9), 0 0 20px rgba(255, 97, 213, 0.7)' }
				},
				// Animations pour le mode dark
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float-soft': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-neon': 'pulse-neon 2s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'fadeIn': 'fadeIn 0.7s ease-out forwards',
				'glowPulse': 'glowPulse 2s infinite',
				// Nouvelles animations
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'float-soft': 'float-soft 4s ease-in-out infinite',
			},
			boxShadow: {
				'neon-pink': '0 0 5px rgba(255, 97, 213, 0.7), 0 0 10px rgba(255, 97, 213, 0.5)',
				'neon-purple': '0 0 5px rgba(155, 135, 245, 0.7), 0 0 10px rgba(155, 135, 245, 0.5)',
				'neon-blue': '0 0 5px rgba(4, 14, 106, 0.7), 0 0 10px rgba(51, 195, 240, 0.5)',
				// Ombres nude
				'soft': '0 2px 15px rgba(62, 92, 108, 0.08)',
				'soft-md': '0 4px 25px rgba(62, 92, 108, 0.12)',
				'soft-lg': '0 8px 40px rgba(62, 92, 108, 0.15)',
				'soft-xl': '0 12px 60px rgba(62, 92, 108, 0.2)',
			},
			backgroundImage: {
				// Dégradés nude
				'gradient-nude': 'linear-gradient(135deg, #F7F1E6 0%, #E0D0BA 50%, #D0DEE6 100%)',
				'gradient-warm': 'linear-gradient(135deg, #FBF8F4 0%, #F7F1E6 50%, #F0E8DE 100%)',
				'gradient-cool': 'linear-gradient(135deg, #F5F8FA 0%, #D0DEE6 50%, #8DB1C4 100%)',
				'gradient-steel': 'linear-gradient(135deg, #8DB1C4 0%, #3E5C6C 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;