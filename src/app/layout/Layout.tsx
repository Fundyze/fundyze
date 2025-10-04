import type { ReactNode } from "react"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="app-container">
            {/* Header */}
            <Header />

            {/* Content */}
            <main className="app-content">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
