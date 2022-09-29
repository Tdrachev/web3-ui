import React, { useCallback, useEffect } from "react";
import { EnvVariableContext } from "../../../pages/_app";
import { useWeb3Context } from "web3-react";
import { shortenAddress } from "../../../lib/eth";
import Navigation from "./navigation";
import NotificationPopup from "../popups/notification";
import { popupConfigs } from "../../../defaults/popupConfigs";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const envVariables = React.useContext(EnvVariableContext);
  const { active, account, setFirstValidConnector, unsetConnector } =
    useWeb3Context();
  const [showNotification, setShowNotification] = React.useState(false);

  const togglePopup = useCallback(() => {
    setShowNotification(!showNotification);
  }, [showNotification]);

  const connectWallet = useCallback(async () => {
    if (!window.ethereum) {
      return togglePopup();
    }

    await setFirstValidConnector(["MetaMask"]);
  }, [setFirstValidConnector]);

  const disconnectWallet = useCallback(async () => {
    await unsetConnector();
  }, [unsetConnector]);

  return (
    <div className="w-full p-5 md:p-10 bg-cyan-700 flex flex-row justify-between align-middle items-center ">
      <h1 className=" text-sm   md:text-2xl xl:text-4xl font-bold text-white">
        {envVariables.domain}
      </h1>
      <Navigation />
      <div className=" rounded-lg flex flex-row justify-center items-center">
        <div className="flex flex-row justify-between align-middle items-center">
          {!account && (
            <div className="  md:w-60 h-12  rounded-lg flex flex-row justify-center items-center">
              <button
                className="px-2 md:py-2  md:px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold  rounded"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
              {showNotification && (
                <NotificationPopup
                  togglePopup={togglePopup}
                  popupData={popupConfigs.metamaskNotInstalled}
                />
              )}
            </div>
          )}

          {account && (
            <div className="flex flex-col md:flex-row justify-between align-middle items-center md:w-60  h-12">
              <div className="flex flex-row justify-between align-middle items-center">
                <img
                  src="/images/metamask.svg"
                  alt="metamask"
                  className="w-6 h-6 mb-2 md:mb-0"
                />
                <p className="text-sm font-bold text-white pl-2 mb-2 md:mb-0 md:mr-10">
                  {shortenAddress(account)}
                </p>
              </div>
              <button
                className="px-2  md:py-2 md:px-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold  rounded"
                onClick={disconnectWallet}
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
