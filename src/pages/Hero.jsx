import { FaLinkedin, FaGithub, FaDribbble, FaEnvelope } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import MemojiSmile from "assets/smile.png";
import MemojiWink from "assets/wink.png";
import MemojiThumbsup from "assets/thumbsup.png";
import MemojiLaptop from "assets/laptop.png";
import { useState } from "react";
import { NameWidget } from "components/Widgets/Name";
import { SocialWidget } from "components/Widgets/Social";
import { Projects } from "./Projects";
import { LocationWidget } from "components/Widgets/Location";

export const Hero = () => {
  const [memoji, setMemoji] = useState(MemojiSmile);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-rows-auto grid-flow-col gap-6 mb-24">
        <div className="row-span-3">
          <NameWidget emoji={memoji} onHover={() => setMemoji(MemojiSmile)} />
        </div>

        <div className="col-span-2 flex gap-4 h-fit">
          <SocialWidget
            icon={<FaLinkedin />}
            url={
              "https://www.linkedin.com/in/%C3%BE%C3%B3r%C3%B0ur-sk%C3%BAlason/"
            }
            onHover={() => setMemoji(MemojiThumbsup)}
          />
          <SocialWidget
            icon={<FaGithub />}
            url={"https://github.com/DoddiSkula"}
            onHover={() => setMemoji(MemojiLaptop)}
          />
          <SocialWidget
            icon={<FaDribbble />}
            url={"https://dribbble.com/ThordurS"}
            onHover={() => setMemoji(MemojiWink)}
          />
          <SocialWidget
            icon={<FaEnvelope />}
            url={"mailto: doddiskula@gmail.com"}
            mailTo
            onHover={() => setMemoji(MemojiSmile)}
          />
        </div>
        <div className="row-span-2 col-span-2">
          <LocationWidget />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="text-3xl text-gray-400 dark:text-neutral-600">
          <BsGridFill />
        </div>

        <h2 className="text-center text-gray-800 dark:text-neutral-200 font-semibold text-4xl">
          Project Showcase
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Projects />
      </div>
    </div>
  );
};
