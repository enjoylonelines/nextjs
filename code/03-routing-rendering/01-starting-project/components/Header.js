import Link from "next/link";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">news</NavLink>
          </li>
          <li>
            <NavLink href="/archives">Archives</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
