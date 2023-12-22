import RulesList from "./rules-list";

export const metadata = {
  title: "Kryptic Hunt | Rules",
  description: "Rules for Kryptic Hunt",
};

const RulesPage = () => {
  return (
    <div className=" bg-red m-auto my-20 flex max-w-2xl flex-col gap-12">
      <h1 className="pl-4 text-4xl font-semibold">Rules</h1>
      <RulesList />
    </div>
  );
};

export default RulesPage;
