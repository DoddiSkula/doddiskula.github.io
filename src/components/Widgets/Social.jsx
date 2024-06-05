import { Card } from "components/Card";

export const SocialWidget = ({ icon, url, onHover }) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <Card onMouseOver={onHover}>
        <div
          className={`p-10 flex justify-center items-center text-gray-800 dark:text-neutral-500 text-5xl hover:text-blue-600 dark:hover:text-teal-400 transition-all duration-500`}
        >
          {icon}
        </div>
      </Card>
    </a>
  );
};
