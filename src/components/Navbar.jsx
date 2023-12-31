"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export const navLinks = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Ask Question",
      href: "/forum/create",
    },
    {
      text: "Browse Threads",
      href: "/forum",
    },
  ];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b supports-backdrop-blur:bg-background/60 border-muted backdrop-blur">
      <div className="container flex items-center h-14">
        <div className="flex mr-4">
          <a className="text-xl flex items-center mr-6 space-x-2 font-semibold text-blue-800" href="/">
            zenith.
          </a>
          <nav className="items-center hidden space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.text.toLocaleLowerCase()}
                className="text-lg transition-colors hover:text-foreground text-foreground/80"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end flex-1 gap-3">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <Button className="text-white">Sign In</Button>
            </SignInButton>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="-order-1 bg-blue-200">
            <Button
              className="mr-3 md:hidden"
              variant="outline"
              size="icon"
              aria-label="Open Menu"
              onClick={handleMenuClick}
            >
              <MenuIcon className="w-6 h-6 text-black" />
            </Button>
          </SheetTrigger>
          <MobileNav />
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;