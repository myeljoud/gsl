import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "class"],
  theme: {
  	screens: {
  		tablet: '750px',
  		laptop: '1200px'
  	},
  	extend: {
  		fontSize: {
  			'32': '32px',
  			'38': '38px'
  		},
  		lineHeight: {
  			'38': '38px'
  		},
  		borderWidth: {
  			'3': '3px'
  		},
  		colors: {
				"primary":"#AD2430",
				
  			primar: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			'secondary-emphasis': 'hsl(168 100% 29% / <alpha-value>)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'hero-gradient-mobile': 'linear-gradient(0deg, rgba(36, 20, 0, 1) 16%, rgba(21, 11, 0, 0.6) 40%, rgba(0, 0, 0, 0) 50%)',
  			'hero-gradient-laptop': 'linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, rgba(21, 11, 0, 0.39) 60%, rgba(36, 20, 0, 1) 90%);'
  		},
  		fontFamily: {
  			sans: ["Inter", "sans-serif"],
  			roboto: ["Roboto", "sans-serif"],
  			robotoCondensed: ["Roboto Condensed", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;
