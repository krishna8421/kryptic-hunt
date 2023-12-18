import { db } from "@/server/db";
import React from "react";
// import LeaderBoardTable from "./leader-board-table";

const LeaderBoardPage = async () => {
  const topPlayers = await db.userSubmission.groupBy({
    by: ["userId"],
    _count: true,
    _min: {
      submissionTime: true,
    },
    orderBy: [
      {
        _count: {
          submissionTime: "asc",
        },
      },
    ],
    take: 10,
  });

  const topPlayersUserIds = topPlayers.map((player) => player.userId);

  return (
    <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12">
      <h1 className="pl-4 text-4xl font-semibold">Leaderboard</h1>
      {/* <LeaderBoardTable topPlayers={topPlayersUserIds} /> */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Submissions
              </th>
            </tr>
          </thead>
          <tbody>
            {topPlayersUserIds.map(async (userId, index) => {
              const userData = await db.user.findUnique({
                where: { id: userId },
                select: { name: true },
              });

              const count = await db.userSubmission.count({
                where: { userId: userId },
              });

              return (
                <tr key={index} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {userData?.name ?? "Unknown"}
                  </th>
                  <td className="px-6 py-4">{count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
