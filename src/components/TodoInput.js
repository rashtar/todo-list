import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../apis/todos-api";

export const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        },
    })

    const onSubmit = (event) => {
      event.preventDefault();
      if ( todo.trim().length > 0 ) {
        mutation.mutate(todo);
        setTodo("");
      }
    }

    return (
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input type="text" className="form-control" id="todoItem" placeholder="Enter todo" value={todo} onChange={(event) => setTodo(event.target.value)} required />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
            </div>
          </div>
        </form>
    )
}