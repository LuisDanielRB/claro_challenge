import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-between p-6 md:px-20 bg-black text-white items-center">
      <p className="text-sm">Aviso de privacidad / Contacto</p>
      <Image
        src={"/img/logo-sochi.png"}
        height={80}
        width={140}
        alt=""
        className="mr-32 w-[100px] h-[40px]"
      />
      <div className="flex gap-2">
        <Image
          src="/img/twitter.png"
          alt="twitter logo"
          width={20}
          height={20}
          className="bg-white rounded-md"
        />
        <Image
          src="/img/facebook.png"
          alt="twitter logo"
          width={20}
          height={20}
          className="bg-white rounded-md "
        />
        <Image
          src="/img/youtube.png"
          alt="twitter logo"
          width={20}
          height={20}
          className="bg-white rounded-md"
        />
      </div>
    </footer>
  );
};

export default Footer;
