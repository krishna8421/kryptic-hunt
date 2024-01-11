import { db } from "@/server/db";
import React from "react";
import TableData from "./table-data";

export interface ITableData {
  count: number;
  name: string;
  rank: number;
}

const LeaderBoardPage = () => {
  const data: ITableData[] = [
    { count: 14, name: 'Priyanshu Kumar', rank: 1 },
    { count: 14, name: 'Suket Kamboj', rank: 2 },
    { count: 14, name: 'Arnav Subudhi', rank: 3 },
    { count: 14, name: 'Shubhangi Dutta', rank: 4 },
    { count: 14, name: 'Dhruv Agarwal', rank: 5 },
    { count: 14, name: 'Shantanu Tripathi', rank: 6 },
    { count: 14, name: 'Ayush Kumar', rank: 7 },
    { count: 13, name: 'Kushagra Agarwal', rank: 8 },
    { count: 13, name: 'Tushit Kumar', rank: 9 },
    { count: 13, name: 'Soham Roy', rank: 10 },
  ];

  return (
    <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12 px-4">
      <h1 className="pl-4 text-center text-4xl font-semibold">Leaderboard</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TableData data={data} />
      </div>
    </div>
  );
};

// const LeaderBoardPage = async () => {
//   const topPlayers = await db.userSubmission.groupBy({
//     by: ["userId"],
//     _count: {
//       submissionTime: true,
//     },
//     _max: {
//       submissionTime: true,
//     },
//     orderBy: [
//       {
//         _count: {
//           submissionTime: "desc",
//         },
//       },
//       {
//         _max: {
//           submissionTime: "asc",
//         },
//       },
//     ],
//     take: 10,
//   });

//   const topPlayersUserIds = topPlayers.map((player) => player.userId);

//   const dataPromises = topPlayersUserIds.map(async (userId, index) => {
//     const userData = await db.user.findUnique({
//       where: { id: userId },
//       select: { name: true },
//     });

//     const count = await db.userSubmission.count({
//       where: { userId: userId },
//     });

//     return {
//       count,
//       name: userData?.name ?? "Unknown",
//       rank: index + 1,
//     };
//   });

//   const data: ITableData[] = await Promise.all(dataPromises);

//   return (
//     <div className=" bg-red m-auto mt-20 flex max-w-2xl flex-col gap-12 px-4">
//       <h1 className="pl-4 text-center text-4xl font-semibold">Leaderboard</h1>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <TableData data={data} />
//       </div>
//     </div>
//   );
// };

export default LeaderBoardPage;
