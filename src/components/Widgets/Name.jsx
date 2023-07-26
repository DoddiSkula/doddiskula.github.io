import { Card } from "components/Card";

export const NameWidget = ({ emoji, onHover }) => {
  return (
    <Card onMouseOver={onHover}>
      <div className="group">
        <div className="transition-all bg-neutral-800 group-hover:bg-neutral-700 p-2 rounded-full duration-500 w-32 cursor-pointer group-hover:scale-105 mb-5">
          <img src={emoji} width={"100%"} alt="avatar" />
        </div>
        <h1 className="transition-all font-semibold text-gray-800 dark:text-gray-100 text-5xl whitespace-pre-wrap">
          Þórður Skúlason
        </h1>
      </div>
    </Card>
  );
};
