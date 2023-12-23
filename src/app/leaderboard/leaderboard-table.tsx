import { db } from "@/server/db";

interface LeaderboardTableProps {
  topPlayersUserIds: string[];
}

export const revalidate = 600

const LeaderboardTable = ({ topPlayersUserIds }: LeaderboardTableProps) => {
  return (
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
          <tr key={index} className="bg-zinc-900">
            <th
              scope="row"
              className="whitespace-nowrap text-center px-6 py-4 font-medium text-white"
            >
              {userData?.name ?? "Unknown"}
            </th>
            <td className="px-6 py-4 text-center">{count}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default LeaderboardTable;
