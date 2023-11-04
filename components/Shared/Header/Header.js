import React from "react";
import s from "./Header.module.scss";
import NavList from "./NavList";

export default function Header() {
  return (
    <header className={s["header"]}>
      <div className={`${s["header-wrapper"]} row`}>
        <div className={s["logo-wrapper"]}>
          <div className={s["logo"]}>Logo</div>
        </div>
        <NavList />
      </div>
    </header>
  );
}
