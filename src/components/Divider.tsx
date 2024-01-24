type ColorShadeOptions = "100" | "200" | "300";
interface DividerProps {
  variant?: ColorShadeOptions;
}

const Divider = (props: DividerProps) => {
  const { variant = "300" } = props;

  return <div className={`h-[1px] border-t-2 border-gray-${variant}`}></div>;
};

export default Divider;
