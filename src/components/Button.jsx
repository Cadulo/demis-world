export const Button = ({text,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className="bg-indigo-500 w-32 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
        {text}
        </button>
    </div>
  )
}

