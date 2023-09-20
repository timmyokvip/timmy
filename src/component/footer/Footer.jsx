"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fcefdc",
        padding: "48px 0",
        textAlign: "center",
      }}
    >
      <div className="text-center">
        <Image src="/LOGO-OKVIP.png" height={56} width={160} alt="Logo" />
        <p
          style={{
            color: "#a2a2a2",
            fontSize: "12px",
            marginTop: "12px",
          }}
        >
          Powered By OKVIP @ 2023. Design by OKVIP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
