"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/riot-karma", label: "Riot / Karma" },
  { href: "/anarchy", label: "Anarchy" },
  { href: "/mayhem", label: "Mayhem" },
  { href: "/tball", label: "T-Ball" },
  { href: "/coaches", label: "Coaches" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/gallery/org", label: "Gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="siteNav">
      <div className="wrap navInner">
        <Link href="/" className="brand" onClick={closeMenu}>
          <div className="brandMark">
            <img
              src="/logos/renegades-logo.png"
              alt="Stateline Renegades logo"
            />
          </div>

          <div className="brandText">
            <b>Stateline Renegades</b>
            <span>Cheer • Baseball • Community • Family</span>
          </div>
        </Link>

        <button
          type="button"
          className="mobileMenuButton"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className={menuOpen ? "menuLine menuLineTop open" : "menuLine menuLineTop"} />
          <span className={menuOpen ? "menuLine menuLineMiddle open" : "menuLine menuLineMiddle"} />
          <span className={menuOpen ? "menuLine menuLineBottom open" : "menuLine menuLineBottom"} />
        </button>

        <div
          id="primary-navigation"
          className={menuOpen ? "navLinks navLinksOpen" : "navLinks"}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={isActive(link.href) ? "navLink active" : "navLink"}
            >
              {link.label}
            </Link>
          ))}

         <Link
  href="/register"
  onClick={closeMenu}
  className="navRegisterButton"
>
  Join Renegades
</Link>
        </div>
      </div>
    </nav>
  );
}