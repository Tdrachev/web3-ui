export const popupConfigs = {
  metamaskNotInstalled: {
    title: "Metamask not installed",
    description: "Please install Metamask to continue",
    image: "metamask.svg",
    button: "Install Metamask",
    timeout: 3000,
    action: () => {
      window.open("https://metamask.io/download.html", "_blank");
    },
  },
};
