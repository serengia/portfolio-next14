"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import s from "./NavList.module.scss";

export default function NavList() {
  const pathName = usePathname();
  return (
    <nav>
      <ul className={s["list"]}>
        <li className={s["item"]}>
          <Link
            href={"/"}
            className={
              pathName === "/" ? `${s["link"]} ${s["active-link"]}` : s["link"]
            }
          >
            Home
          </Link>
        </li>
        <li className={s["item"]}>
          <Link
            href={"/about"}
            className={
              pathName === "/about"
                ? `${s["link"]} ${s["active-link"]}`
                : s["link"]
            }
          >
            About
          </Link>
        </li>
        <li className={s["item"]}>
          <Link
            href={"/projects"}
            className={
              pathName.includes("/projects")
                ? `${s["link"]} ${s["active-link"]}`
                : s["link"]
            }
          >
            Projects
          </Link>
        </li>
        <li className={s["item"]}>
          <Link
            href={"/contact"}
            className={
              pathName === "/contact"
                ? `${s["link"]} ${s["active-link"]}`
                : s["link"]
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
