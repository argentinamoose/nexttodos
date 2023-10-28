import { Todo } from '@prisma/client'



export interface TodoProps {
	todo: Todo
	toggleTodo: (id: number, complete: boolean) => void
	deleteTodo: (id: number) => void
}

export interface TodosProps {
	toggleTodo: (id: number, complete: boolean) => void
	deleteTodo: (id: number) => void
	createTodo: (data: FormData) => void
}

export interface TodoNewProps {
	createTodo: (data: FormData) => void
}