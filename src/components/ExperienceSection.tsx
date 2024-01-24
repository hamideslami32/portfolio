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
    <>
      <div className="flex gap-4 items-baseline">
        <h3 className="text-3xl font-bold text-gray-700">
          {link ? (
            <a target="_blank" className="underline !text-gray-700" href={link}>
              {companyName}
            </a>
          ) : (
            companyName
          )}
        </h3>
        <span className="text-sm text-gray-500">({location})</span>
      </div>
      <div className="ml-2 pt-2">
        {positions.map((position, index) => (
          <div>
            <div className="flex items-baseline gap-3 my-2">
              <div className="w-[14px] h-[14px] bg-gray-400 rounded-full"></div>
              <div key={index}>
                <span className="font-bold text-2xl  text-blue-900 ">{position.title}</span>
                {` | `}
                <span className="text-gray-500">
                  {`${getDate(position.startDate)} - ${
                    position?.endDate && getDate(position.endDate)
                  }`}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {(positions.length > 1 && positions.length - 1 !== index) && (
                <div className="bg-gray-200 w-2 m-1 rounded-xl h-auto"></div>
              )}
              <ul className="flex flex-col gap-3 my-2 mx-6">
                {position.achievements.map((achievement) => (
                  <li className="flex gap-2 items-baseline">
                    <span className="">*</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
