import BottomFooter from "@/components/sections/BottomFooter";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import TopHeader from "@/components/sections/TopHeader";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "../globals.css";

export const metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TopHeader />
      <Header />
      <div className="grow">{children}</div>
      <Footer />
      <BottomFooter />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}
