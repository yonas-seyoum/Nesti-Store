"use client";

import useCurrency from "@/app/hooks/useCurrency";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const { currency, toggleCurrency } = useCurrency();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            🇪🇹 NestiStore
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Admin
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleCurrency}
            className="flex h-9 items-center gap-1.5 rounded-full border bg-card px-3 text-sm font-medium transition-all hover:shadow-sm"
            aria-label="Toggle currency"
          >
            <span
              className={`transition-opacity ${currency === "THB" ? "opacity-100" : "opacity-50"}
                `}
            >
              ฿
            </span>
            <span className="text-muted-foreground">/</span>
            <span
              className={`transition-opacity ${currency === "ETB" ? "opacity-100" : "opacity-50"}
                `}
            >
              Br
            </span>
          </button>

          <button
            className="md:hidden"
            onClick={handleMenuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={handleMenuOpen}
              className="text-sm font-medium text-foreground"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={handleMenuOpen}
              className="text-sm font-medium text-foreground"
            >
              Products
            </Link>
            <Link
              href="/admin"
              onClick={handleMenuOpen}
              className="text-sm font-medium text-foreground"
            >
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
