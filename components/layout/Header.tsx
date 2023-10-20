"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
  {
    name: "Mr",
    path: "/",
  },
  {
    name: "box",
    path: "/box",
  },
  {
    name: "light",
    path: "/light",
  },
  {
    name: "flask",
    path: "/flask",
  },
  {
    name: "pod",
    path: "/pod",
  },
  {
    name: "musical",
    path: "/musical",
  },
  {
    name: "perfume",
    path: "/perfume",
  },
  {
    name: "toy",
    path: "/toy",
  },
  {
    name: "mug",
    path: "/mug",
  },
];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    // replace border with shadow-FIX
    <header className="header w-full sticky top-0 z-10  bg-white mt-auto">
      <nav className="w-full">
        <ul
          className="flex
        flex-row-reverse max-w-full gap-y-2 overflow-scroll pl-12"
        >
          {NavItems.map((item) => (
            <li
              key={item.path}
              className={`px-5 py-3 border-r rounded-md ${
                item.path === pathname ? "active" : ""
              }`}
            >
              <Link href={item.path}>{item.name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
