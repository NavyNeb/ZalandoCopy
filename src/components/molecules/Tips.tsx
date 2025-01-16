import { classNames } from "@/lib/utils";

type Props = {
  variants?: "primary" | "greyed";
  title: string;
  icon: React.ReactNode;
  message?: string;
};

const Tips = ({ icon, title, variants = "primary", message }: Props) => {
  const variantClass = {
    primary: "bg-[#d3f9e9]",
    greyed: "bg-[#efeff0]",
  };
  return (
    <div className={`${variantClass[variants]} p-4`} >
        <span className="sr-only">Tips messages</span>
      <div
        className={classNames(
          `flex flex-row items-center justify-start flex-1 space-x-3`,
        )}
      >
        <div>{icon}</div>
        <p className="text-[0.875rem] text-black font-helveticaRegular text-center">
          {title}
        </p>
      </div>
      { message && <p className="text-[0.875rem] text-black font-helveticaBold underline mt-3" >{message}</p>   }
    </div>
  );
};

export default Tips;
