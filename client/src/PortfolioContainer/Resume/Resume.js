import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import education from "../../assets/Resume/education.svg";
import interests from "../../assets/Resume/interests.svg";
import programming from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import work from "../../assets/Resume/work-history.svg";
import ScrollArea from "react-scrollbar";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-sub-grade">
          <span>{props.grades ? props.grades : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: work },
    { label: "Tools and Experience", logoSrc: programming },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "PHP", ratingPercentage: 85 },
    { skill: "Laravel", ratingPercentage: 85 },
    { skill: "Ruby", ratingPercentage: 85 },
    { skill: "Ruby on Rails", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Javascript", ratingPercentage: 70 },
    { skill: "MYSQL, Postgres", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "Windows and Linux OS", ratingPercentage: 80 },
    { skill: "Github, Gitlab", ratingPercentage: 80 },
    { skill: "VScode", ratingPercentage: 80 },
    { skill: "Django", ratingPercentage: 80 },
    { skill: "Flutter", ratingPercentage: 80 },
    { skill: "Bootstrap, MaterialUI", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Bug Tracker Application using Ruby on Rails",
      duration: { projectDate: "2020" },
      description: "A bug tracking application using Rails as backend",
      subHeading: "Technologies Used: HTML, CSS, Javascript, Ruby on Rails",
    },
    {
      title: "Education Consultancy Website",
      duration: { projectDate: "2020" },
      description: "An education consultancy website for a freelancing client.",
      subHeading: "Technologies Used: HTML, CSS, Javascript, PHP, Laravel",
    },
    ,
    {
      title: "Research publication",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A research paper published on title : 'Deep Learning-Based Methods for Sentiment Analysis on Nepali COVID-19-Related Tweets' working with a team of senior professors",
      subHeading: "Technologies Used: Python, Machine Learning, Web Scrapping",
    },
    {
      title: "Construction Company Website",
      duration: { fromDate: "2020" },
      description: "A construction company website for a freelancing client.",
      subHeading: "Technologies Used: HTML, CSS, Javascript, PHP, Laravel",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <ResumeHeading
          heading={"Oxford Brookes University, UK"}
          subHeading={"MSc. Artificial Intelligence"}
          fromDate={"2022"}
          toDate={"Present"}
        />
        <ResumeHeading
          heading={"Purbanchal University, Nepal"}
          subHeading={"BACHELOR OF INFORMATION TECHNOLOGY"}
          grades={"Overall CGPA: 3.45/4.00"}
          fromDate={"2013"}
          toDate={"2018"}
        />

        <ResumeHeading
          heading={"Higher Secondary Education"}
          subHeading={"Siddhartha College"}
          fromDate={"2011"}
          toDate={"2013"}
        />
        <ResumeHeading
          heading={"High School"}
          subHeading={"Dhruba Tara Residential English Boarding School"}
          fromDate={"1998"}
          toDate={"2010"}
        />
      </ScrollArea>
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <div className="experience-container">
          <ResumeHeading
            heading={"Bajra Technologies, Nepal"}
            subHeading={"Associate Software Engineer"}
            fromDate={"2022, January"}
            toDate={"2022, September"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              - Developing features for the CompareByaaz website using Ruby on
              Rails as a back-end language and HTML, SCSS and JavaScript as a
              front-end language
            </span>
            <br />
            <span className="resume-description-text">
              - Fixing bugs and issues reported by the Quality Assurance (QA)
              team
            </span>
            <br />
            <span className="resume-description-text">
              - Giving feedback on designs prepared by the UX/UI team
            </span>
            <br />
            <span className="resume-description-text">
              - Writing Unit Test cases for the project using RSpec.
              Participating in developing and implementing solutions as required
              by the project Giving feedback on designs prepared by the UX/UI
              team
            </span>
            <br />
            <span className="resume-description-text">
              - Fixing issues with the Staging and Production servers
            </span>
            <br />
          </div>
          <br />
          <br />
          <br />
          <div className="experience-container">
            <ResumeHeading
              heading={"Plutonic Tech, Nepal"}
              subHeading={"Software Developer"}
              fromDate={"2018, January"}
              toDate={"2021, December"}
            />
            <div className="experience-description">
              <span className="resume-description-text">
                - Worked on PHP Laravel Framework as a backend web developer
              </span>
              <br />
              <span className="resume-description-text">
                - Collaborated with highly experienced team to develop
                high-quality web applications and work on developing responsive
                front-end solutions
              </span>
              <br />
              <span className="resume-description-text">
                - Direct interaction with clients for modifying existing and
                adding new features
              </span>
              <br />
              <span className="resume-description-text">
                - Communicated and discussed with senior developers about best
                UI/UX design practice
              </span>
              <br />
              <span className="resume-description-text">
                - Fixing issues with the Staging and Production servers
              </span>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </ScrollArea>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            projectDate={projectsDetails.duration.projectDate}
          />
        ))}
      </ScrollArea>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        horizontal={false}
      >
        <ResumeHeading heading="Volunteering and Social Work" description="" />
        <ResumeHeading heading="Playing Sports" description="" />
        <ResumeHeading heading="Cultural Exchanges" description="" />
        <ResumeHeading heading="Music" description="" />
        <ResumeHeading heading="Traveling" description="" />
      </ScrollArea>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
