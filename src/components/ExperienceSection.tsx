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
    <div className="py-4">
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
      <div>
        {positions.map((position, index) => (
          <div className="my-2">
            <div className="flex gap-3 items-baseline">
              <div className="w-[14px] h-[14px] bg-gray-400 rounded-full"></div>
              <div className="font-bold flex items-center text-center text-2xl text-blue-900">
                {position.title}
              </div>
              <div key={index} className="flex items-center gap-2">
                {` | `}
                <p className="text-gray-500 text-base">
                  {`${getDate(position.startDate)} - ${
                    position?.endDate && getDate(position.endDate)
                  }`}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {positions.length > 1 && positions.length - 1 !== index && (
                <div className="bg-gray-200 w-2 mx-[3px] rounded-xl h-auto"></div>
              )}
              <ul className="flex flex-col gap-3 py-2 mx-4">
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
    </div>
  );
};

export default ExperienceSection;
