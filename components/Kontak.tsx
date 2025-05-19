"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Globe, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Kontak() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const communities = [
        {
            icon: <Globe className="h-6 w-6 text-blue-600 dark:text-primary-gradient" />,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            title: "Website",
            description: "Kunjungi website kami untuk melihat informasi terbaru mengenai sekolah.",
            buttonText: "Kunjungi Sekarang",
            buttonLink: "https://smkbifor.sch.id",
        },
        {
            icon: <Instagram className="h-6 w-6 text-blue-600 dark:text-primary-gradient" />,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            title: "Instagram",
            description: "Ikuti kami di Instagram untuk melihat informasi terbaru mengenai sekolah.",
            buttonText: "Ikuti Kami",
            buttonLink: "https://insagram.com/smkbinainformatika",
        },
        {
            icon: <Mail className="h-6 w-6 text-blue-600 dark:text-primary-gradient" />,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            title: "Email",
            description: "Kirim pesan mu lewat email untuk mengetahui informasi selanjutnya.",
            buttonText: "Kirim Pesan",
            buttonLink: "mailto:smkbifor@gmail.com",
        },
        {
            icon: <Phone className="h-6 w-6 text-blue-600 dark:text-primary-gradient" />,
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            title: "Contact Person",
            description: "Kirim pesan mu lewat telpon untuk mengetahui informasi selanjutnya.",
            buttonText: "Kirim Pesan",
            buttonLink: "https://wa.me/6289617354862",
        },
    ]

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
        <section id="kontak" className="w-full lg:px-16 py-36 md:py-28 bg-muted relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:14px_14px]" />
            </div>

            <div className="px-4 md:px-6" ref={ref}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                            Kontak{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">Kami</span>
                        </h2>
                        <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                            Bergabunglah dengan ribuan lulusam terbaik di Indonesia yang saling membantu dan berbagi pengalaman.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {communities.map((community, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl border border-input bg-background p-6 transition-all hover:shadow-xl"
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div
                                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ${community.iconBg}`}
                                >
                                    {community.icon}
                                </div>
                                <h3 className="mb-2 text-xl font-bold">{community.title}</h3>
                                <p className="mb-6 text-foreground">{community.description}</p>
                                <a href={community.buttonLink}>
                                    <button
                                        className="w-full py-2 px-3 rounded-xl group-hover:text-white border border-input bg-background group-hover:bg-primary transition-colors duration-300"
                                    >
                                        {community.buttonText}
                                    </button>
                                </a>
                            </div>

                            <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Resource */}
                <motion.div
                    className="mt-20 rounded-xl overflow-hidden border border-input bg-background/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-flex justify-center items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4 w-fit">
                                <MapPin className="h-6 w-6 text-blue-600 dark:text-primary-gradient" />
                                <p>Lokasi Sekolah</p>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Jl. Re. Abdullah No.15, RT.02/RW.01, Pasir Jaya, Kec. Bogor Barat, Kota Bogor, Jawa Barat 16119</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="py-2 px-3 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-primary-gradient hover:from-primary/90 hover:to-primary-gradient/90">
                                    <a href="https://wa.me/6289617354862">Mulai Belajar</a>
                                </button>
                                <button className="py-2 px-3 rounded-xl border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground">Lihat Silabus</button>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3969846148207!2d106.7793926!3d-6.597485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5ea815e50b7%3A0x328cd4976023307b!2sSMK%20Bina%20Informatika!5e0!3m2!1sid!2sid!4v1746513801701!5m2!1sid!2sid" allowFullScreen loading="lazy" className="w-full h-full"></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
