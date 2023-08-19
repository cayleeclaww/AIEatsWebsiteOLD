import React from "react"; 
import Link from "next/link"; 
import Logo from "public/images/Autoimmune_Eats_Logo.png"; 
// import Button from "./button";
import './navbar.css'
import Image from "next/image";

const Navbar = () => { return (
<>
<nav className="navbar-container">
    <div className="logo-and-search-container">
    <Link href="/">
        <div className="logo">
            <Image src={Logo} 
            alt="Autoimmune Eats Logo" 
            width={255}
            height={100} />
        </div>  </Link>
        {/* <div className="search"> */}
            {/* ********FIGURE OUT HOW TO ADD USER INPUT*********** Below is placeholder */}
            <form className="search">
            Search: <input type="type"></input></form>
        {/* </div> */}
  
    </div>
    <div className="navigation-links-container">
        <Link href="/bydisease"><div className="menu-item">By Disease</div></Link>
        <Link href="/bysymptom"><div className="menu-item">By Symptom</div></Link>
        <Link href="/foodsensitivities"><div className="menu-item">Food Sensitivities</div></Link>
        <Link href="/about"><div className="menu-item">About</div></Link>
        <Link href="/resources"><div className="menu-item">Resources</div></Link>
    </div>
</nav>



{/* <div className="w-full h-20 bg-emerald-800 sticky top-0">
<div className="container mx-auto px-4 h-full">
<div className="flex justify-between items-center h-full">
<Logo />
<ul className="hidden md:flex gap-x-6 text-white">
<li>
<Link href="/about">
<p>About Us</p> </Link>
</li> <li>
<Link href="/services"> <p>Services</p>
</Link> </li>
<li>
<Link href="/contacts">
<p>Contacts</p> </Link>
</li> </ul>
<Button /> </div>
</div> </div> */}
</>
); };
export default Navbar;