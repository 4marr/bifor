"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function SimpleThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Supaya komponen hanya berjalan di client
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="border border-gray-200 bg-white hover:bg-slate-100 h-10 w-10 focus-visible:ring-0 rounded-xl flex items-center justify-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out cursor-pointer"
        >
            {theme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
