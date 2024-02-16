/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              yellow: '#D99904',
              grayYellow: '#BB8506',
              blacks: '#151515',
              grayBlack: '#737373',
              gray:'#F3F3F3',
              fromBlack:'#444',
              fromGray:'#A1A1A1',
              fromBorder:'#D0D0D0',
              fromBg:'#D1A054',
              red:'#B91C1C',
            },

            boxShadow: {
                custom: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)',
                custom2: '0px 0px 12px -1px rgba(242,147,5,1)',
            }
          },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: ["emerald"],
    },

}
