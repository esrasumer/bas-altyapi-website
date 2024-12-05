import Link from "next/link";

export default function NavbarMenu() {
  return (
    <nav aria-label="Primary Navigation">
      <ul className="hidden md:flex linkColor">
        {[
          { href: '/', label: 'Anasayfa' },
          { href: '/#about', label: 'Hakkımızda' },
          { href: '/#skills', label: 'Sertifikalar' },
          { href: '/#projects', label: 'Projelerimiz' },
          { href: '/resume', label: 'Kariyer' },
          { href: '/#contact', label: 'İletişim' },
        ].map((link) => (
          <li key={link.href} className="ml-10 text-sm uppercase hover:border-b">
            <Link href={link.href}>
              <div aria-label={`Go to ${link.label}`}>{link.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
