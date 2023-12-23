import CompletedSvg from "@/components/completed-svg";

const EmailVerifiedPage = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-12 text-2xl text-gray-300">
      <CompletedSvg />
      <span>Email Verified Successfully ✅</span>
    </div>
  );
};

export default EmailVerifiedPage;
