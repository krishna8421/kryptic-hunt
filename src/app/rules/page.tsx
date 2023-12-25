import RulesList from "./rules-list";

export const metadata = {
  title: "Kryptic Hunt | Guide",
  description: "Guide for Kryptic Hunt",
};

const RulesPage = () => {
  return (
    <div className=" bg-red m-auto my-20 flex flex-col gap-12 px-4 md:max-w-2xl">
      <h1 className="pl-4 text-4xl font-semibold">Guide</h1>
      <RulesList />
    </div>
  );
};

export default RulesPage;
