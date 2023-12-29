import { db } from "@/server/db";
import React from "react";
import TableData from "./table-data";

export interface ITableData {
  count: number;
  name: string;
  index: number;
}

const LeaderBoardPage = async () => {
  const topPlayers = await db.user.groupBy({
    by: ["id"],
    _count: true,
    _min: {
      currentQuestionSequence: true,
    },
    orderBy: [
      {
        _min: {
          currentQuestionSequence: "desc",
        },
      },
    ],
    take: 10,
  });

  const topPlayersUserIds = topPlayers.map((player) => player.id);

  const data: ITableData[] = [];

  for (let index = 0; index < topPlayersUserIds.length; index++) {
    const userId = topPlayersUserIds[index];
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
  }

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