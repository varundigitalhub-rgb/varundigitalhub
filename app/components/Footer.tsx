import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  companyName?: string;
  links?: Array<{
    title: string;
    items: Array<{
      label: string;
      href: string;
    }>;
  }>;
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon: string;
  }>;
  className?: string;
}

export default function Footer({
  companyName = "Varun Digital Hub",
  links = [
    {
      title: "Services",
      items: [
        { label: "Web Design", href: "/services" },
        { label: "Web Development", href: "/services" },
        { label: "SEO Optimization", href: "/services" },
        { label: "E-Commerce", href: "/services" }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Our Work", href: "/our-work" },
        { label: "Contact", href: "/contact" },
        { label: "Templates", href: "/templates" }
      ]
    }
  ],
  socialLinks = [
    { platform: "WhatsApp", href: "https://wa.me/919372787128", icon: "📱" },
    { platform: "LinkedIn", href: "#", icon: "💼" },
    { platform: "Instagram", href: "#", icon: "📸" }
  ],
  className = ""
}: FooterProps) {
  return (
    <footer className={`bg-gray-900 text-white py-16 px-6 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logo_digital_hub.png"
                alt={companyName}
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional web design and development services for Mumbai businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
