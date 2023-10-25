"use client"

//initializes todos properties
type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
    return (
        <span id="todoListItem" className="flex gap-1">
            <li className="flex gap-1 items-center inline-block ">
                <input 
                    id={id}
                    type="checkbox" 
                    className="cursor-pointer peer" 
                    defaultChecked={complete}
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                    {title}
                </label>
            </li>
            <li className="flex gap-1 items-center inline-block">
                <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                    Delete
                    <input
                    id = "delt"
                    type="button"
                    onClick={() => deleteTodo(id)}
                    />
                </label>
            </li>
        </span>
    )
}