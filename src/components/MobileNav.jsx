import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "./Navbar";

const MobileNav = () => {
  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>zenith.</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-4 py-4 text-black">
        {navLinks.map((link) => (
          <a href={link.href} className="" key={link.text.toLocaleLowerCase()}>
            {link.text}
          </a>
        ))}
      </div>
    </SheetContent>
  );
};

export default MobileNav;