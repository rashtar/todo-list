import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, removeTodo } from "../apis/todos-api"

export const TodoList = () => {

    const queryClient = useQueryClient();
    const {data, isLoading} = useQuery('todos', getTodos);

    const {mutate} = useMutation(removeTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        },
    })

    if ( isLoading ) {
        return <p>loading...</p>
    }

    return (
        <div>
            <ul className="list-group">
                {data?.map((todoItem, index) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-center">{todoItem}
                        <button class="btn btn-danger btn-sm" onClick={() => mutate(index)}><i class="bi bi-x"/></button>
                    </li>
                })}
            </ul>
        </div>
    )
}