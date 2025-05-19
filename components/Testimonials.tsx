"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Counter from "@/components/ui/counter"

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const testimonials = [
        {
            quote: "Dulu saya sama sekali tidak paham coding. Sekarang, saya bisa membangun website sendiri dari nol. Terima kasih SMK Bina Informatika atas bimbingannya!",
            name: "Ammar Abdul Malik",
            role: "Murid XI RPL",
            avatar: "/vercel.svg?height=64&width=64",
        },
        {
            quote: "Belajar desain di sini seru banget! Materinya up-to-date dan langsung bisa dipraktikkan ke proyek nyata.",
            name: "Arbi Al Ghozali",
            role: "Murid XI RPL",
            avatar: "/vercel.svg?height=64&width=64",
        },
        {
            quote: "Pembelajaran jaringan di SMK ini mudah dipahami dan langsung praktik. Saya jadi cepat menguasai dasar-dasarnya.",
            name: "Irfan",
            role: "Murid XI RPL",
            avatar: "/vercel.svg?height=64&width=64",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            id="testimoni"
            className="w-full lg:px-16 py-36 md:py-28 bg-blu-50 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(96,165,250,0.1),transparent_50%)]" />
            </div>

            <div className="px-4 md:px-6" ref={ref}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                            Testimoni{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                Murid
                            </span>
                        </h2>
                        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                            Apa kata mereka yang sedang belajar di SMK Bina Informatika?
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-input bg-background p-6 transition-all hover:shadow-lg"
                            variants={itemVariants}
                        >
                            <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                                <Quote className="h-8 w-8" />
                            </div>

                            <div className="relative z-10">
                                <p className="mb-6 text-muted-foreground italic">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonial Stats */}
                <motion.div
                    className="mt-20 rounded-xl overflow-hidden border border-input bg-background/50 backdrop-blur-sm p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Bergabunglah dengan{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={1000} suffix="+" />} <br />
                                </span>{" "}
                                lulusan terbaik lainnya
                            </h3>
                            <p className="text-muted-foreground">
                                Sekolah kami terus berkembang dengan lulusan dari
                                berbagai jurusan dan tingkat keahlian.
                                Bersama-sama, kita belajar, berbagi, dan tumbuh sebagai
                                profesional.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-lg border border-input p-4 text-center">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {/* 98% */}
                                    {isInView && <Counter to={98} suffix="%" />}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Diterima di Perguruan Tinggi
                                </div>
                            </div>
                            <div className="rounded-lg border border-input p-4 text-center">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && 'A'}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Terakreditasi
                                </div>
                            </div>
                            <div className="rounded-lg border border-input p-4 text-center">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={90} suffix="%" />}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Mendapat Pekerjaan
                                </div>
                            </div>
                            <div className="rounded-lg border border-input p-4 text-center">
                                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={5} suffix=" Jam" />}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Belajar
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
