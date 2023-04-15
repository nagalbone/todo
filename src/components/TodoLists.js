const TodoLists = (props) =>{
    return(
        <>
            <ul>
                <li>{props.items} <button onClick={()=>props.fun(props.index)}>X</button></li>
            </ul>
        </>
    )
}

export default TodoLists;