"use client"

import { ClipboardList, TextSearch, Check } from "lucide-react";
import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Counter from "@/components/ui/counter"

export default function jadwal() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const jadwals = [
        {
            title: "Pendaftaran Gelombang 1",
            date: "18-05-2025",
            description: "Kesempatan pertama untuk mendaftar dan memilih jurusan favoritmu. Daftar lebih awal, peluang lebih besar!",
        },
        {
            title: "Pendaftaran Gelombang 2",
            date: "18-05-2025",
            description: "Bagi yang belum sempat di gelombang 1, masih ada kesempatan mendaftar dan bergabung dengan kami.",
        },
        {
            title: "MPLS",
            date: "18-05-2025",
            description: "Masa Pengenalan Lingkungan Sekolah untuk mengenal teman, guru, dan budaya sekolah baru dengan kegiatan seru dan edukatif.",
        },
    ];

    const alurs = [
        {
            icon: <ClipboardList className="h-6 w-6 text-primary" />,
            title: "Pendaftaran Online",
            description: "Calon siswa mendaftar secara daring dengan mengisi data dan mengunggah dokumen seperti ijazah, KK, dan pas foto.",
        },
        {
            icon: <TextSearch className="h-6 w-6 text-primary" />,
            title: "Verifikasi dan Seleksi Berkas",
            description: "Sekolah mengecek kelengkapan dan validitas dokumen. Jika ada kekurangan, siswa diberi waktu untuk melengkapi.",
        },
        {
            icon: <Check className="h-6 w-6 text-primary" />,
            title: "Pengumuman dan Daftar Ulang",
            description: "Siswa yang lolos seleksi wajib daftar ulang sesuai jadwal dengan membawa dokumen asli dan menyelesaikan administrasi.",
        },
    ]

    let biayas = [
        {
            nama: "DSP",
            harga: "2.300.000",
            jumlah: "1 Kali"
        },
        {
            nama: "SPP",
            harga: "250.000",
            jumlah: "Per-bulan"
        },
        {
            nama: "MOS + OSIS",
            harga: "150.000",
            jumlah: "Per-tahun"
        },
        {
            nama: "Asuransi Siswa",
            harga: "70.000",
            jumlah: "Per-tahun"
        },
        {
            nama: "Seragam Olahraga",
            harga: "100.000",
            jumlah: "1 Stel"
        },
        {
            nama: "Seragam Batik",
            harga: "100.000",
            jumlah: "1 Pcs"
        },
        {
            nama: "Seragam Praktikum",
            harga: "100.000",
            jumlah: "1 Pcs"
        },
        {
            nama: "Praktek Komputer",
            harga: "330.000",
            jumlah: "Per-tahun"
        },
        {
            nama: "Jas Almameter",
            harga: "300.000",
            jumlah: "1 Pcs"
        },
        {
            nama: "Map Raport",
            harga: "100.000",
            jumlah: "1 Pcs"
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
        <section ref={ref} id="info-ppdb" className="relative text-foreground w-full px-4 lg:px-16 py-36 md:py-28">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[40%] -left-[10%] w-[30%] h-[70%] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] -right-[10%] w-[20%] h-[60%] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-[40%] left-[20%] w-[30%] h-[70%] bg-primary/10 rounded-full blur-[120px]"></div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                        Informasi{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                            PPDB
                        </span>
                    </h2>
                </motion.div>
            </div>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-3xl font-semibold mb-8">Alur Pendaftaran</h3>
                    <ol className="items-center md:flex">
                        {alurs.map((alur, index) => (
                            <li key={index} className="group relative mb-6 md:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900/30 md:ring-8 dark:ring-gray-900 shrink-0">{alur.icon}</div>
                                    <div className="hidden md:flex w-full bg-input h-0.5 dark:bg-gray-700"></div>
                                </div>
                                <div className="mt-3 md:pe-8">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{alur.title}</h3>
                                    <p className="text-base font-normal text-muted-foreground">{alur.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative rounded-xl shadow-lg mt-16 overflow-hidden w-full">
                    <div className="overflow-x-auto">
                        <table className="min-w-[600px] w-full text-sm text-left rtl:text-right text-foreground">
                            <thead className="text-xs text-white uppercase bg-gradient-to-r from-primary to-primary-gradient">
                                <tr>
                                    <th scope="col-span-3" className="px-6 py-3">
                                        <h2 className="text-lg">Rincian Pembayaran</h2>
                                    </th>
                                    <th scope="col-span-3" className="px-6 py-3">
                                    </th>
                                    <th scope="col-span-3" className="px-6 py-3">
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Harga
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Jumlah
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {biayas.map((biaya, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-input">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {biaya.nama}
                                        </th>
                                        <td className="px-6 py-4">
                                            Rp.{biaya.harga}
                                        </td>
                                        <td className="px-6 py-4">
                                            {biaya.jumlah}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-input text-foreground">
                                <tr>
                                    <th scope="col-span-3" className="px-6 py-3">
                                        <h2 className="text-lg uppercase">Total Pembayaran</h2>
                                    </th>
                                    <th scope="col-span-3" className="px-6 py-3">
                                        <h2 className="text-lg">Rp.3.8000.000,-</h2>
                                    </th>
                                    <th scope="col-span-3" className="px-6 py-3">
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="relative mx-auto lg:ml-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex flex-col gap-4 items-center justify-center mt-16 text-center rounded-xl">
                    <div>
                        <h2 className="text-2xl tracking-tighter md:text-3xl lg:text-4xl ">Hemat hingga <span className="font-bold">Rp.2.300.000</span> untuk 100 orang pendaftar pertama! <br />Dengan total pembayaran</h2>
                    </div>
                    <div>
                        <p className="line-through">Rp.3.800.000,-</p>
                        <h3 className="text-3xl tracking-tighter md:text-4xl lg:text-5xl font-bold">{isInView && <Counter to={1500000} prefix = "Rp." suffix=",-" />}</h3>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
