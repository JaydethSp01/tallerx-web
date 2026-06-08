export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/clientes", label: "Clientes" }, { href: "/mecanicos", label: "Mecanicos" }, { href: "/ordenes", label: "Ordenes" }, { href: "/repuestos", label: "Repuestos" }, { href: "/vehiculos", label: "Vehiculos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Taller automotriz", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Taller automotriz">{children}</ProtectedShell>
      </body>
    </html>
  );
}
