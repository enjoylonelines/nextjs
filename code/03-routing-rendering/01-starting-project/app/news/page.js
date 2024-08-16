import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <ul>
      <li>
        <Link href={"news/1"}>First News Item</Link>
      </li>
      <li>
        <Link href={"news/2"}>First News Item</Link>
      </li>
      <li>
        <Link href={"news/3"}>First News Item</Link>
      </li>
    </ul>
  );
};

export default page;
