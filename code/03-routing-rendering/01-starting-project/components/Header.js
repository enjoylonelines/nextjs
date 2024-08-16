import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Link href={"/"}>홈</Link>
      <Link href={"/news"}>뉴스</Link>
    </div>
  );
};

export default Header;
