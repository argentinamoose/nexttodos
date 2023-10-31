"use client"

import {  TodoProps } from "@/types/Todo"



//TodoItem tsx formatting for rendering
export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoProps) {
    return (
        <span id="todoListItem" className="flex justify-between">
            <li className="flex gap-1 items-center inline-block">
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
            <li className="gap-1 items-center inline-block">
                <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400">
                    <button onClick={() => deleteTodo(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
			        </button>
                </label>
            </li>
        </span>
    )
}