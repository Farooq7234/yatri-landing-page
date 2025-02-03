import { CircleUserIcon, Download } from "lucide-react";
import Image from "next/image";

const header = () => {
  return (
    <header>
      <div className="header-left">
        <Image src={"/logo.jpg"} width={130} height={50} alt="logo" />
      </div>
      <div className="header-middle">
        <Image src={"/phoneNumber.png"} width={200} height={70} alt="logo" />
      </div>
      <div className="header-right">
        <Download />
        <CircleUserIcon />
      </div>
    </header>
  );
};

export default header;
