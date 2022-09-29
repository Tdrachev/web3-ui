import * as React from "react";
import { EnvVariableContext } from "../../../pages/_app";
import { useWeb3Context } from "web3-react";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className=" flex flex-row justify-between items-center align-middle">
      <Link href="/">
        <a className=" text-white text-xl pr-10 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-white text-xl pr-10 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-white text-xl pr-10 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-white text-xl pr-10 ">Home</a>
      </Link>
      <Link href="/">
        <a className=" text-white text-xl pr-10 ">Home</a>
      </Link>
    </div>
  );
};

export default Navigation;
