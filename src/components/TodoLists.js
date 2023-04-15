const TodoLists = (props) =>{
    return(
        <>
            <ul>
                <li>{props.items} <button onClick={()=>props.fun(props.index)}>del</button></li>
            </ul>
        </>
    )
}

export default TodoLists;