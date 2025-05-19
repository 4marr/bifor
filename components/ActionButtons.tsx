'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from "lucide-react";

export default function ActionButtons() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        const message = input.trim();
        if (!message) return;

        setMessages(prev => [...prev, { name: 'Anda', body: message }]);
        setInput('');

        const payload = {
            model: "meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8",
            messages: [
                {
                    role: "system",
                    content: [
                        {
                            type: "text",
                            text: "Be a helpful assistant"
                        }
                    ]
                },
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: message
                        }
                    ]
                }
            ],
            max_tokens: 128,
            temperature: 0.9,
            presence_penalty: 0.1,
            frequency_penalty: 0.1,
            top_p: 0.9,
            top_k: 100
        };

        try {
            const res = await fetch('https://fastrestapis.fasturl.cloud/aillm/llama', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();
            const reply = data?.result.choices?.[0]?.message?.content ?? 'Bot tidak merespons.';
            setMessages(prev => [...prev, { name: 'Bot', body: reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { name: 'Bot', body: '❌ Gagal menghubungi server.' }]);
        }
    };

    return (
        <>
            {/* ChevronUp - tetap terlihat */}
            <div className="fixed bottom-24 right-4 z-50">
                <div className="bg-blue-700 p-3 rounded-full shadow-md text-white">
                    <ChevronUp />
                </div>
            </div>

            {/* Tombol Chat */}
            <button
                onClick={() => !isOpen ? setIsOpen(true) : setIsOpen(false)}
                className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg z-50"
            >
                💬
            </button>

            {/* Chat Popup */}
            {isOpen && (
                <div className="fixed bottom-0 right-0 md:bottom-10 md:right-20 bg-background shadow-xl z-40 flex flex-col w-full h-screen md:w-80 md:h-[60vh] md:rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                        <span className="font-semibold">Chatbot</span>
                        <button onClick={() => setIsOpen(false)} className="text-white text-lg font-bold">
                            &times;
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm bg-background">
                        {messages.length === 0 ? (
                            <p className="text-gray-500">Belum ada pesan.</p>
                        ) : (
                            messages.map((msg, idx) => (
                                <div key={idx} className="bg-background border rounded p-2 text-foreground">
                                    <strong>{msg.name}:</strong> {msg.body}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-4 border-t flex gap-2 bg-background">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                            placeholder="Ketik pesan..."
                        />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                            Kirim
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
