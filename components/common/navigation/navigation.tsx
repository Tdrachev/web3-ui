import * as React from "react";
import { EnvVariableContext } from "../../../pages/_app";
import { useWeb3Context } from "web3-react";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  //if currentWidth is mobile, then show mobile navigation
  const [currentWidth, setCurrentWidth] = React.useState(0);

  return (
    <div className="hidden lg:flex  flex-row items-center align-middle justify-self-end ">
      <Link href="/">
        <a className=" text-black md:text-white text-xl pr-5 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-black md:text-white text-xl pr-5 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-black md:text-white text-xl pr-5 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-black md:text-white text-xl pr-5 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-black md:text-white text-xl pr-5 ">Home</a>
      </Link>
    </div>
  );
};

export default Navigation;
