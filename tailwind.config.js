/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header_top_link: "#999999",
        brand_color_1: "#f28d3d",
        header_menu_item: "#333333",
      },
      backgroundColor: {
        header_search: "#F3F3F3",
        brand_color_1: "#f28d3d",
        banner_bottom_bg: "#1b1b1b",
      },
      fontFamily: {
        general_font_family: "'Source Sans Pro', sans-serif",
      },
      boxShadow: {
        header_search_shadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        options_img_radius: "50%",
      },
    },
  },
  plugins: [],
};
