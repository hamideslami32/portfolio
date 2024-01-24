import ContactInformation from "./components/ContactInformation";
import Divider from "./components/Divider";
import ExperienceSection, {
  ExperienceSectipnProps,
} from "./components/ExperienceSection";
import Section from "./components/Section";
// import Summary from './components/Summary'

// import { Margin, usePDF } from "react-to-pdf";

import packageJSON from '../package.json'

const summaryContent = (
  <p>
    Experienced Frontend Engineer adept at streamlining team workflows, driving
    sales growth, and mentoring junior developers. Proficient in React, Vue, and
    Typescript, committed to crafting resilient and efficient code solutions.
    Have an endless passion for learning.
  </p>
);

const skillsContent = (
  <p>
    React, Node.js, Vue, Typescript, Javascript ES6+, HTML5, CSS3, Sass,
    Webpack, Nextjs, Vite, Vitest, React testing library, Jest, CI/CD, Docker,
    Tailwind, MySQL, etc.
  </p>
);

const experienceData: ExperienceSectipnProps[] = [
  {
    companyName: "Risklick",
    location: "Bern, Switzerland | remote",
    link: "https://risklick.ch",
    positions: [
      {
        title: "Frontend Team Lead",
        startDate: "2022/08/01",
        endDate: "2023/10/01",
        achievements: [
          "Coach a team of three front-end developers, ensuring their job satisfaction.",
          "Improved work efficiency by approximately 10% through the creation of Design System Components.",
          "Established CI/CD pipelines for staging environments using GitHub Actions and Gitlab CI/CD.",
          "Refactored a product using Vite, Typescript, and React.",
        ],
      },
    ],
  },
  {
    location: "Tehran, Iran",
    link: "https://3click.com",
    companyName: "3click",
    positions: [
      {
        title: "Frontend Team Lead",
        startDate: "2021/05/01",
        endDate: "2022/07/01",
        achievements: [
          "Led a team of 8 front-end developers",
          "Achieved a 10X increase in flight ticket sales in two years.",
          "Created the CRS admin dashboard with 150+ report pages including tables and charts.",
          "Maintained high standards through code reviews and best practices.",
          "Managed products with over 1 million monthly visits and 50K+ active users.",
          "Resolved the rough-referral problem in Google Analytics with more than 98% accuracy. (Link)",
        ],
      },
      {
        title: "Frontend Engineer",
        startDate: "2020/11/01",
        endDate: "2021/04/01",
        achievements: [
          "Implemented complex sorting and filtering of 3K+ rows of data on the client side using Web workers.",
          "Documented projects using Storybook.",
        ],
      },
    ],
  },
  {
    companyName: "Apro",
    location: "Tehran, Iran",
    positions: [
      {
        title: "Frontend Developer",
        startDate: "2020/05/01",
        endDate: "2020/10/01",
        achievements: [
          "Developed a B2B product connecting local travel agencies to airlines using Vue, Nuxt, and Vuetify.",
        ],
      },
    ],
  },
  {
    location: "Tehran, Iran",
    companyName: "Chamedoon",
    positions: [
      {
        title: "Frontend Developer",
        startDate: "2019/05/01",
        endDate: "2020/04/01",
        achievements: [
          "Optimized page load speed from 7 to about 3 seconds through image optimization, chunking files, and code splitting.",
          "Integrated Sentry with projects to handle edge cases that caused decreased production bugs by nearly 40%.",
        ],
      },
      {
        title: "Junior Frontend Developer",
        startDate: "2018/05/01",
        endDate: "2019/04/01",
        achievements: [
          "Produced visually appealing components and animations based on UI/UX designs.",
          "Utilized Strapi with GraphQL to streamline content updates.",
        ],
      },
    ],
  },
  {
    location: "Remote/On-Site",
    companyName: "Freelancer",
    positions: [
      {
        title: "Web Developer",
        startDate: "2016/03/01",
        endDate: "2021/12/01",
        achievements: [
          "Developed and maintained multiple projects using Vue, React, Node.",
          "Mentored over 15 junior developers to enhance their skills.",
        ],
      },
      {
        title: "SEO Consultant",
        startDate: "2018/01/01",
        endDate: "2021/12/01",
        achievements: [
          "Optimized SEO for various projects, achieving high Lighthouse scores and top-ranking positions for primary keywords.",
        ],
      },
    ],
  },
];

const experienceContent = (
  <>
    {experienceData.map((item, index) => (
      <div>
        <ExperienceSection key={index} {...item} />
        {experienceData.length !== index + 1 && <Divider variant="200" />}
      </div>
    ))}
  </>
);
const projectsContent = (
  <ul>
    <li className="flex gap-2 items-baseline">
      <span className="">*</span>
      <span>
        <a
          className="underline"
          target="_blank"
          href="https://cafebazaar.ir/app/com.darmankade.userapp?l=en"
        >
          Darmankade
        </a>
        , Created a mobile application using React, Typescript, RTKQuery, and
        Capacitor.js to export APK and PWA with a single codebase.
      </span>
    </li>
  </ul>
);

interface Article {
  title: string;
  link: string;
}

const articlesData: Article[] = [
  {
    title: "Pro Tips for Clean Code in TypeScript with React!",
    link: "https://medium.com/@heslami32/pro-tips-for-clean-code-in-typescript-with-react-a2a0740a247b",
  },
  {
    title: "What is Rogue Referral and how to fix it?",
    link: "https://salt.agency/blog/rogue-referral/",
  },
];

const articlesContent = (
  <ul>
    {articlesData.map((article, index) => (
      <li className="flex gap-2">
        <span className="">*</span>
        <a
          target="_blank"
          key={index}
          href={article.link}
          className="underline"
        >
          <span>{article.title}</span>
        </a>
      </li>
    ))}
  </ul>
);
function App() {
  // const { toPDF, targetRef } = usePDF({
  //   filename: "Hamid Eslami Resume.pdf",
  //   page: { margin: Margin.SMALL },
  // });
  return (
    <div className="relative max-w-cs mx-auto">
      <div
        // ref={targetRef}
        className="min-h-screen py-6 flex flex-col gap-3"
      >
        <ContactInformation />
        <Divider />
        <Section title="Summary">{summaryContent}</Section>
        <Divider />
        <Section title="Skills">{skillsContent}</Section>
        <Divider />
        <Section title="Experiences">{experienceContent}</Section>
        <Divider />
        <Section title="Projects">{projectsContent}</Section>
        <Divider />
        <Section title="Articles">{articlesContent}</Section>
        <Divider />
        <Section title="Education">
          Payame-Noor University | Physics associate degree | 2007 - 2010
        </Section>
        <Divider />
        <Section title="Languages">
          <div className="flex gap-2 items-baseline">
            <span className="font-bold">English:</span>
            <span>Fluent</span>
          </div>
        </Section>
      </div>
      {/* <button
        className="absolute right-0 top-4 p-2 border-blue-200 text-blue-900 hover:bg-blue-600 hover:text-white transition-all border rounded-lg"
        onClick={() => toPDF()}
      >
        Download the resume
      </button> */}
      <div className="text-sm text-center py-2 text-blue-900">Version: {packageJSON.version}</div>
    </div>
  );
}

export default App;
