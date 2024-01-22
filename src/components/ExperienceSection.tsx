export interface ExperienceSectipnProps {
  companyName: string;
  location: string;
  title: string;
  startDate: string | Date;
  endDate: string | Date | undefined;
  achievements: string[];
  link?: string
}
const ExperienceSection = (props: ExperienceSectipnProps) => {
  const { companyName, location, title, startDate, endDate, achievements, link } =
    props;

  const getDate = (date: string | Date) => {
    const tempDate = new Date(date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    console.log({ tempDate });
    return tempDate;
  };
  return (
    <div>
      <div className="flex gap-4 items-baseline">
        <h3 className="font-bold text-xl">{
        link ?
            <a className="underline" href={link}>{companyName}</a>
        :
        companyName}</h3>
        <span className="text-sm text-gray-500">({location})</span>
      </div>
      <div>
        <span className="font-bold text-2xl text-blue-800">{title}</span>|{" "}
        <span className="font-bold">
        {`${getDate(startDate)} - ${endDate && getDate(endDate)}`}

        </span>
      </div>
      <ul className="flex flex-col gap-3 my-2">
        {achievements.map((achievement) => (
          <li className="flex gap-2 items-baseline">
            <span className="">🎯</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
