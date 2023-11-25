import LogoImage from "@/assets/logo.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function Logo() {
  return (
    <a href="/" className="">
      <div className="flex items-center w-36 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <img
            src={LogoImage}
            alt="logo"
            width={144}
            height={60}
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </a>
  );
}

export default Logo;
