module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',   
      md: '768px',    
      lg: '1024px',   
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          light: "var(--primary-background-light)",
          medium: "var(--primary-background-medium)",
          dark: "var(--primary-background-dark)"
        },
        secondary: {
          background: "var(--secondary-background)",
          light: "var(--secondary-background-light)",
          overlay: "var(--secondary-background-overlay)",
          muted: "var(--secondary-background-muted)"
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          light: "var(--accent-light)",
          overlay: "var(--accent-overlay)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          light: "var(--text-light)",
          lighter: "var(--text-lighter)",
          neutral: "var(--text-neutral)",
          gray: "var(--text-gray)",
          'light-gray': "var(--text-light-gray)",
          white: "var(--text-white)"
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          dark: "var(--border-dark)",
          medium: "var(--border-medium)",
          light: "var(--border-light)",
          accent: "var(--border-accent)",
          white: "var(--border-white)"
        },
        header: {
          background: "var(--header-background)"
        },
        footer: {
          background: "var(--footer-background)"
        },
        button: {
          background: "var(--button-background)",
          text: "var(--button-text)",
          border: "var(--button-border)"
        },
        link: {
          text: "var(--link-text)"
        },
        input: {
          text: "var(--input-text)"
        },
        line: {
          background: "var(--line-background)"
        },
        slider: {
          background: "var(--slider-background)"
        },
        rating: {
          border: "var(--rating-border)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)'
      },
      lineHeight: {
        'xs': 'var(--line-height-xs)',
        'sm': 'var(--line-height-sm)',
        'md': 'var(--line-height-md)',
        'lg': 'var(--line-height-lg)',
        'xl': 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
        '3xl': 'var(--line-height-3xl)',
        '4xl': 'var(--line-height-4xl)',
        '5xl': 'var(--line-height-5xl)',
        '6xl': 'var(--line-height-6xl)',
        '7xl': 'var(--line-height-7xl)',
        '8xl': 'var(--line-height-8xl)',
        '9xl': 'var(--line-height-9xl)',
        '10xl': 'var(--line-height-10xl)',
        '11xl': 'var(--line-height-11xl)'
      },
      letterSpacing: {
        'xs': 'var(--letter-spacing-xs)',
        'sm': 'var(--letter-spacing-sm)',
        'md': 'var(--letter-spacing-md)',
        'lg': 'var(--letter-spacing-lg)',
        'xl': 'var(--letter-spacing-xl)',
        '2xl': 'var(--letter-spacing-2xl)'
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
        '7xl': 'var(--spacing-7xl)',
        '8xl': 'var(--spacing-8xl)',
        '9xl': 'var(--spacing-9xl)',
        '10xl': 'var(--spacing-10xl)',
        '11xl': 'var(--spacing-11xl)',
        '12xl': 'var(--spacing-12xl)',
        '13xl': 'var(--spacing-13xl)',
        '14xl': 'var(--spacing-14xl)',
        '15xl': 'var(--spacing-15xl)'
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        '5xl': 'var(--radius-5xl)',
        '6xl': 'var(--radius-6xl)',
        '7xl': 'var(--radius-7xl)',
        '8xl': 'var(--radius-8xl)',
        '9xl': 'var(--radius-9xl)'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'plus': ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};