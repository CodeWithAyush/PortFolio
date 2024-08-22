
interface IconItemsIProps {
  icon: any;
  label: string;
  className?: string;
}
const IconItems = ({ icon, label, className }: IconItemsIProps) => {
  // console.log(icon, "LL");

  return (
    <div>
      <div
        className={`sm:w-44 sm:h-44 w-36 h-36 flex justify-center items-center rounded shadow-lg  ${className}`}
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={icon?.src} alt={"icon"} className="sm:w-16 w-10" />
          <div className="sm:text-lg font-bold mx-auto dark:text-white">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconItems;
