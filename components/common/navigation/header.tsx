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
    return togglePopup();
    if (!window.ethereum) {
      return togglePopup();
    }

    await setFirstValidConnector(["MetaMask"]);
  }, [setFirstValidConnector]);

  const disconnectWallet = useCallback(async () => {
    await unsetConnector();
  }, [unsetConnector]);

  if (!active) {
    return (
      <div className="w-full p-10 bg-cyan-700 flex flex-row justify-between align-middle ">
        <h1 className="text-4xl font-bold text-white">
          {envVariables.DOMAIN_NAME}
        </h1>
        <Navigation />

        <div className="w-56 h-10  rounded-lg flex flex-row justify-center items-center">
          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
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
      </div>
    );
  }

  return (
    <div className="w-full p-10 bg-cyan-700 flex flex-row justify-between align-middle ">
      <h1 className="text-4xl font-bold text-white">
        {envVariables.DOMAIN_NAME}
      </h1>
      <Navigation />
      <div className="w-56 h-10  rounded-lg flex flex-row justify-center items-center">
        <div className="flex flex-row justify-between align-middle items-center">
          {account && (
            <div className="flex flex-row justify-between align-middle items-center">
              <div className="flex flex-row justify-between align-middle items-center">
                <img
                  src="/images/metamask.svg"
                  alt="metamask"
                  className="w-6 h-6"
                />
                <p className="text-sm font-bold text-gray-700 pl-2 mr-10">
                  {shortenAddress(account)}
                </p>
              </div>
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
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
