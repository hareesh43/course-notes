import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <Image src="/logo.png" height={90} width={128} ></Image> */}
        <h1>Course Material</h1>
      </div>

      <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;
