import React from "react";

type SidePopupProps = {
  popupData: {
    title: string;
    description: string;
    button: string;
    image: string;
    timeout: number;
    action: () => void;
  };
  togglePopup: () => void;
};

const SidePopup = (props: SidePopupProps) => {
  const [showPopup, setShowPopup] = React.useState(false);

  const [timer, setTimer] = React.useState(props.popupData.timeout);
  React.useEffect(() => {
    setShowPopup(true);
    const interval = setInterval(() => {
      if (timer <= 0) {
        clearInterval(interval);
        setShowPopup(false);
        closePopup();
      } else {
        setTimer(timer - 1);
      }
    }, timer / 1000);

    const closePopup = () => {
      setShowPopup(false);
      setTimeout(() => {
        props.togglePopup();
      }, 500);
    };
    return () => clearInterval(interval);
  }, [timer]);

  //if not showPopup, togglePopup, but wait for animation to finish

  return (
    <div
      className={`absolute top-32 right-[1px]  pt-8 pr-6 pl-4 w-60  h-32 bg-cyan-500 border-2 z-50 transform transition-all duration-500  rounded-t-lg rounded-b-lg ${
        showPopup ? " translate-x-0  " : " translate-x-full "
      } `}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <div
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={() => {
            setShowPopup(false);
            props.togglePopup();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-base font-bold text-white">
          {props.popupData.title}
        </h1>
        <p className="text-sm text-gray-500 text-center">
          {props.popupData.description}
        </p>
      </div>
    </div>
  );
};

export default SidePopup;
