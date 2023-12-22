import { db } from "@/server/db";
import React from "react";

import dynamic from "next/dynamic";

const LeaderboardTableNoSSR = dynamic(() => import("./leaderboard-table"), {
  ssr: false,
});

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
          submissionTime: "desc",
        },
      },
    ],
    take: 10,
  });

  const topPlayersUserIds = topPlayers.map((player) => player.userId);

  return (
    <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12">
      <h1 className="pl-4 text-4xl font-semibold">Leaderboard</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4 text-center">
                Name
              </th>
              {/* <th scope="col" className="px-6 py-3 text-center">
                Roll
              </th> */}
              <th scope="col" className="px-6 py-3 text-center">
                Total Submissions
              </th>
            </tr>
          </thead>
          <LeaderboardTableNoSSR topPlayersUserIds={topPlayersUserIds} />
        </table>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
