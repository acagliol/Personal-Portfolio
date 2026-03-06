import { TerminalShell } from "@/components/portfolio/terminal-shell"

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <TerminalShell>{children}</TerminalShell>
}
