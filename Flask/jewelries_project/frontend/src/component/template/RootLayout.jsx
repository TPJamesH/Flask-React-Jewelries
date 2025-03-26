import React from "react"

import { Metadata } from "next"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import "./styles/globals.css"

export function metadata() {
    title: "Jewelry Store"
}

//{children} : {children: React.ReactNode}
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light">
                    <div className="relative flex min-h-screen flex-col">
                        <SiteHeader />
                        <main className="flex-1">
                            {children}
                        </main>
                        <footer className="border-t">
                            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                                    <p className="text-center text-sm leading-loose md:text-left">
                                        &copy: Jewelry LLC. All rights reserved.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                                        Terms
                                    </Link>
                                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                                        Privacy
                                    </Link>
                                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                                        Cookies
                                    </Link>
                                </div>
                            </div>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}