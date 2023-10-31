import { Todos } from "@/components/Todos"
import { deleteTodo, toggleTodo, createTodo } from "./todo"

//displays todos (home page layout)
export default async function home() {
	return (
		<div items-center>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-3xl">Todos</h1>
			</header>
			<ul className="items-center mb-4 inline-block flex-col">
				<Todos deleteTodo={deleteTodo} toggleTodo={toggleTodo} createTodo={createTodo}></Todos>
			</ul>
		</div>
	)
}