interface Position {
  title: string;
  startDate: string | Date;
  endDate: string | Date | undefined;
  achievements: string[];
}

export interface ExperienceSectipnProps {
  companyName: string;
  location: string;
  link?: string;
  positions: Position[];
}
const ExperienceSection = (props: ExperienceSectipnProps) => {
  const { positions, link, companyName, location } = props;

  const getDate = (date: string | Date) => {
    const tempDate = new Date(date).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    return tempDate;
  };
  return (
    <div>
      <div className="flex gap-4 items-baseline">
        <h3 className="text-2xl font-bold text-gray-600 underline">
          {link ? (
            <a target="_blank" href={link}>
              {companyName}
            </a>
          ) : (
            companyName
          )}
        </h3>
        <span className="text-sm text-gray-500">({location})</span>
      </div>
      <div className="pl-2 pt-2">
        {positions.map((position, index) => (
          <>
            <div key={index}>
              <span className="font-extrabold text-2xl text-blue-800">
                {position.title}
              </span>
              |{" "}
              <span className="font-bold">
                {`${getDate(position.startDate)} - ${
                  position?.endDate && getDate(position.endDate)
                }`}
              </span>
            </div>
            <ul className="flex flex-col gap-3 my-2">
              {position.achievements.map((achievement) => (
                <li className="flex gap-2 items-baseline">
                  <span className="">*</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
