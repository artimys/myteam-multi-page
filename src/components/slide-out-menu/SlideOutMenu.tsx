"use client";

import { useState } from "react";
import Overlay from "@/components/ui/Overlay";
import MobileNav from "@/components/slide-out-menu/MobileNav";
import IconHamburger from "@/components/svg/IconHamburger";

function SlideOutMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpenMenu((prev) => !prev);
  };

  const closeMenu = (): void => {
    setOpenMenu(false);
  };

  return (
    <>
      <button className="ml-auto md:hidden" onClick={toggleMenu}>
        <IconHamburger />
      </button>

      {openMenu && <Overlay closeMenuHandler={closeMenu} />}

      <MobileNav closeMenuHandler={closeMenu} isOpen={openMenu} />
    </>
  );
}

export default SlideOutMenu;
