import { FiMail } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0  h-20 z-10">
      <div className="w-[90%] h-20 mx-auto flex items-center justify-between">
        <div>Takuya</div>
        <ul className="flex h-full space-x-4">
          <li className="cursor-pointer leading-[80px]">About</li>
          <li>
            <a
              href="mailto:jb.matsutani@gmail.com"
              className="flex items-center space-x-1 leading-[80px]"
            >
              <FiMail className="" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
