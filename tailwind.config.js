/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "60%, 40%": { left: "100%" },
          "100%, 0%": { left: "0%" },
        },
        cv: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
            filter: "blur(33px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        typing: "typing 4s ease-in-out infinite ",
        cv: "cv 1s ease-in-out forwards",
      },
      backgroundImage: {
        omg: "url('/src/assets/omg.jpg')",
        badminton: "url('/src/assets/ofek7ktqewuep9afptve.avif')",
        cars: "url('/src/assets/78872593917f642af85dc42715e0c9f0.png')",
        valorant: "url('/src/assets/valorant-305kescxw5dpup7y.jpg')",
        11: "url('/src/assets/11.png')",
        12: "url('/src/assets/11.png')",
      },
      spacing: {
        "n-4": "calc(50% + 220px)",
        "n-5": "calc(50% + 440px)",
        "n-6": "calc(50% + 660px)",
      },
    },
  },
  plugins: [],
};
