import { Card } from "components/Card";

export const SocialWidget = ({ icon, url, onHover }) => {
  return (
    <a
      href={url}
      target={"_blank"}
      rel="noreferrer"
      className="text-gray-400 text-5xl hover:text-indigo-500 dark:text-neutral-600 dark:hover:text-indigo-400 hover:scale-110 transition-all"
    >
      <Card onMouseOver={onHover}>{icon}</Card>
    </a>
  );
};
