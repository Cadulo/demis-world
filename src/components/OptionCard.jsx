
export const OptionCard = ({
  optionid,
  text,
  selection,
  setSelection,
  icon,
}) => {
  const handleChange = () => {
    setSelection(optionid);
  };
  let labelstyle = "";
  if (selection == optionid) {
    labelstyle =
      "cursor-pointer rounded-lg border-2 border-pink-500 p-4 shadow-md mb-4 bg-pink-200";
  } else {
    labelstyle =
      "cursor-pointer bg-white rounded-lg border-2 border-pink-500 p-2 shadow-md mb-4";
  }

  return (
    <>
      <label htmlFor={optionid} className={labelstyle} onClick={handleChange}>
        <input
          type="radio"
          name="option"
          id={optionid}
          onChange={handleChange}
          className="hidden"
        />
        <div className="flex gap-2">
          <div>
            <i className={icon}></i>
          </div>
          <div className="font-semibold ">{text}</div>
        </div>
      </label>
    </>
  );
};
