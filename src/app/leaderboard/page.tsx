import { db } from "@/server/db";
import React from "react";
import dynamic from "next/dynamic";
import TableData from "./table-data";

// const LeaderboardTableNoSSR = dynamic(() => import("./leaderboard-table"), {
//   ssr: false,
// });

export interface ITableData {
  count: number;
  name: string;
  index: number;
}

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

  const data: ITableData[] = [];

  topPlayersUserIds.map(async (userId, index) => {
    const userData = await db.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });

    const count = await db.userSubmission.count({
      where: { userId: userId },
    });

    data.push({
      count,
      name: userData?.name ?? "Unknown",
      index: index + 1,
    });
  });

  return (
    <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12 px-4">
      <h1 className="pl-4 text-4xl font-semibold">Leaderboard</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* <table className="w-full text-left text-sm text-gray-400">
          <thead className="bg-zinc-800 text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-4 text-center md:px-6">
                Name
              </th>
              <th scope="col" className="px-2 py-3 text-center md:px-6">
                Total Submissions
              </th>
            </tr>
          </thead>
          <LeaderboardTableNoSSR topPlayersUserIds={topPlayersUserIds} />
        </table> */}
        <TableData data={data} />
      </div>
    </div>
  );
};

export default LeaderBoardPage;
