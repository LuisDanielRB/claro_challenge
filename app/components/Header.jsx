import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex bg-black justify-between items-center border-b-4 border-red-500 fixed top-0 w-full">
      <div className="ml-0 md:ml-14">
        <Image src={"/img/logo-sochi.png"} height={80} width={140} alt="" />
      </div>
      <div className="ml-0 md:mr-14">
        <Image
          src={"/img/logo-claro-sports.png"}
          height={80}
          width={140}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
