import { Card } from "components/Card";

export const SocialWidget = ({ icon, url, onHover }) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <Card onMouseOver={onHover}>
        <div className="p-10 flex justify-center items-center text-gray-400 text-5xl hover:text-indigo-500 dark:text-neutral-600 dark:hover:text-indigo-400 transition-all">
          {icon}
        </div>
      </Card>
    </a>
  );
};
