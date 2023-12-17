"use client";

import Countdown, { CountdownRenderProps } from "react-countdown";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <div>Completed</div>;
  } else {
    return (
      <div className="text-[10rem]">
        <table>
          <tr>
            <td className="w-32 text-center text-7xl">
              {days > 10 ? "" : "0"}
              {days}
            </td>
            <td className="w-32 text-center text-7xl">
              {hours > 10 ? "" : "0"}
              {hours}
            </td>
            <td className="w-32 text-center text-7xl">
              {minutes > 10 ? "" : "0"}
              {minutes}
            </td>
            <td className="w-32 text-center text-7xl">
              {seconds > 10 ? "" : "0"}
              {seconds}
            </td>
          </tr>
          <tr className="text-center text-lg font-semibold">
            <td>Days</td>
            <td>Hours</td>
            <td>Minutes</td>
            <td>Seconds</td>
          </tr>
        </table>
      </div>
    );
  }
};

const QuizPage = () => {
  const date = "28";
  const month = "12";
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Countdown
        key={5}
        date={`2023-${month}-${date}T00:00:00`}
        renderer={renderer}
      />
    </div>
  );
};

// const QuizPage = () => {

//   return (
//     <div className=" text-6xl">
//       <span>Game will start on 26th Dec</span>
//     </div>
//   );
// };

export default QuizPage;
