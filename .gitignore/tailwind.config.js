module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Boulangerie Dorée Palette
        primary: {
          DEFAULT: "#D4A574", // warm-golden-crust
          50: "#FBF8F3", // lightest-golden
          100: "#F4E4BC", // flour-dusting
          200: "#EDD49A", // light-golden
          300: "#E5C478", // medium-golden
          400: "#DDB956", // golden-highlight
          500: "#D4A574", // warm-golden-crust
          600: "#B8925F", // deeper-golden
          700: "#9C7F4A", // rich-golden
          800: "#806C35", // dark-golden
          900: "#645920", // darkest-golden
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#8B4513", // rich-bread-interior
          50: "#F5F0E8", // lightest-brown
          100: "#E8D5C0", // light-brown
          200: "#DBBA98", // medium-light-brown
          300: "#CE9F70", // medium-brown
          400: "#C18448", // darker-brown
          500: "#8B4513", // rich-bread-interior
          600: "#7A3D11", // deeper-brown
          700: "#69350F", // dark-brown
          800: "#582D0D", // darker-brown
          900: "#47250B", // darkest-brown
        },
        // Accent Colors
        accent: {
          DEFAULT: "#F4E4BC", // fresh-flour-dusting
          50: "#FEFCF8", // clean-bakery-counter
          100: "#F9F6F0", // subtle-parchment-depth
          200: "#F4E4BC", // fresh-flour-dusting
          300: "#EFD29A", // light-flour
          400: "#EAC078", // medium-flour
          500: "#E5AE56", // deeper-flour
          600: "#D19C34", // golden-flour
          700: "#BD8A12", // rich-flour
          800: "#9B7210", // dark-flour
          900: "#795A0E", // darkest-flour
        },
        // Background Colors
        background: "#FEFCF8", // clean-bakery-counter
        surface: "#F9F6F0", // subtle-parchment-depth
        // Text Colors
        text: {
          primary: "#2C1810", // dark-chocolate-readability
          secondary: "#5D4037", // cocoa-powder-hierarchy
        },
        // Status Colors
        success: {
          DEFAULT: "#7CB342", // fresh-herb-confidence
          50: "#F1F8E9", // lightest-green
          100: "#DCEDC8", // light-green
          200: "#C5E1A5", // medium-light-green
          300: "#AED581", // medium-green
          400: "#9CCC65", // darker-green
          500: "#7CB342", // fresh-herb-confidence
          600: "#689F38", // deeper-green
          700: "#558B2F", // dark-green
          800: "#33691E", // darker-green
          900: "#1B5E20", // darkest-green
        },
        warning: {
          DEFAULT: "#FF8F00", // caramelized-urgency
          50: "#FFF8E1", // lightest-orange
          100: "#FFECB3", // light-orange
          200: "#FFE082", // medium-light-orange
          300: "#FFD54F", // medium-orange
          400: "#FFCA28", // darker-orange
          500: "#FF8F00", // caramelized-urgency
          600: "#FF6F00", // deeper-orange
          700: "#E65100", // dark-orange
          800: "#BF360C", // darker-orange
          900: "#3E2723", // darkest-orange
        },
        error: {
          DEFAULT: "#D32F2F", // cherry-concern
          50: "#FFEBEE", // lightest-red
          100: "#FFCDD2", // light-red
          200: "#EF9A9A", // medium-light-red
          300: "#E57373", // medium-red
          400: "#EF5350", // darker-red
          500: "#D32F2F", // cherry-concern
          600: "#C62828", // deeper-red
          700: "#B71C1C", // dark-red
          800: "#8D1E1E", // darker-red
          900: "#6A1B1B", // darkest-red
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'sans': ['Source Sans Pro', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(212, 165, 116, 0.15)',
        'subtle': '0 2px 8px rgba(212, 165, 116, 0.08)',
        'gentle': '0 1px 4px rgba(212, 165, 116, 0.05)',
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 2s infinite',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}