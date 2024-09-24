import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import "../globals.css";
import TopHeader from "@/components/sections/TopHeader";
import Header from "@/components/sections/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <TopHeader />
          <Header />
          <div className="container mx-auto bg-white mt-[4rem] pb-[4rem]">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                  <div className="m-6 border-r-2 border-gray-200">
                    <ul>
                      <li className="my-5">
                        <Button variant="ghost" className="bg-blue-400 text-blue-950 px-[3rem] rounded-full hover:bg-transpirent">
                          My Profile
                        </Button>
                      </li>
                      <li className="my-5">
                        <Button variant="ghost" className="hover:text-blue-950 hover:bg-transpirent">
                          <Link href='/student/profile'> Personal Information</Link>
                        </Button>
                      </li>
                      <li className="my-5">
                        <Button variant="ghost" className="hover:text-blue-950 hover:bg-transpirent">
                          <Link href='/student/profile'> Password</Link>
                        </Button>
                      </li>
                      <li className="my-5">
                        <Button variant="ghost" className="hover:text-blue-950 hover:bg-transpirent">
                          <Link href='/student/profile'> My Courses</Link>
                        </Button>
                      </li>
                      <li className="my-5">
                        <Button variant="ghost" className="hover:text-blue-950 hover:bg-transpirent">
                          <Link href='/student/profile'> My Tests</Link>
                        </Button>
                      </li>
                    </ul>
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
      </body>
    </html>
  );
}
