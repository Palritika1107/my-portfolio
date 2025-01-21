import React from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import TabSelector from "../TabSelector";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Socials from "../Socials";

const Experience = () => {
  const [selectedTab, setSelectedTab] = useTabs(
    ["education", "work experience", "extra curriculars"],
    "work experience"
  );

  const handleNyu = () => {
    window.open(nyu, "_blank");
  };

  return (
    <div name="experience" className="w-full h-auto bg-teal-500 px-4 lg:px-0">
      <nav className="flex justify-center border-b border-yellow-300">
        <TabSelector
          isActive={selectedTab === "education"}
          onClick={() => setSelectedTab("education")}
        >
          Education
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "work experience"}
          onClick={() => setSelectedTab("work experience")}
        >
          Work Experience
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "extra curriculars"}
          onClick={() => setSelectedTab("extra curriculars")}
        >
          Extra Curriculars
        </TabSelector>
      </nav>
      <div className="p-10">
        <TabPanel hidden={selectedTab !== "education"}>
          <VerticalTimeline
            lineColor="#F2EDE4"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2018 - June 2022"
              contentStyle={{ background: "#F2EDE4" }}
              iconStyle={{ background: "#FFD700", color: "#000000" }} // Changed to yellow with black text for contrast
            >
              🏫
              <h3 className="vertical-timeline-element-title font-bold text-lg text-teal-800">
                Institute Of Engineering & Management, Kolkata
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-teal-800">
                BTech Computer Engineering
              </h4>
              <p className="text-teal-800">GPA: 9.2/10</p>
              <button
                onClick={handleNyu}
                className="border-yellow-300 border-2 p-1 mt-2 text-teal-800 flex items-center text-sm hover:bg-yellow-300 hover:border-yellow-300 hover:text-teal-800"
              >
                Download Transcript
              </button>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "work experience"}>
          <VerticalTimeline
            lineColor="#F2EDE4"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="July 2022 - October 2023"
              contentStyle={{ background: "#F2EDE4" }}
              iconStyle={{ background: "#FFD700", color: "#000000" }}
            >
              💻
              <h3 className="vertical-timeline-element-title font-bold text-lg text-teal-800">
                IBM India Systems Development Lab
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-teal-800">
                Software Engineer
              </h4>
              <ul className="list-disc ml-6 text-teal-800">
                <li className="mb-2">
                  Collaborated on a Proof of Concept (PoC) transforming
                  front-end technology.
                </li>
                <li>
                  Developed an application for knowledge exchange using React &
                  Django.
                </li>
                <li>Configured OpenShift clusters on IBM Z Systems for QA.</li>
                <li>
                  Gained proficiency in Jira, Agile development, and Scrum
                  methodologies.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "extra curriculars"}>
          <VerticalTimeline
            lineColor="#F2EDE4"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2019"
              contentStyle={{ background: "#F2EDE4" }}
              iconStyle={{ background: "#FFD700", color: "#000000" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-teal-800">
                Google Developers Group Kolkata
              </h3>
              <ul className="list-disc ml-6 text-teal-800">
                <li className="mb-2">Volunteered in GDG Devfest 2019</li>
                <li className="mb-2">
                  Responsible for smooth entry of attendees
                </li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="December 2019"
              contentStyle={{ background: "#F2EDE4" }}
              iconStyle={{ background: "#FFD700", color: "#000000" }}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-teal-800">
                IEM-UEM Kolkata Marathon
              </h3>
              <ul className="list-disc ml-6 text-teal-800">
                <li className="mb-2">
                  Social Media and Content Head for the year 2019
                </li>
                <li className="mb-2">
                  Responsible for creating engaging content and posts
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
      </div>
    </div>
  );
};

export default Experience;
