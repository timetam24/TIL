import { Inter, Mr_De_Haviland } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const mrDeHaviland = Mr_De_Haviland({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mr-de-haviland",
});

const uniformPro = localFont({
  src: [
    {
      path: "../../public/fonts/Fontspring-DEMO-uniformpro-ult.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/Fontspring-DEMO-uniformpro-blkit.otf",
      style: "italic",
    },
    { path: "../../public/fonts/Fontspring-DEMO-uniformpro-bld.otf" },
  ],
  display: "swap",
  variable: "--font-uniform-pro",
});

export { inter, mrDeHaviland, uniformPro };
