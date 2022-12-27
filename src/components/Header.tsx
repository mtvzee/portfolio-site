import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0  h-24 z-10 bg-white border-t-8 border-t-primary">
      <div className="w-[90%] h-24 mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="border border-black p-2 pr-2.5 text-2xl font-Permanent"
        >
          MT
        </Link>
        <ul className="flex h-full space-x-4">
          <li className="leading-[88px]">
            <Link to="/about" className="block">
              About
            </Link>
          </li>
          <li>
            <a
              href="mailto:jb.matsutani@gmail.com"
              className="flex items-center space-x-1 leading-[88px]"
            >
              <FiMail className="text-c-light" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
