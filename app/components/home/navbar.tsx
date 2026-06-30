import Image from "next/image";
import Logo from "@/public/shrijanshillogo.jpeg"
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 ">
        <h1 className="text-2xl font-bold text-blue-900 flex gap-2 items-center">
        <Image src={Logo} alt="Logo" 
        width={50}
        height={50}
        className="rounded-full"
        /> Shrijanshil Medical Hall
        </h1>

        <div className="hidden gap-6 md:flex">
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#doctors">Doctors</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}