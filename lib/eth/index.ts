export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

// export const isMobile = () => {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//     navigator.userAgent
//   );
// };
