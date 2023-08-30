export const Card = ({optionid, profesion,selection, setSelection}) => {
  const handleChange = () => {
    setSelection(optionid)
    console.log("selection "+ profesion)
  }
  let labelstyle=""
  if (selection==optionid){
    labelstyle = "border border-indigo-200 px-4 py-2 w-32 cursor-pointer rounded hover:border-indigo-600 bg-indigo-200"
  }else {
    labelstyle = "border border-indigo-200 px-4 py-2 w-32 cursor-pointer rounded hover:border-indigo-600"
  }

  return (
    <label htmlFor={optionid} className={labelstyle} onClick={handleChange}>
      <input type="radio" name="option" id={optionid}
      onChange={handleChange} className="hidden" />
      
        <h2 className="font-semibold" >{ profesion}</h2>
      
    </label>
  );
};
