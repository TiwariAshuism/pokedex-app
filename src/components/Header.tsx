import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky z-50 bg-yellow-500 dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center justify-center py-3 bg-yellow-500 dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
