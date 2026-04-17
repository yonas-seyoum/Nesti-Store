import { UserCog } from "lucide-react";
import Link from "next/link";
import { FaHome, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaCartShopping, FaMapLocation } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold">NestiStore</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Premium products — local Ethiopian goods & imported from Thailand.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h4>
            <nav className="mt-3 flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <FaHome className="text-xl" /> <span>Home</span>
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <FaCartShopping className="text-xl" />
                <span>Products</span>
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <UserCog className="text-xl" />
                Admin
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500 text-xl" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTelegram className="text-blue-500 text-xl" />
                <span>Telegram</span>
              </div>
              <div className="flex items-center gap-2">
                <FaInstagram className="text-pink-500 text-xl" />
                <span>Instagram</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
              Location
            </h4>
            <p className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
              <FaMapLocation className="text-muted-foreground " />
              <span>Addis Ababa, Ethiopia</span>
            </p>
            <p className="text-sm text-muted-foreground">Open: 24hrs</p>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © 2026 NestiStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
