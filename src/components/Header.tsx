import Logo from "./Logo";
import { SocialMedia } from "./SocialMedia";

const Header = () => {
  return (
    <header className="sticky z-50 bg-yellow-500 dark:bg-gray-900 px-7">
      <nav className="flex md:flex-row flex-col items-center space-y-3 justify-between py-3 bg-yellow-500 dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="hidden md:block">
          <SocialMedia />
        </div>
      </nav>
    </header>
  );
};

export default Header;
