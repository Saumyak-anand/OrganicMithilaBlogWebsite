const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-4 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} Mithila Naturals. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
