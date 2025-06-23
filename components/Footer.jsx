"use client";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t mt-12 bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-center items-center text-sm text-center">
        <p>
          &copy; {year} <strong>SmartMock</strong>. All rights reserved by Daksh Saini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
