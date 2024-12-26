import React,{useState} from 'react';

function Todo_program()
{
    let [todos,setTodos] = useState(['Study at 6.0 clock','Eat at 8.0 clock','Play Outside']);
    let [inputText,setInputText] = useState('');

    function addNewTodo()
    {
        if(inputText.trim()!=="")
        {
            setTodos(t=>[...t,inputText]);
            setInputText('');       
        }
    }
    function deleteTodo(index)
    {
        let data = todos.filter((todo,i)=>
            i!==index
        );
        setTodos(data);
    }
    function moveUp(index)
    {
        if(index>0)
        {
            const updated = [...todos];
            [updated[index],updated[index-1]] = [updated[index-1],updated[index]];
            setTodos(updated);
        }
    }
    function moveDown(index)
    {
        if(index<todos.length-1)
            {
                const updated = [...todos];
                [updated[index],updated[index+1]] = [updated[index+1],updated[index]];
                setTodos(updated);
            }
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <div className='input'>
                <input type ='text' placeholder='Type a todo bruh...' value={inputText} onChange={(e)=>{
                    setInputText(e.target.value)
                }} className='input-text'></input>
                <button className='input-btn' onClick={addNewTodo}>ADD</button>
            </div>
            <ul>
                {
                    todos.map((todo,index)=>
                    <li key={index} className='lists'>
                        <span>{todo}</span>
                        <button className='delete-btn' onClick={()=>deleteTodo(index)}>Delete</button>
                        <button className='moveup-btn' onClick={()=>moveUp(index)}>⬆️</button>
                        <button className='movedown-btn'  onClick={()=>moveDown(index)}>⬇️</button>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default Todo_program;