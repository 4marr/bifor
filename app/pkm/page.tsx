"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { CircleChevronLeft, School, CircleDollarSign, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ['latin'],
    variable: '--font-quicksand',
    display: 'swap',
})

export default function Rpl() {
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
        <section className={`relative w-full lg:px-16 py-36 md:py-28 overflow-hidden ${quicksand.className}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

                {/* Animated Gradient Orbs */}
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-700/20 to-blue-400/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-700/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="px-4 md:px-6 relative">
                <div className="flex gap-6 items-center justify-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-2 max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="/" className="inline-flex items-center gap-2 text-2xl hover:text-blue-700 font-semibold w-fit mb-8">
                            <CircleChevronLeft size={48} strokeWidth={1} />
                            <span>Kembali</span>
                        </a>
                        <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-sm w-fit">
                            <School className="mr-1 h-3.5 w-3.5 text-blue-700" />
                            <span>SMK Bina Informatika</span>
                        </div>

                        <div className="space-y-8">
                            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900/70">Perbankan dan Keuangan Mikro</h1>

                            <div className="relative">
                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border border-blue-700/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                                    <CircleDollarSign className="h-6 w-6 text-blue-700" />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-lg border border-blue-400/30 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-400" />
                                </div>

                                {/* Main Image */}
                                <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/10 to-blue-400/10" />
                                    <Image
                                        src="/pkm.webp"
                                        width={600}
                                        height={500}
                                        alt="SMK BINA INFORMATIKA"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-600 md:text-xl">Jurusan Perbankan dan Keuangan Mikro (PKM) dirancang untuk membekali mahasiswa dengan kompetensi di bidang manajemen keuangan, akuntansi, serta layanan perbankan yang terintegrasi dengan teknologi digital. Dalam program ini, mahasiswa mempelajari prinsip-prinsip dasar hingga lanjutan dalam pengelolaan keuangan pribadi dan lembaga, pencatatan akuntansi yang akurat, serta analisis keuangan untuk pengambilan keputusan yang strategis.
                                </p>
                                <p className="text-gray-600 md:text-xl">Seiring dengan perkembangan teknologi finansial (fintech), mahasiswa juga diperkenalkan pada sistem perbankan digital, termasuk layanan mobile banking, e-wallet, hingga transaksi non-tunai. Dengan pendekatan praktis dan studi kasus terkini, program ini mendorong pemahaman terhadap transformasi digital dalam dunia keuangan serta tantangan yang menyertainya.
                                </p>
                                <p className="text-gray-600 md:text-xl">Selain berfokus pada sektor perbankan formal, PKM juga menaruh perhatian khusus pada keuangan mikro—yakni sistem keuangan yang mendukung masyarakat kecil dan pelaku usaha mikro. Mahasiswa diajak untuk memahami mekanisme pembiayaan mikro, pengelolaan koperasi, serta strategi pemberdayaan ekonomi berbasis komunitas.
                                </p>
                                <p className="text-gray-600 md:text-xl">Lulusan program ini memiliki peluang karier yang luas, mulai dari menjadi staf di bank konvensional dan digital, analis keuangan, hingga manajer keuangan di koperasi atau lembaga keuangan mikro. Program ini juga cocok bagi mereka yang bercita-cita menjadi wirausahawan, karena memberikan landasan kuat dalam mengelola keuangan usaha secara mandiri dan profesional.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-gray-600 md:text-xl font-medium">Lulusan: </h1>
                            <ul className="list-decimal list-inside text-gray-600 md:text-lg space-y-2">
                                <li>Staf Perbankan</li>
                                <li>Analis Kredit Mikro</li>
                                <li>Manajer Keuangan Usaha Kecil/Mikro</li>
                                <li>Petugas Layanan Keuangan Digital (Digital Banking Officer)</li>
                                <li>Akuntan Pembukuan Usaha Mikro</li>
                                <li>Wirausahawan</li>
                                <li>Konsultan Keuangan Mikro</li>
                                <li>Petugas Lembaga Keuangan Mikro</li>
                                <li>Staf Operasional Fintech</li>
                                <li>Pendidik atau Pelatih Literasi Keuangan</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
