import { Todo } from '@prisma/client'
import { TodoDto } from './TodoDto'

export interface TodoProps {
	todo: Todo
	toggleTodo: (id: number, complete: boolean) => void
	deleteTodo: (id: number) => void
}

export interface TodosProps {
	toggleTodo: (id: number, complete: boolean) => void
	deleteTodo: (id: number) => void
	createTodo: (data: TodoDto) => void
}

export interface TodoNewProps {
	createTodo: (title: string) => void
}