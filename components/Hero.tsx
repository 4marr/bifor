"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Clock, Code, School, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Counter from "@/components/ui/counter"

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full lg:px-16 pt-40 pb-36 lg:py-36 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

                {/* Animated Gradient Orbs */}
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-primary-gradient/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary-gradient/20 to-primary/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="px-4 lg:px-6 relative">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm w-fit">
                            <School className="mr-1 h-3.5 w-3.5 text-primary" />
                            <span>Sekolah Menengah Kejuruan Kota Bogor</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                                Saatnya Raih Masa Depan Gemilang,<br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    Bersama Kami!
                                </span>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground lg:text-xl">
                                Temukan potensi keahlian kamu bersama sekolah yang
                                mendukung, pembelajaran interaktif, dan sumber daya
                                berkualitas tinggi.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/6289617354862">
                                <button
                                    className="h-11 rounded-xl px-8 text-white font-semibold bg-gradient-to-r from-primary to-primary-gradient hover:from-primary/90 hover:to-primary-gradient/90 transition-all duration-300"
                                >
                                    Mulai Belajar
                                </button>
                            </a>
                            <a href="#jurusan">
                                <button
                                    className="group h-11 border bg-background hover:bg-background focus-visible:ring-0 rounded-xl px-8 relative overflow-hidden border-primary"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-gradient/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                    <span className="relative">Pelajari Lebih Lanjut</span>
                                </button>
                            </a>
                        </div>

                        <div className="flex items-center gap-8 mb-8 lg:mb-0">
                            <div className="flex flex-col items-center">
                                <div ref={ref} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={300} suffix="+" />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Users className="h-4 w-4 text-primary-gradient" />
                                    Murid
                                </div>
                            </div>
                            <div className="h-10 border-r border-border"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={20} suffix="+" />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <School className="h-4 w-4 text-primary-gradient" />
                                    Pengajar
                                </div>
                            </div>
                            <div className="h-10 border-r border-border"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={5} suffix=" Jam" />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-4 w-4 text-primary-gradient" />
                                    Belajar
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative mx-auto lg:ml-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border border-primary/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-lg border border-primary-gradient/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                                <Users className="h-6 w-6 text-primary-gradient" />
                            </div>

                            {/* Main Image */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-input shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary-gradient/10" />
                                <Image
                                    src="/gedung.jpg"
                                    width={600}
                                    height={500}
                                    alt="SMK BINA INFORMATIKA"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
