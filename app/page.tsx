import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Jurusan from "@/components/Jurusan"
import Kontak from "@/components/Kontak"
import InfoPPDB from "@/components/InfoPPDB"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className={`min-h-screen font-[family-name:var(--font-quicksand)] overflow-hidden`}>
            <Header />
            <main className="flex flex-col items-center sm:items-start">
            <Hero />
            <Jurusan />
            <InfoPPDB />
            <Testimonials />
            <Kontak />
            <Footer />
            </main>
        </div>
    );
}
