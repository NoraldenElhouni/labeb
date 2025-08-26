"use client";
import { Button } from "./ui/button";
import { Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer
      id="footer"
      className="bg-background border-t border-white/10 py-12"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
              {t("name")}
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t("description")}
            </p>
            <div className="flex space-x-4">
              <Button asChild>
                <Link href="mailto:assel@labebai.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://www.linkedin.com/company/labebai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://wa.me/218917722558"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://www.instagram.com/labeb.ai?igsh=MTdvaTV0bWpkcjd2bQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://www.facebook.com/share/1Ce915Mf7H/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("links.quick")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.about")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.services")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("solutions")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.solutions")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("team")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.team")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.gallery")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("achievements")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.achievements")}
                </button>
              </li>
              <li>
                <button
                  className="hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("partners")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("links.partners")}
                </button>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2023 LABEB AI. {t("right")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
