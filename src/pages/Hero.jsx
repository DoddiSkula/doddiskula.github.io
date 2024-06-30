import { FaLinkedin, FaGithub, FaDribbble, FaEnvelope } from "react-icons/fa";
import MemojiSmile from "assets/smile.png";
import MemojiWink from "assets/wink.png";
import MemojiThumbsup from "assets/thumbsup.png";
import MemojiLaptop from "assets/laptop.png";
import { useState } from "react";
import { NameWidget } from "components/Widgets/Name";
import { SocialWidget } from "components/Widgets/Social";
import { Projects } from "./Projects";

export const Hero = () => {
  const [memoji, setMemoji] = useState(MemojiSmile);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <div className="md:row-span-3">
          <NameWidget emoji={memoji} />
        </div>
        <div className="flex gap-5">
          <SocialWidget
            icon={<FaLinkedin className="size-5" />}
            url={
              "https://www.linkedin.com/in/%C3%BE%C3%B3r%C3%B0ur-sk%C3%BAlason/"
            }
            onHover={() => setMemoji(MemojiThumbsup)}
          />
          <SocialWidget
            icon={<FaGithub className="size-5" />}
            url={"https://github.com/DoddiSkula"}
            onHover={() => setMemoji(MemojiLaptop)}
          />
          <SocialWidget
            icon={<FaDribbble className="size-5" />}
            url={"https://dribbble.com/ThordurS"}
            onHover={() => setMemoji(MemojiWink)}
          />
          <SocialWidget
            icon={<FaEnvelope className="size-5" />}
            url={"mailto: doddiskula@gmail.com"}
            onHover={() => setMemoji(MemojiSmile)}
          />
        </div>
        <div className="w-full border-b dark:border-neutral-800 rounded-full my-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
        <Projects />
      </div>
    </div>
  );
};
