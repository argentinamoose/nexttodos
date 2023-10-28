"use client"

import { Todo } from '@prisma/client'
import { TodosProps } from "@/types/Todo"
import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { CreateTodoItem } from './CreateTodoItem'
import { stringify } from 'querystring'



export function Todos({ deleteTodo, toggleTodo, createTodo }: TodosProps) {
	const [todos, setTodos] = useState<Todo[]>([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('/api/todoapi')
			.then((res) => res.json())
			.then((data) => {
				setTodos(data.data)
				setLoading(false)
			})
	}, [])

	function remove(id: number) {
		// GET ALL TOODS HERE AND SET STATE
		fetch(`/api/todoremove/`,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({id: id})
		})
		.then((res) => res.json())
		.then((data) => {
			setTodos([])
			setLoading(true)
		})
		.then(() => {
			fetch('/api/todoapi')
			.then((res) => res.json())
			.then((data) => {
				setTodos(data.data)
				setLoading(false)
			})
		})
	}

	function create(e: any, id: number) {
		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		//const newTodoTitle = stringify(formJson.todoId)
		const newTodo: Todo = {
			id: 0,
			title: formJson.todoId,
			complete: false,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		console.log(formJson)
		fetch(`/api/todocreate/`,{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(newTodo),
			// body: {
			// 	id:formJson.id
			// }
		})
		.then((res) => res.json())
		.then((data) => {
			setTodos(data.data)
			setLoading(false)
		})
	}

	if (isLoading) return <p>Loading...</p>
	if (!todos || todos.length < 1) return <p>No todo data</p>

	//updates front end to match back end
	return (
		<>
			<ul className="pl-4">
				{todos.map((todo: Todo) => (
					<span key={todo.id}>
						<TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={remove} />
					</span>
				))}
			</ul>
			<div>
				<CreateTodoItem createTodo={create}></CreateTodoItem>
			</div>
		</>
	)
}