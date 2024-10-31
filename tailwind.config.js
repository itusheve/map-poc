/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				button: '0px 1px 2px -1px rgba(0,0,0,0.10), 0px 1px 3px 0px rgba(16,24,40,0.10)'
			},
			fontSize: {
				h1: ['36px', { lineHeight: '110%', letterSpacing: '-1%' }],
				h2: ['24px', { lineHeight: '110%', letterSpacing: '0%' }],
				h3: ['18px', { lineHeight: '24px', letterSpacing: '0%' }],
				'h3-button': ['18px', { lineHeight: '28px', letterSpacing: '1%' }],
				h4: ['16px', { lineHeight: '20px', letterSpacing: '0%' }],
				'h4-button': ['16px', { lineHeight: '24px', letterSpacing: '1%' }],
				'text-md-emphasis': ['14px', { lineHeight: '16px', letterSpacing: '1%' }],
				'text-md': ['14px', { lineHeight: '16px', letterSpacing: '1%' }],
				'text-sm-emphasis': ['12px', { lineHeight: '14px', letterSpacing: '0%' }],
				'text-sm': ['12px', { lineHeight: '14px', letterSpacing: '0%' }],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
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
				primary: {
					DEFAULT: '#0e1a3299',
					foreground: '#E4E4E4'
				},
				secondary: {
					DEFAULT: '#0E1A3299',
					foreground: 'hsl(var(--secondary-foreground))',
					soft: '#CADFFF26'
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
				},
				alert: {
					DEFAULT: '#2D2D2D',
					foreground: '#E4E4E4',
					border: {
						issue: "#FF5457",
						warn: "#FFAB00"
					},
					gradient: {
						issue: {
							from: "#cadfff26",
							to: "#ff54574d"
						},
						warn: {
							from: "#cadfff26",
							to: "#ffab004d"
						},
					}
				},
				active: {
					DEFAULT: '#0063F7',
					foreground: '#1C1B1B'
				},
				approve: {
					DEFAULT: '#10B981',
					// foreground: '#34D399'
				},
				warning: {
					DEFAULT: '#BB86FC',
					foreground: '#CA8A04'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}