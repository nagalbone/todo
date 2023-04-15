import './App.css';
import InputText from './components/InputText';
import { useEffect, useState } from 'react';
import TodoLists from './components/TodoLists';
function App() {

  const [todoList,setTodoList] = useState([]);
  function addList(list)
  {
    if(list !== "")
    {
      setTodoList([...todoList,list]);
      localStorage.setItem('lists', JSON.stringify([...todoList]));
    }
  }

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('lists'));
      setTodoList(items);
  },[]);

  function deleteList(index)
  {
    let deleteListArr = [...todoList];
    deleteListArr.splice(index,1);
    setTodoList([...deleteListArr]);

  }
  return (
    <>
    <div>
      <InputText fun={addList}/>
      {
        todoList.map((item,index,)=>{
          return(
            <TodoLists key={index} index={index} items={item} fun={deleteList}/>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
