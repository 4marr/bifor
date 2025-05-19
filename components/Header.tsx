"use client";

import { useState, useEffect } from "react";
import { SimpleThemeToggle } from "@/components/SimpleThemeToggle";
import { Menu, X, Megaphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showing = () => {
        setShow(false)
    }

    return (
        <div className="fixed top-0 z-50 w-full">
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300 lg:px-24",
                    isScrolled
                        ? "bg-background/80 backdrop-blur-md border-b-gray-200 shadow-sm"
                        : "bg-transparent"
                )}
            >
                <div className="w-full flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="relative overflow-hidden rounded">
                            <Image
                                src="/bifor.png"
                                alt="BIFOR Logo"
                                width={44}
                                height={44}
                                className="object-cover"
                            />
                        </div>
                        <p className="font-bold">SMK BINA INFORMATIKA</p>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link
                            href="#jurusan"
                            className="text-sm font-semibold relative group"
                        >
                            <span className="transition-colors hover:text-primary">
                                Jurusan
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                        <Link
                            href="#info-ppdb"
                            className="text-sm font-semibold relative group"
                        >
                            <span className="transition-colors hover:text-primary">
                                Info PPDB
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                        <Link
                            href="#testimoni"
                            className="text-sm font-semibold relative group"
                        >
                            <span className="transition-colors hover:text-primary">
                                Testimoni
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                        <Link
                            href="#kontak"
                            className="text-sm font-semibold relative group"
                        >
                            <span className="transition-colors hover:text-primary">
                                Kontak
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <SimpleThemeToggle />
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxHK8vlXwS9Pr3AuIlyBWDOjXwo2mgOZjx25nQhnSGal4IVw/viewform?usp=header">
                            <button className="hidden lg:flex text-white font-semibold bg-gradient-to-r from-primary to-primary-gradient hover:from-primary/90 hover:to-primary-gradient/90 py-2 px-3 rounded-xl transition-all duration-300">
                                Daftar Sekarang
                            </button>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="hover:bg-accent hover:text-accent-foreground h-10 w-10 lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden border-t border-t-gray-200 bg-background/95 backdrop-blur-md">
                        <nav className="flex flex-col py-4 text-center">
                            <Link
                                href="#jurusan"
                                className="py-3 text-sm font-semibold border-b border-gray-200/50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Jurusan
                            </Link>
                            <Link
                                href="#info-ppdb"
                                className="py-3 text-sm font-semibold border-b border-gray-200/50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Info PPDB
                            </Link>
                            <Link
                                href="#testimoni"
                                className="py-3 text-sm font-semibold border-b border-gray-200/50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Testimoni
                            </Link>
                            <Link
                                href="#kontak"
                                className="py-3 text-sm font-semibold border-b border-gray-200/50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Kontak
                            </Link>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdxHK8vlXwS9Pr3AuIlyBWDOjXwo2mgOZjx25nQhnSGal4IVw/viewform?usp=header">
                                <button className="mt-4 text-white font-semibold bg-gradient-to-r from-primary to-primary-gradient hover:from-primary/90 hover:to-primary-gradient/90 py-2 px-3 rounded-xl transition-all duration-300">
                                    Daftar Sekarang
                                </button>
                            </a>
                        </nav>
                    </div>
                )}
            </header>
            <div className={`${show ? 'flex' : 'hidden'} w-full mt-2 flex justify-center items-center`}>
                <div className="flex shrink-0 items-center justify-center gap-2 py-2 px-3 w-full lg:w-fit lg:rounded-xl bg-background/90">
                    <Megaphone />
                    <p className="font-semibold mr-2 text-xs sm:text-base">PPDB TELAH DIBUKA! PEMBAYARAN DSP GRATIS UNTUK 100 ORANG PENDAFTAR PERTAMA!!</p>
                    <X size={20} onClick={showing} />
                </div>
            </div>
        </div>
    );
}
