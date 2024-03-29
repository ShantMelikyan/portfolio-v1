import React from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import { Reveal } from "./utils/Reveal";

const languages = [
  { language: "HTML" },
  { language: "CSS" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "C/C++" },
  { language: "Python" },
  { language: "PHP" },
];
const libraries = [
  { library: "React" },
  { library: "Next.js" },
  { library: "TailwindCSS" },
  { library: "jQuery" },
];
const tools = [
  { tool: "Git" },
  { tool: "Figma" },
  { tool: "VS Code" },
  { tool: "WordPress" },
  { tool: "Shopify" },
  { tool: "Vercel" },
  { tool: "Netlify" },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-4">
      <div className="w-full min-h-full p-4">
        <div className="max-w-3xl m-auto md:grid grid-cols-3 gap-8 py-16">
          <div className="col-span-2 p-4">
            <Reveal>
              <div>
                <h2 className="pb-4">About Me</h2>
                <p>
                  Hi there, my name is Shant and I am a highly motivated and
                  ambitious Software Developer based in Los Angeles, CA.
                </p>
                <br />
                <p>
                  I graduated from California State University, Northridge in
                  2021 with a BS in Computer Science. Since then, I have been
                  passionately immersed in the field putting my skills to work
                  and learning more every day.
                </p>
                <br />
                <p>
                  I specialize in front-end web development, creating
                  responsive, accessible websites that prioritize the user
                  experience. When I&#39;m not at the computer, you will find me
                  catching waves or taking pictures.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="p-4 md:pt-12 w-full h-auto">
              <div className="md:pt-16">
                <Image
                  className="rounded-full mx-auto "
                  width={300}
                  height={300}
                  src={profilePic}
                  alt="profilePic"
                  sizes="(min-width: 400px) 300px, 80vw"
                ></Image>
              </div>
            </div>
          </Reveal>

          <div className="p-4 col-span-3">
            <div>
              <Reveal>
                <div>
                  <h2 className="py-4">Skills</h2>
                  <h3>Languages:</h3>

                  <div className="flex flex-wrap flex-row  justify-start pb-6">
                    {languages.map((item, idx) => {
                      return (
                        <p
                          key={idx}
                          className="bg-gradient-to-r dark:from-[#675f68] dark:to-[#53454d] bg-[#ece6cb] shadow px-4 py-1 mr-2 mt-2 rounded-full"
                        >
                          {item.language}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <h3>Libraries & Frameworks:</h3>

                  <div className="flex flex-wrap flex-row justify-start pb-6">
                    {libraries.map((item, idx) => {
                      return (
                        <p
                          key={idx}
                          className="bg-gradient-to-r dark:from-[#675f68] dark:to-[#53454d] bg-[#ece6cb] shadow px-4 py-1 mr-2 mt-2 rounded-full"
                        >
                          {item.library}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <h3>Tools & Platforms:</h3>

                  <div className="flex flex-wrap flex-row justify-start pb-6">
                    {tools.map((item, idx) => {
                      return (
                        <p
                          key={idx}
                          className="bg-gradient-to-r dark:from-[#675f68] dark:to-[#53454d] bg-[#ece6cb] shadow px-4 py-1 mr-2 mt-2 rounded-full"
                        >
                          {item.tool}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
