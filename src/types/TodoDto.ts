import { Todo } from "@prisma/client";

export interface TodoDto extends Partial<Todo> {
	title: string
	complete: boolean
}