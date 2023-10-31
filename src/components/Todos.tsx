"use client"

import { Todo } from '@prisma/client'
import { TodosProps } from "@/types/Todo"
import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { CreateTodoItem } from './CreateTodoItem'
import { TodoDto } from '@/types/TodoDto'
import BaseReponse from '@/types/BaseReponse'

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

	function create(title: string) {
		const newTodo: TodoDto = {
			title: title,
			complete: false,
		}

		fetch(`/api/todocreate/`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newTodo)
		})
		.then((res) => res.json())
		.then((data: BaseReponse<Todo[]>) => {
			console.log(data.body)
			setTodos(data.body)
			setLoading(false)
		})
	}

	if (isLoading) return <p>Loading...</p>
	if (!todos || todos.length < 1) return <p>No todo data</p>

	//updates front end to match back end
	return (
		<div>
			<ul className="pl-0">
				{todos.map((todo: Todo) => (
					<span key={todo.id}>
						<TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={remove} />
					</span>
				))}
			</ul>
			<div>
				<CreateTodoItem createTodo={create}></CreateTodoItem>
			</div>
		</div>
	)
}