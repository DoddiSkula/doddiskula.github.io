export const SocialWidget = ({ icon, url, onHover }) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <div
        onMouseOver={onHover}
        className={
          "flex justify-center items-center text-gray-500 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-all duration-500"
        }
      >
        {icon}
      </div>
    </a>
  );
};
