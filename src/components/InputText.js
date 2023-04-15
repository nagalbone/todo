import { useState } from "react";
const InputText = (props)=>{
    const [InputText,setInputText] = useState();

    return(
        <>
        <input type="text" placeholder="Add Task" value={InputText} onChange={(e)=>setInputText(e.target.value)}/>
        <button onClick={()=>{ props.fun(InputText); setInputText("")}}>Add</button>
        </>
    )
}

export default InputText;