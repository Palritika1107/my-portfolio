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

  const IEM = "";

  const handleNit = () => {
    window.open(nit, "_blank");
  };

  const handleNyu = () => {
    window.open(nyu, "_blank");
  };

  return (
    <div name="experience" className="w-full h-auto bg-[#F7F4EC] px-4 lg:px-0">
      <nav className="flex justify-center border-b border-[#B08D57]">
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
              iconStyle={{ background: "#B08D57", color: "#F2EDE4" }}
            >
              🏫
              <h3 className="vertical-timeline-element-title font-bold text-lg">
                Institue Of Engineering & Management,Kolkata
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                BTech Computer Engineering
              </h4>
              <p>GPA: 9.2/10</p>
              <button
                onClick={handleNyu}
                className="border-[#B08D57] border-2 p-1 mt-2 text-[#B08D57] flex items-center text-sm hover:bg-[#B08D57] hover:border-[#B08D57] hover:text-[#F2EDE4]"
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
              iconStyle={{ background: "#B08D57", color: "#F2EDE4" }}
            >
              💻
              <h3 className="vertical-timeline-element-title font-bold text-lg">
                IBM India Systems Development Lab
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold">
                Software Engineer
              </h4>
              <ul className="list-disc ml-6">
                <li className="mb-2">
                  Collaborated with a team on a Proof of Concept (PoC) in which
                  we transformed the front‑end technology of an infrastructure
                  platform from Dojo framework to Carbon UI using React.
                </li>
                <li>
                  Developed an application that facilitates knowledge exchange
                  within a team, employing React & Django technologies.
                </li>
                <li>
                  Developed infrastructure for the QA team by configuring both
                  Connected and Air Gap OpenShift clusters on IBM Z Systems.
                </li>
                <li>
                  Acquired proficiency in Jira, Agile software development and
                  Scrum methodologies.
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
              date="August 2019 "
              contentStyle={{ background: "#F2EDE4" }}
              iconStyle={{ background: "#B08D57", color: "#F2EDE4" }}
              
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">
                Google Developers Group Kolkata
              </h3>
              <ul className="list-disc ml-6">
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
              iconStyle={{ background: "#B08D57", color: "#F2EDE4" }}
             
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg">
                IEM-UEM Kolkata Marathon
              </h3>
              <ul className="list-disc ml-6">
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
