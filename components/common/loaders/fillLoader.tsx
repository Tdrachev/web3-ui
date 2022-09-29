import React, { useEffect } from "react";

type FillLoaderProps = {
  time: number;
  action: () => void;
};

const FillLoader = (props: FillLoaderProps) => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        props.action();
      } else {
        setProgress(progress + 1);
      }
    }, props.time / 100);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full h-2 bg-gray-200 rounded-lg ml-2 mr-2 ">
      <div
        className="h-full bg-cyan-500 rounded-lg "
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default FillLoader;
