import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experiences from "./experiences";
import { Icon, Tag } from "@chakra-ui/react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Timeline = () => {
  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={index}
          className={
            experience.work
              ? "vertical-timeline-element--work"
              : "vertical-timeline-element--education"
          }
          //   contentStyle={
          //     experience.work
          //       ? { background: "rgb(33, 150, 243)", color: "#fff" }
          //       : { background: "rgb(233, 30, 99)", color: "#fff" }
          //   }
          //   contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date={experience.duration}
          iconStyle={
            experience.work
              ? { background: "rgb(33, 150, 243)", color: "#fff" }
              : { background: "rgb(233, 30, 99)", color: "#fff" }
          }
          icon={
            experience.work ? (
              <Icon as={FontAwesomeIcon} icon={faBriefcase} />
            ) : (
              <Icon as={FontAwesomeIcon} icon={faSchool} />
            )
          }
        >
          {experience.skills &&
            experience.skills.map((skill, index) => (
              <Tag m={[5, 2]} key={index}>
                {skill}
              </Tag>
            ))}
          <h3 className="vertical-timeline-element-title">
            {experience.title}
          </h3>
          <strong>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.work ? experience.company : experience.school} -{" "}
              {experience.location}
            </h4>
          </strong>
          <p>{experience.description}</p>
          <em>
            {!experience.work && experience.major && (
              <strong>Major: {experience.major}</strong>
            )}
          </em>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
