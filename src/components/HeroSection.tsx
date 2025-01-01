import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import heroImg from "../assets/heroImg.svg";
import playstore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-end gap-4"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="w-[18rem] mt-4 sm:w-[24rem]  text-center">
        <h1 className="text-[2.5rem] secondaryFont">
          Welcome to <span className="text-red-500">Homy</span>
        </h1>
        <p className="text-lg">Experience luxury Home Chef Services</p>
        <p className="text-lg text-red-500 secondaryFont">
          Now Serving in Delhi NCR
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-between">
        <Button
          variant="default"
          className="w-[12rem] bg-zinc-900 text-white hover:bg-zinc-800 rounded-full px-6"
          onClick={() => {
            navigate("/plans");
          }}
        >
          Explore Plans
        </Button>
        <Button
          variant="default"
          className="w-[12rem] bg-white text-black border border-black hover:bg-zinc-100 rounded-full px-6"
          onClick={() => {
            window.location.href =
              "https://play.google.com/store/apps/details?id=etsd.tdfcx.agh&pcampaignid=web_share";
          }}
        >
          Download App
        </Button>
      </div>
      <div className="h-2/5 flex items-end justify-end w-full p-6 sm:p-16">
        <div className="space-y-4">
          <Link to="https://play.google.com/store/apps/details?id=etsd.tdfcx.agh&pcampaignid=web_share" className="block">
            <img
              src={playstore}
              alt="Get it on Google Play"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
          </Link>
          <Link to="#" className="block">
            <img
              src={appStore}
              alt="Download on the App Store"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
