
export const LOCAL_STORAGE_KEY = 'TODO_LIST';

export const addTodo = (todoItem) => {
    const todoList = getTodos();
    todoList.push(todoItem);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    return todoList;
}

export const getTodos = () => {
    const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return todoList;
}

export const removeTodo = (index) => {
    const todoList = getTodos();
    todoList.splice(index, 1)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    return todoList;
}