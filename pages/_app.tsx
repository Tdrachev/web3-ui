import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useState } from "react";
import Web3Provider from "web3-react";
import { Connectors } from "web3-react";

const { InjectedConnector } = Connectors;

const envVariables = {
  domain: process.env.DOMAIN_NAME,
  isMobile: false,
};

const MetaMask = new InjectedConnector({ supportedNetworks: [1, 137, 31337] });
const connectors = { MetaMask };

export const EnvVariableContext = createContext(envVariables);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <EnvVariableContext.Provider value={envVariables}>
        <Component {...pageProps} />
      </EnvVariableContext.Provider>
    </Web3Provider>
  );
}

export default MyApp;
