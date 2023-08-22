import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experiences from "./experiences";
import { Icon, Tag, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
          <Text as="h3" fontWeight="bold" textTransform="uppercase" className="vertical-timeline-element-title">
            {experience.title}
          </Text>
            <Text as="h4" textTransform="uppercase"  fontWeight="bold" className="vertical-timeline-element-subtitle">
              {experience.work ? experience.company : experience.school} -{" "}
              {experience.location}
            </Text>
          <UnorderedList>
            {experience.description.map((work, index) => (
                <ListItem listStyleType={!experience.work ? "none" : ""} key={index}>{work}</ListItem>
            ))}
            </UnorderedList>
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
