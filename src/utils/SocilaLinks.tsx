import Link from "next/link";
import React from "react";

const SocilaLinks = () => {
  return (
    <>
      <Link href="https://www.facebook.com/MRADAR360/">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link href="https://twitter.com/mradar360">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link href="https://www.instagram.com">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link href="https://www.youtube.com">
        <i className="fab fa-youtube"></i>
      </Link>
    </>
  );
};

export default SocilaLinks;
