"use client"

import { Todo } from '@prisma/client'
import { TodoNewProps } from "@/types/Todo"
import { useState } from "react"
import { CreateTodoItem } from './CreateTodoItem'



export function NewTodo({ createTodo }: TodoNewProps) {
	const [todos, setTodos] = useState<Todo[]>([])
	const [isLoading, setLoading] = useState(true)

	if (isLoading) return <p>Loading...</p>
	if (!todos || todos.length < 1) return <p>No todo data</p>

	//updates front end to match back end
	return (
		<>
			<ul className="pl-4">
				{todos.map((todo: Todo) => (
					<span key={todo.id}>
						<CreateTodoItem createTodo={create} />
					</span>
				))}
			</ul>
		</>
	)
}

		// // GET ALL TOODS HERE AND SET STATE
		// fetch(`/api/todocreate/`,{
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	  }
		// })
		// .then((res) => res.json())
		// .then((data) => {
		// 	setTodos([])
		// 	setLoading(true)
		// })
		// .then(() => {
		// 	fetch('/api/todoapi')
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setTodos(data.data)
		// 		setLoading(false)
		// 	})
		// })
		// Prevent the browser from reloading the page

		<div className="flex gap-1 justify-end">
                <form action={createTodo} className="flex gap-2 flex-col">
                    <input type="text" name="title" className="border 
                        border-slate-300 bg-transparent rounded px-2 py-1 
                        outline-none focus-within:border-slate-100" />
                    <button type="submit" className="border border-slate-300 
                        text-slate-300 px-2 py-1 
                        rounded hover:bg-slate-700 
                        focus-within:bg-slate-700 outline-none">
                        Create
                    </button>
                </form>
            </div>