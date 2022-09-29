import * as React from "react";
import FillLoader from "../loaders/fillLoader";
type NotificationPopupProps = {
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

const NotificationPopup = (props: NotificationPopupProps) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 flex flex-col justify-center items-center">
      <div className="w-96 h-96 bg-white rounded-lg flex flex-col justify-center items-center">
        <div className="w-80 h-80 bg-cyan-400 rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-10 flex flex-row justify-end items-center">
            <button
              className="w-10 h-10 flex flex-row justify-center items-center"
              onClick={props.togglePopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            </button>
          </div>
          <img
            src={`/images/${props.popupData.image}`}
            alt="eth"
            className="w-20 h-20"
          />
          <p className="text-2xl font-bold text-gray-700 pt-4">
            {props.popupData.title}
          </p>
          <p className="text-sm font-bold text-gray-700 pt-4">
            {props.popupData.description}
          </p>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-10 mb-5"
            onClick={props.popupData.action}
          >
            {props.popupData.button}
          </button>

          <FillLoader
            time={props.popupData.timeout}
            action={props.togglePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
