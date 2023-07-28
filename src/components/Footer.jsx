export const Footer = () => {
  return (
    <div className="w-full p-8">
      <p className="text-gray-500 dark:text-neutral-500 text-center mb-8">
        Thank you for visiting my portfolio, you rock! 🚀
      </p>
      <p className="text-sm text-gray-400 dark:text-neutral-600 text-center">
        Þórður Skúlason &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};
