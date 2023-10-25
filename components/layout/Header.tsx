"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
  {
    name: "خانه",
    path: "/",
  },
  {
    name: "باکس",
    path: "/box",
  },
  {
    name: "فندک",
    path: "/light",
  },
  {
    name: "فلاسک",
    path: "/flask",
  },
  {
    name: "پاد",
    path: "/pod",
  },
  {
    name: "موزیکال",
    path: "/musical",
  },
  {
    name: "ادکلن",
    path: "/perfume",
  },
  {
    name: "عروسک",
    path: "/toy",
  },
  {
    name: "ماگ",
    path: "/mug",
  },
];
// const NavItems1 = [
//   {
//     name: "Mr",
//     path: "/",
//   },
//   {
//     name: "box",
//     path: "/box",
//   },
//   {
//     name: "light",
//     path: "/light",
//   },
//   {
//     name: "flask",
//     path: "/flask",
//   },
//   {
//     name: "pod",
//     path: "/pod",
//   },
//   {
//     name: "musical",
//     path: "/musical",
//   },
//   {
//     name: "perfume",
//     path: "/perfume",
//   },
//   {
//     name: "toy",
//     path: "/toy",
//   },
//   {
//     name: "mug",
//     path: "/mug",
//   },
// ];

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    // replace border with shadow-FIX
    <header className="header w-full sticky top-0 z-10  bg-white mt-auto">
      <nav className="w-full">
        <ul
          className="flex
        flex-row-reverse max-w-full gap-2 overflow-scroll pl-14 py-2"
        >
          {NavItems.map((item) => (
            <li
              key={item.path}
              className={`px-5 linkItem py-3 border rounded-md ${
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
