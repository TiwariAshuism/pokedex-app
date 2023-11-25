import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <div className="main-container bg-slate-900 border-t-2 border-slate-700 py-5 px-7">
      <div className="flex md:flex-row flex-col items-center space-y-3 max-w-7xl mx-auto justify-between text-white">
        <span className="font-bold">@Copyright | Riyadh Firdaus Ahmad</span>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};
