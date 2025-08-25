"use client";
import { Button } from "./ui/button";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
              LABEB AI
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Libyan tech startup specializing in smart solutions powered by
              artificial intelligence for secure digital transformation.
            </p>
            <div className="flex space-x-4">
              <Button>
                <Twitter />
              </Button>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button>Services</button>
              </li>
              <li>
                <button>Case Studies</button>
              </li>
              <li>
                <button>Process</button>
              </li>
              <li>
                <button>Contact</button>
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
          <p>&copy; 2024 LABEB AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
