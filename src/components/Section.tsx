interface SectionProps {
    title: string;
    children: React.ReactNode
}
const Section = (props: SectionProps) => {
    const {children, title} = props

  return (
    <div className="flex flex-col gap-2 py-2 text-xl leading-8 text-gray-700">
      <h2 className="font-bold text-3xl text-slate-400 mb-2">{title}</h2>
      {children}
    </div>
  )
};

export default Section;
