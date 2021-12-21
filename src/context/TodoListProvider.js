import TodoListContext from "./TodoListContext";
import React, {useState} from "react";

function TodoListProvider({children}) {

  const [login , setLogin] = useState({login:"",password:""});
  const contextValue = {
    setLogin,
    login,
  }
  return(
    <TodoListContext.Provider value={ contextValue } >
      { children}
    </TodoListContext.Provider>
  )
}

export default TodoListProvider;
