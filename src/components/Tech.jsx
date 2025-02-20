// import React from "react";
// import { motion } from "framer-motion";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

// import { styles } from "../styles";
// const Tech = () => {
//   return (
//     <>
//      <motion.div variants={textVariant()}>
//         <h2 className={styles.sectionHeadText}>Skills</h2>
//       </motion.div>
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default SectionWrapper(Tech, "");
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { FaAws } from "react-icons/fa"
import { FaCode } from "react-icons/fa";

// Import icons
import { 
  DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3, DiMysql, 
  DiGit, DiReact, DiDocker, DiJenkins, DiLinux, DiGithub, DiMongodb
} from "react-icons/di";

import { 
  SiSpringboot, SiDjango, SiFlask, SiPostman,
   SiElasticsearch,SiFirebase, SiFastapi, SiGrafana,
    SiKubernetes,SiJira, SiJunit5, SiEclipseide, SiGerrit
}from "react-icons/si";

import { VscTerminalBash } from "react-icons/vsc";
import { textVariant } from "../utils/motion";
import { fadeIn } from "../utils/motion";
// import React from "react";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { styles } from "../styles";

// // Import icons
// import { 
//   DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3, DiMysql, 
//   DiGit, DiReact, DiDocker, DiJenkins, DiLinux, DiGithub, DiMongodb
// } from "react-icons/di";
// import { 
//   SiSpringboot, SiDjango, SiFlask, SiPostman, SiElasticsearch,
//   SiFirebase, SiFastapi, SiGrafana, SiKubernetes, SiAmazonaws,
//   SiJira, SiJunit5, SiEclipseide, SiVisualstudiocode, SiGerrit
// } from "react-icons/si";
// import { VscTerminalBash } from "react-icons/vsc";

const Tech = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: DiPython, color: "#3776AB" },
        { name: "Java", icon: DiJava, color: "#007396" },
        { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
        { name: "HTML5", icon: DiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: DiCss3, color: "#1572B6" },
        { name: "SQL", icon: DiMysql, color: "#4479A1" },
        { name: "Bash", icon: VscTerminalBash, color: "#4EAA25" },
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "VS Code", icon: FaCode, color: "#007ACC" },
        { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
        { name: "MySQL", icon: DiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
        { name: "ElasticDB", icon: SiElasticsearch, color: "#005571" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "FastAPI", icon: SiFastapi, color: "#009688" },
        { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React.js", icon: DiReact, color: "#61DAFB" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "Flask", icon: SiFlask, color: "#000000" },
        { name: "REST APIs", icon: SiPostman, color: "#FF6C37" },
        { name: "JUnit", icon: SiJunit5, color: "#25A162" },
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: DiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "AWS", icon: FaAws, color: "#232F3E" },
        { name: "Jenkins", icon: DiJenkins, color: "#D24939" },
        { name: "Git", icon: DiGit, color: "#F05032" },
        { name: "GitHub", icon: DiGithub, color: "#181717" },
        { name: "Linux", icon: DiLinux, color: "#FCC624" },
        { name: "Jira", icon: SiJira, color: "#0052CC" },
        { name: "Gerrit", icon: SiGerrit, color: "#EEEEEE" },
      ]
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="mt-10">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12">
            <motion.div
              variants={fadeIn("", "", categoryIndex * 0.1, 1)}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-white-100 mb-4">
                {category.title}
              </h3>
            </motion.div>

            <div className="flex flex-wrap gap-10">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="w-28 h-32 relative" // Increased height to accommodate text
                >
                  <div
                    className="bg-tertiary rounded-xl p-4 flex flex-col items-center justify-center
                    cursor-pointer transition-all duration-300 hover:translate-y-[-5px] h-full"
                    style={{ backgroundColor: skill.color + '15' }}
                  >
                    <skill.icon
                      className="w-12 h-12 mb-2 transition-all duration-300 hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <p className="text-xs text-center font-medium text-white">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");