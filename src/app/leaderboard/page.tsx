import { db } from "@/server/db";
import React from "react";
import TableData from "./table-data";

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

  // const data: ITableData[] = [];

  // topPlayersUserIds.map(async (userId, index) => {
  //   const userData = await db.user.findUnique({
  //     where: { id: userId },
  //     select: { name: true },
  //   });

    
  //   const count = await db.userSubmission.count({
  //     where: { userId: userId },
  //   });
    
  //   console.log({userData, count})

  //   data.push({
  //     count,
  //     name: userData?.name ?? "Unknown",
  //     index: index + 1,
  //   });
  // });

  const dataPromises = topPlayersUserIds.map(async (userId, index) => {
    const userData = await db.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });

    const count = await db.userSubmission.count({
      where: { userId: userId },
    });

    return {
      count,
      name: userData?.name ?? "Unknown",
      index: index + 1,
    };
  });

  const data: ITableData[] = await Promise.all(dataPromises);

  return (
    <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12 px-4">
      <h1 className="pl-4 text-4xl font-semibold">Leaderboard</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TableData data={data} />
      </div>
    </div>
  );
};

export default LeaderBoardPage;
