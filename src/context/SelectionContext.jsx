import {useState, useContext, createContext } from "react";

export const SelectionContext = createContext();

export const useSelectionContext = () => {
    const context = useContext(SelectionContext)
    if (!context) {
        throw new Error("useSelectionContext must be used with an SelectionProvider")
    }
    
    return context
}

export const SelectionProvider = ({children}) => {
  const options = ["option1","option2","option3"]
  const [selection,setSelection]=useState(options[0])
  const [scene,setScene] =useState('')
  const [career,setCareer] = useState('')
  const [music,setMusic] = useState("")
  const [bannerImage,setBannerImage] = useState("image")
  const [icon,setIcon] = useState("")

  return (
    <SelectionContext.Provider
      value={{options,selection,setSelection,scene,setScene,career,setCareer,music,setMusic,bannerImage,setBannerImage,icon,setIcon}}
    >{children}</SelectionContext.Provider>
  )
}
