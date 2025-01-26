import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/writing",
    label: "writing",
  },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-end space-x-4 mb-8">
      {navLinks.map(({ href, label }) => (
        <Link
          key={label}
          href={href}
          className="text-white opacity-70 text-xs font-mono hover:underline">
          {label}
        </Link>
      ))}
    </nav>
  );
}
