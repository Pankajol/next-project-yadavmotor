'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active } item="Home">
         
        </MenuItem>
        </Link>
        <Link href={"/services"}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/gearBox-repairing">GearBox Repairing</HoveredLink>
            <HoveredLink href="/engine-repairing">Engine Repairing </HoveredLink>
            <HoveredLink href="/body-reoairing">Body  Repairing</HoveredLink>
            <HoveredLink href="/clutch-plate">Clutch Plate</HoveredLink>
            <HoveredLink href="/pressure-plate">Pressure Plate</HoveredLink>

          </div>
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active } item="Contact">
         
         </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar