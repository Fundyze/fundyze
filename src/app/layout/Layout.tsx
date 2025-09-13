import type { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="app-container">
            {/* Header */}
            {/* TODO */}

            {/* Content */}
            <main className="app-content">
                {children}
            </main>

            {/* Footer */}
            {/* TODO */}
        </div>
    )
}
