"use client"

import {  TodoProps } from "@/types/Todo"



//TodoItem tsx formatting for rendering
export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoProps) {
    return (
        <span id="todoListItem" className="flex gap-1">
            <li className="flex gap-1 items-center inline-block ">
                <input 
                    id={todo.id.toString()}
                    type="checkbox" 
                    className="cursor-pointer peer" 
                    defaultChecked={todo.complete}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
				<label htmlFor={todo.id.toString()} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                    {todo.title}
                </label>
            </li>
            <li className="flex gap-1 items-center inline-block">
                <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
                    Delete
                    <input
						id = "delt"
						type="button"
						onClick={() => deleteTodo(todo.id)}
                    />
                </label>
            </li>
        </span>
    )
}