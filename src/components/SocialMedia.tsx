// import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
// import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";
// import { ReactComponent as TelegramLogo } from "../../assets/logo-telegram.svg";
import { Github, Instagram, Linkedin } from "lucide-react";

export const SocialMedia = () => {
  return (
    <ul className="flex space-x-6">
      <li>
        <a href="https://www.linkedin.com/in/riyadh11/">
          <Linkedin className="text-white" size={32} />
        </a>
      </li>
      <li>
        <a href="https://github.com/riyadhfirdausahmad">
          <Github className="text-white" size={32} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/riyadh_11/">
          <Instagram className="text-white" size={32} />
        </a>
      </li>
    </ul>
  );
};
