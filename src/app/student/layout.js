import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "../globals.css";
import TopHeader from "@/components/sections/TopHeader";
import Header from "@/components/sections/Header";
import StudentLinks from "@/components/StudentLiks";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function StudentLayout({ children }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="container mx-auto bg-white mt-[4rem] pb-[4rem]">
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            <div className="m-6 border-r-2 border-gray-200">
              <StudentLinks />
            </div>
          </div>
          <div className="col-span-3">
            <div className="m-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
