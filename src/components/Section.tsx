interface SectionProps {
    title: string;
    children: React.ReactNode
}
const Section = (props: SectionProps) => {
    const {children, title} = props

  return (
    <div className="flex flex-col gap-2 py-2">
      <h2 className="font-bold text-2xl">{title}</h2>
      {children}
    </div>
  )
};

export default Section;
