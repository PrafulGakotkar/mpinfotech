"use client";

// existing imports and code above

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopHeader from "./TopHeader";
import { usePathname } from "next/navigation";
import navMenuData from "@/data/headernav/nav-menus";
import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
import useGlobalContext from "@/hooks/use-context";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import SidebarCart from "./SidebarCart";
import SidebarWishlist from "./SidebarWishlist";
import MobileMenu from "./MobileMenu";
import logoImg from "../../../public/assets/img/logo/Cyber_Space_Technologies_LOGO.c7934d4e.png";

const HeaderOne = () => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const pathName = usePathname();
  const { setOpenCart, setOpenWishlist, toggleSideMenu,  sideMenuOpen } =
    useGlobalContext();
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();

  const [stickyHeader, setStickyHeader] = useState(false);
  

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setStickyHeader(true);
    } else {
      setStickyHeader(false);
    }
  };

  const handleMainMenuItemHover = (itemId: number) => {
    setHoveredMenu(itemId);
    setActiveDropdown( null); // Reset activeDropdown to null
  };
  
  

  const handleSubMenuItemHover = (itemId:number) => {
    setActiveDropdown(itemId);
  };

  const handleSubMenuItemLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header id="header-wrap">
        {pathName !== "/home-2" && <TopHeader />}
        <div
          id="sticky-header"
          className={`main-menu-area ${stickyHeader ? "sticky" : ""}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
                <div className="logo">
                  <Link href="/">
                    <Image src={logoImg} width={200} height={120} alt="flag" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-6 col-4">
                <div className="header-button f-right d-lg-block">
                  <div className="bd-header__right d-flex align-items-center justify-content-end">
                    <div className="bd-action__cart-list">
                      <div className="d-inline-block d-xl-none text-right">
                        <div className="menu-bar">
                          <button className="bars" onClick={toggleSideMenu}>
                            <i className="fas fa-bars"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-menu text-right d-none d-xl-block">
                  <nav id="mobile-menu">
                    <ul>
                      {navMenuData.map((item) => (
                        <li
                          key={item.id}
                          onMouseEnter={() => handleMainMenuItemHover(item.id)}
                        >
                          <Link href={item.link}> {item.label} </Link>
                          {item.hasDropdown && hoveredMenu === item.id && (
                            <ul
                              className="sub-menu text-left"
                              
                              onMouseEnter={() => handleSubMenuItemHover(item.id)}
                              onMouseLeave={handleSubMenuItemLeave}
                            >
                              {item.subMenu &&
                                item.subMenu.map((subItem) => (
                                  <li key={subItem.id}
                                      onMouseEnter={() => handleSubMenuItemHover(subItem.id)}
                                      onMouseLeave={handleSubMenuItemLeave}>
                                    <Link href={subItem.link}>
                                      {subItem.label}
                                    </Link>
                                    {subItem.hasDropdown &&
                                      activeDropdown === subItem.id && (
                                        <ul className="sub-menu1 text-left" >
                                          {subItem.sub_Menu &&
                                            subItem.sub_Menu.map(
                                              (subSubItem) => (
                                                <li key={subSubItem.id}>
                                                  <Link href={subSubItem.link}>
                                                    {subSubItem.label}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                        </ul>
                                      )}
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
        <div
          onClick={toggleSideMenu}
          className={sideMenuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
      <SidebarCart />
      <SidebarWishlist />
    </>
  );
};

export default HeaderOne;



























// // existing imports and code above

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import TopHeader from "./TopHeader";
// import { usePathname } from "next/navigation";
// import navMenuData from "@/data/headernav/nav-menus";
// import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
// import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
// import useGlobalContext from "@/hooks/use-context";
// import {
//   useUniqueProductCount,
//   useUniqueWishlstCount,
// } from "@/hooks/useCartQuantity";
// import SidebarCart from "./SidebarCart";
// import SidebarWishlist from "./SidebarWishlist";
// import MobileMenu from "./MobileMenu";
// import logoImg from "../../../public/assets/img/logo/Cyber_Space_Technologies_LOGO.c7934d4e.png";

// const HeaderOne = () => {
//   const pathName = usePathname();
//   const { setOpenCart, setOpenWishlist, toggleSideMenu, toggleSubMenu, sideMenuOpen } =
//     useGlobalContext();
//   const productQuantity = useUniqueProductCount();
//   const wishlistQuantity = useUniqueWishlstCount();

//   const [stickyHeader, setStickyHeader] = useState(false);
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleScroll = () => {
//     if (window.scrollY > 40) {
//       setStickyHeader(true);
//     } else {
//       setStickyHeader(false);
//     }
//   };

//   return (
//     <>
//       <header id="header-wrap">
//         {pathName !== "/home-2" && <TopHeader />}
//         <div
//           id="sticky-header"
//           className={`main-menu-area ${stickyHeader ? "sticky" : ""}`}
//         >
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
//                 <div className="logo">
//                   <Link href="/">
//                     <Image src={logoImg} width={170} height={100} alt="flag" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-xl-9 col-lg-9 col-md-6 col-4">
//                 <div className="header-button f-right d-lg-block">
//                   <div className="bd-header__right d-flex align-items-center justify-content-end">
//                     <div className="bd-action__cart-list">
//                       <div className="d-inline-block d-xl-none text-right">
//                         <div className="menu-bar">
//                           <button className="bars" onClick={toggleSideMenu}>
//                             <i className="fas fa-bars"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="main-menu text-right d-none d-xl-block">
//                   <nav id="mobile-menu">
//                     <ul>
//                       {navMenuData.map((item) => (
//                         <li
//                           key={item.id}
//                           onMouseEnter={() => setHoveredMenu(item.id)}
//                           onMouseLeave={() => setHoveredMenu(null)}
//                         >
//                           <Link href={item.link}> {item.label} </Link>
//                           {item.hasDropdown && hoveredMenu === item.id && (
//                             <ul
//                               className="sub-menu text-left"
//                             >
//                               {item.subMenu &&
//                                 item.subMenu.map((subItem) => (
//                                   <li key={subItem.id}

//                                     onMouseEnter={() => setHoveredMenu(subItem.id)}
//                                     onMouseLeave={() => setHoveredMenu(null)}>
//                                     <Link href={subItem.link}>
//                                       {subItem.label}
//                                     </Link>
//                                     {subItem.hasDropdown &&
//                                       activeDropdown === subItem.id && (
//                                         <ul className="sub-menu text-left"

//                                           onMouseEnter={() => setActiveDropdown(subItem.id)}
//                                           onMouseLeave={() => setActiveDropdown(null)}>
//                                           {subItem.sub_Menu &&
//                                             subItem.sub_Menu.map(
//                                               (subSubItem) => (
//                                                 <li key={subSubItem.id}>
//                                                   <Link href={subSubItem.link}>
//                                                     {subSubItem.label}
//                                                   </Link>
//                                                 </li>
//                                               )
//                                             )}
//                                         </ul>
//                                       )}
//                                   </li>
//                                 ))}
//                             </ul>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <MobileMenu />
//         <div
//           onClick={toggleSideMenu}
//           className={sideMenuOpen ? "body-overlay show" : "body-overlay"}
//         ></div>
//       </header>
//       <SidebarCart />
//       <SidebarWishlist />
//     </>
//   );
// };

// export default HeaderOne;

































// import React, { useEffect } from "react";
// import Link from "next/link";
// import logoImg from "../../../public/assets/img/logo/cylogo.png"
// import Image from "next/image";
// import TopHeader from "./TopHeader";
// import { usePathname } from "next/navigation";
// import navMenuData from "@/data/headernav/nav-menus";
// import CartIcon from "@/sheardComponent/elements/icons/cart-icon";
// import WishlistIcon from "@/sheardComponent/elements/icons/wishlist-icon";
// import useGlobalContext from "@/hooks/use-context";
// import {
//   useUniqueProductCount,
//   useUniqueWishlstCount,
// } from "@/hooks/useCartQuantity";
// import SidebarCart from "./SidebarCart";
// import SidebarWishlist from "./SidebarWishlist";
// import MobileMenu from "./MobileMenu";
// const HeaderOne = () => {
//   const pathName = usePathname();
//   const { setOpenCart, setOpenWishlist, toggleSideMenu, sideMenuOpen } =
//     useGlobalContext();
//   const productQuantity = useUniqueProductCount();
//   const wishlistQuantity = useUniqueWishlstCount();
//   useEffect(() => {
//     window.addEventListener("scroll", sticky);
//     return () => {
//       window.removeEventListener("scroll", sticky);
//     };
//   });

//   const sticky = () => {
//     const header = document.querySelector(".main-menu-area");
//     const scrollTop = window.scrollY;
//     if (header) {
//       scrollTop >= 40
//         ? header.classList.add("sticky")
//         : header.classList.remove("sticky");
//     }
//   };
//   return (
//     <>
//       <header id="header-wrap">
//         {pathName !== "/home-2" && <TopHeader />}
//         <div id="sticky-header" className="main-menu-area">
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
//                 <div className="logo">
//                   <Link href="/">
//                     <Image
//                       src={logoImg}
//                       width={120}
//                       height={40}
//                       alt="flag"
//                     />
//                   </Link>
//                 </div>
//               </div>
//               <div
//                 id="right-header"
//                 className="col-xl-9 col-lg-9 col-md-6 col-4"
//               >
//                 {/* <div className="header-button f-right d-none d-xl-block">
//                   <Link className="btn" href="/goals">
//                     <span className="btn-text">
//                       Contact Us{" "}
//                       <i className="fas fa-long-arrow-alt-right"></i>
//                     </span>
//                   </Link>
//                 </div> */}
//                 <div className="header-button f-right d-none d-xl-block">
//                   <Link className="btn" href="/contact">
//                     <span className="btn-text">
//                       Consultancy{" "}
//                       <i className="fas fa-long-arrow-alt-right"></i>
//                     </span>
//                   </Link>
//                 </div>
//                 <div className="header-button f-right d-lg-block">
//                   <div className="bd-header__right d-flex align-items-center justify-content-end">
//                      <div className="bd-action__cart-list">
//                       {/* <div className="bd-action__item">
//                         <div className="bd-action__cart">
//                           <div
//                             className="bd-action__cart-icon"
//                             onClick={() => setOpenCart(true)}
//                           >
//                             <span className="bd-cart-mini-btn">
//                               {/* <CartIcon />
//                             </span>
//                             <span className="bd-action__item-number cart-count">
//                               {productQuantity}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="bd-action__item">
//                         <div className="bd-action__wishlist">
//                           <div
//                             className="bd-action__wistlist-icon"
//                             onClick={() => setOpenWishlist(true)}
//                           >
//                             <span className="bd-cart-mini-btn">
//                               <WishlistIcon />
//                             </span>
//                             <span className="bd-action__item-number wishlist-count">
//                               {wishlistQuantity}
//                             </span>
//                           </div>
//                         </div>
//                       </div> */}
//                       <div className="d-inline-block d-xl-none  text-right">
//                         <div className="menu-bar">
//                           <button className="bars" onClick={toggleSideMenu}>
//                             <i className="fas fa-bars"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="main-menu text-right d-none d-xl-block">
//                   <nav id="mobile-menu">
//                     <ul>
//                       {navMenuData.map((item) => (
//                         <li key={item.id}>
//                           <Link href={item.link}> {item.label} </Link>
//                           {item.hasDropdown === true && (
//                             <>
//                               <ul className="sub-menu text-left">
//                                 {item?.subMenu?.map((itm, index) => (
//                                   <li key={index}>
//                                     <Link href={itm.link}> {itm.label} </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <MobileMenu />
//         <div
//           onClick={toggleSideMenu}
//           className={sideMenuOpen ? "body-overlay show" : "body-overlay"}
//         ></div>
//       </header>
//       <SidebarCart />
//       <SidebarWishlist />
//     </>
//   );
// };

// export default HeaderOne;
