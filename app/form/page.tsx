"use client";

import { useState, useRef } from 'react';
import Image from "next/image";
import Head from 'next/head';
import { Geist } from "next/font/google";
import { Printer } from "lucide-react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

type formAnak = {
    nama: string;
    ttl: string;
    agama: string;
    alamat: string;
    nohp: string;
    asalSekolah: string;
    jurusan: string;
};

type formOrtu = {
    namaAyah: string;
    namaIbu: string;
    ttlAyah: string;
    pendidikan: string;
    pekerjaan: string;
    alamatOrtu: string;
    nohpOrtu: string;
};

export default function Home() {
    const [formAnak, setFormAnak] = useState<formAnak>({
        nama: '',
        ttl: '',
        agama: '',
        alamat: '',
        nohp: '',
        asalSekolah: '',
        jurusan: '',
    });

    const [formOrtu, setFormOrtu] = useState<formOrtu>({
        namaAyah: '',
        namaIbu: '',
        ttlAyah: '',
        pendidikan: '',
        pekerjaan: '',
        alamatOrtu: '',
        nohpOrtu: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const printRef = useRef<HTMLDivElement>(null);

    const handlePrint = () => {
        if (printRef.current) {
            window.print();
        }
    };

    const handleChangeAnak = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormAnak(prev => ({ ...prev, [name]: value }));
    };

    const handleChangeOrtu = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormOrtu(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className={`min-h-screen bg-background p-6 text-foreground ${geistSans.variable}`}>
            <Head>
                <title>Formulir PPDB</title>
            </Head>

            <div className="max-w-2xl mx-auto bg-backgound p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Formulir Pendaftaran PPDB</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <h2 className="text-lg font-bold mt-4">A. Biodata Anak</h2>

                    {/* Form Anak */}
                    {[
                        { id: 'nama', label: 'Nama Lengkap Calon Siswa' },
                        { id: 'ttl', label: 'Tempat/Tanggal Lahir' },
                        { id: 'agama', label: 'Agama' },
                        { id: 'alamat', label: 'Alamat' },
                        { id: 'nohp', label: 'Nomor Telp/HP' },
                        { id: 'asalSekolah', label: 'Asal Sekolah' },
                    ].map(({ id, label }) => (
                        <div key={id}>
                            <label htmlFor={id} className="block mb-1">{label}</label>
                            <input
                                id={id}
                                name={id}
                                type="text"
                                value={formAnak[id as keyof formAnak]}
                                onChange={handleChangeAnak}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="jurusan" className="block mb-1">Jurusan Pilihan</label>
                        <select
                            id="jurusan"
                            name="jurusan"
                            value={formAnak.jurusan}
                            onChange={handleChangeAnak}
                            className="w-full border border-gray-300 p-2 rounded text-foreground"
                            required
                        >
                            <option value="">-- Pilih Jurusan --</option>
                            <option value="Rekaysa Perangkat Lunak (RPL)">Rekaysa Perangkat Lunak (RPL)</option>
                            <option value="Teknik Komputer dan Jaringan (TKJ)">Teknik Komputer dan Jaringan (TKJ)</option>
                            <option value="Multimedia (MM)">Multimedia (MM)</option>
                            <option value="Perbankan dan Keuangan Mikro (PKM)">Perbankan dan Keuangan Mikro (PKM)</option>
                        </select>
                    </div>

                    {/* Form Orang Tua */}
                    <h2 className="text-lg font-bold mt-8">B. Biodata Orang Tua</h2>

                    {[
                        { id: 'namaAyah', label: 'Nama Ayah' },
                        { id: 'namaIbu', label: 'Nama Ibu' },
                        { id: 'ttlAyah', label: 'Tempat, Tanggal Lahir Ayah' },
                        { id: 'pendidikan', label: 'Pendidikan' },
                        { id: 'pekerjaan', label: 'Pekerjaan' },
                        { id: 'alamatOrtu', label: 'Alamat' },
                        { id: 'nohpOrtu', label: 'Nomor Telp/HP' },
                    ].map(({ id, label }) => (
                        <div key={id}>
                            <label htmlFor={id} className="block mb-1">{label}</label>
                            <input
                                id={id}
                                name={id}
                                type="text"
                                value={formOrtu[id as keyof formOrtu]}
                                onChange={handleChangeOrtu}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>

                {/* Tampilkan hasil */}
                {submitted && (
                    <div className="mt-8 border-t pt-4">
                        <h2 className="text-xl font-semibold mb-2">Data Pendaftar</h2>
                        <div id="print-area" ref={printRef} className="bg-gray-50 px-4 py-8 rounded space-y-1 text-black font-formal">
                            <div className="flex items-center justify-center relative w-full">
                                <div className="absolute left-4 top-4">
                                    <Image
                                        src="/bifor.png"
                                        alt="BIFOR Logo"
                                        width={60}
                                        height={60}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h2 className="font-bold">YAYASAN NURUL ILMA</h2>
                                    <h2 className="font-bold">SEKOLAH MENENGAH KEJURUAN</h2>
                                    <h2 className="font-bold">SMK BINA INFORMATIKA KOTA BOGOR</h2>
                                    <p className="text-sm">Jl. Re. Abdullah No.15, Kota Bogor, Jawa Barat 16119</p>
                                </div>
                            </div>

                            <div className="w-full bg-black border my-4"></div>

                            <div className="text-center mb-4">
                                <h2 className="font-bold">FORMULIR PENDAFTARAN</h2>
                                <h2 className="font-bold">PENERIMAAN PESERTA DIDIK BARU (PPDB)</h2>
                                <h2 className="font-bold">TAHUN PEMBELAJARAN 2025/2026</h2>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">A. Biodata Anak</h3>
                                <div className="grid grid-cols-2">
                                    <p><strong>Nama</strong></p>
                                    <p>: {formAnak.nama}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Tempat, Tanggal Lahir</strong></p>
                                    <p>: {formAnak.ttl}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Agama</strong></p>
                                    <p>: {formAnak.agama}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>ALamat</strong></p>
                                    <p>: {formAnak.alamat}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Nomor Telp/Hp</strong></p>
                                    <p>: {formAnak.nohp}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Asal Sekolah</strong></p>
                                    <p>: {formAnak.asalSekolah}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Jurusan Yang Dipilh</strong></p>
                                    <p>: {formAnak.jurusan}</p>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h3 className="font-semibold text-lg">B. Biodata Orang Tua</h3>
                                <div className="grid grid-cols-2">
                                    <p><strong>Nama Ayah</strong></p>
                                    <p>: {formOrtu.namaAyah}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Nama Ibu</strong></p>
                                    <p>: {formOrtu.namaIbu}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Tempat, Tanggal Lahir Ayah</strong></p>
                                    <p>: {formOrtu.ttlAyah}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Pendidikan</strong></p>
                                    <p>: {formOrtu.pendidikan}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Pekerjaan</strong></p>
                                    <p>: {formOrtu.pekerjaan}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Alamat</strong></p>
                                    <p>: {formOrtu.alamatOrtu}</p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <p><strong>Nomor Hp/Telp</strong></p>
                                    <p>: {formOrtu.nohpOrtu}</p>
                                </div>
                            </div>
                            <p className="text-center mt-10">Demikian data diri kami sampaikan untuk dapat dipergunakan sebagaimana mestinya</p>
                            <div className="flex justify-between px-10 mt-8">
                                <div>
                                    <p>Orang Tua/Wali Murid</p>
                                    <div className="w-full h-[2px] bg-black border mt-16"></div>
                                </div>
                                <div>
                                    <p>Calon Siswa</p>
                                    <div className="w-full h-[2px] bg-black border mt-16"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end print:hidden">
                            <button
                                onClick={handlePrint}
                                className="bg-primary text-white flex items-center justify-center gap-2 px-4 py-2 rounded hover:bg-primary/90"
                            >
                                <Printer /> Print
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
