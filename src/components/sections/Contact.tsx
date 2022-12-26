import { FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-9xl tracking-[12px]">Contact</h2>
      <a
        href="mailto:jb.matsutani@gmail.com"
        className="flex items-center space-x-2"
      >
        <FiMail className="w-8 h-8" />
        <span className="text-2xl">jb.matsutani@gmail.com</span>
      </a>
    </div>
  );
};

export default Contact;
