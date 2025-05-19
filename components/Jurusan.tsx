"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Clapperboard, CircleDollarSign, Laptop, Network, Building2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link";

export default function Jurusan() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const jurusans = [
        {
            icon: <Laptop className="h-6 w-6 text-primary" />,
            title: "Rekayasa Perangkat Lunak (RPL)",
            description:
                "Pelajari pemrograman, pembuatan aplikasi, dan teknologi modern seperti AI dan IoT. Cocok untuk kamu yang ingin jadi developer atau startup founder masa depan.",
            url: "/rpl",
        },
        {
            icon: <Network className="h-6 w-6 text-primary" />,
            title: "Teknik Komputer dan Jaringan (TKJ)",
            description:
                "Dalami dunia jaringan komputer, konfigurasi server, hingga keamanan siber. Jurusan ini membekalimu menjadi teknisi handal di era digital.",
            url: "/tkj",
        },
        {
            icon: <Clapperboard className="h-6 w-6 text-primary" />,
            title: "Multimedia (MM)",
            description:
                "Kembangkan skill di bidang desain grafis, animasi, video, dan konten digital. Siap bersaing di industri kreatif dan media sosial.",
            url: "/mm",
        },
        {
            icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
            title: "Perbankan dan Keuangan Mikro (PKM)",
            description:
                "Belajar manajemen keuangan, akuntansi, dan layanan perbankan digital. Cocok untuk karier di sektor keuangan atau wirausaha.",
            url: "/pkm",
        },
        {
            icon: <Building2 className="h-6 w-6 text-primary" />,
            title: "Otomatisasi Tata Kelola Perkantoran (OTKP)",
            description:
                "Pelajari keterampilan administrasi modern, pengelolaan dokumen digital, dan teknologi perkantoran. Disiapkan untuk dunia kerja yang efisien dan profesional.",
            url: "/otkp",
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
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section id="jurusan" className="w-full lg:px-16 py-36 md:py-28 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-primary-gradient/5 blur-3xl" />
            </div>

            <div className="px-4 md:px-6" ref={ref}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block bg-gradient-to-r from-transparent via-primary/10 to-transparent px-4 py-1.5 text-sm font-semibold text-primary">
                            Jurusan Unggulan
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                            Pilih Jurusan Sesuai Dengan{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                Keinginanmu
                            </span>
                        </h2>
                        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                            SMK Bina Informatika hadir dengan berbagai jurusan untuk membantu kamu menjadi lulusan terbaik dan andal dalam dunia teknologi dan informasi.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {jurusans.map((jurusan, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-input bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Link href={jurusan.url}>
                                <div className="relative z-10">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        {jurusan.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold">{jurusan.title}</h3>
                                    <p className="text-muted-foreground">{jurusan.description}</p>
                                </div>
                            </Link>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary-gradient group-hover:w-full transition-all duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
