import ContactInformation from "./components/ContactInformation";
import Divider from "./components/Divider";
import ExperienceSection, {
  ExperienceSectipnProps,
} from "./components/ExperienceSection";
import Section from "./components/Section";
// import Summary from './components/Summary'

const summaryContent = (
  <p>
    Experienced Front End Engineer with 7+ years in HTML5, CSS3, JavaScript, and
    TypeScript. Pro in React, Vue, Next.js, and Nuxt.js. Led teams at Risklick
    and 3click, boosting efficiency and achieving a 10X sales increase.
    Freelanced on various projects, mentored junior developers, and shared
    insights through publications.
  </p>
);

const skillsContent = (
  <p>
    React, Vue, Typescript, Javascript ES6+, HTML5, Css3, Sass, Webpack, Nextjs,
    Vite, Vitest, React testing library, Jest, CI/CD, Docker, Tailwind
  </p>
);

const experienceData: ExperienceSectipnProps[] = [
  {
    title: "Frontend Team Lead",
    companyName: "Risklick",
    startDate: "2022/08/01",
    endDate: "2023/10/01",
    achievements: [
      "Coach a team of three front-end developers, ensuring their job satisfaction.",
      "Improved work efficiency by approximately 10% through the creation of Design System Components.",
      "Established CI/CD pipelines for staging environments using GitHub Actions and Gitlab CI/CD.",
      "Refactored a product using Vite, Typescript, and React.",
    ],
    location: "Bern, Switzerland | remote",
    link: "https://risklick.ch"
  },
  {
    title: "Frontend Team Lead",
    companyName: "3click",
    startDate: "2021/05/01",
    endDate: "2022/07/01",
    achievements: [
      "Led a team of 8 front-end developers",
      "Achieved a 10X increase in flight ticket sales in two years.",
      "Created the CRS admin dashboard with 150+ report pages including tables and charts.",
      "Maintained high standards through code reviews and best practices.",
      "Managed products with over 1 million monthly visits and 50K+ active users.",
      "Resolved the rough-referral problem in Google Analytics with more than 98% accuracy. (Link)"
    ],
    location: "Tehran, Iran",
    link: "https://3click.com"
  },
];

const experienceContent = (
  <>
    {experienceData.map((item, index) => (
      <div className="my-3">
        <ExperienceSection key={index} {...item} />
      </div>
    ))}
  </>
);
function App() {
  return (
    <div className="max-w-cs min-h-screen mx-auto p-6">
      <ContactInformation />
      <Divider />
      <Section title="Summary">{summaryContent}</Section>
      <Divider />
      <Section title="Skills">{skillsContent}</Section>
      <Divider />
      <Section title="Experiences">{experienceContent}</Section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
