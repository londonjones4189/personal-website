import type { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function HomePageLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}