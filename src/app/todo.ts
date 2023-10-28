import { prisma } from "@/db"
import { Todo } from "@prisma/client"



//grabs todos from database
export async function getTodos() {
	"use server"

	return await prisma.todo.findMany()
}

//sends todo completion clicks to database
export async function toggleTodo(id: number, complete: boolean) {
	"use server"

	return await prisma.todo.update({ where: { id }, data: { complete } })
}

//send delete button clicks to database
export async function deleteTodo(id: number) {
	"use server"

	return await prisma.todo.delete({ where: { id } })
}

export async function createTodo(data: Todo) {
	"use server"

	const title = data.get("title")?.valueOf()
	if (typeof title !== "string" || title.length === 0) {
	  throw new Error("Invalid Title")
	}

	return await prisma.todo.create({ data: { title, complete: false } })
}