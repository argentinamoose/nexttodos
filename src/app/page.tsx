import { Todos } from "@/components/Todos"
import Link from "next/link"
import { deleteTodo, toggleTodo, createTodo } from "./todo"
import { NewTodo } from "@/components/NewTodo"



//displays todos (home page layout)
export default async function home() {
	return (
		<>
			<header className="flex justify-between items-center mb-4">
				<h1 className="text-2xl">Todos</h1>
					<Link 
					className="border border-slate-300 
					text-slate-300 px-2 py-1 
					rounded hover:bg-slate-700 
					focus-within:bg-slate-700 outline-none"
					href="/new">
					New
				</Link>
			</header>
			<ul className="pl-4">
				<Todos deleteTodo={deleteTodo} toggleTodo={toggleTodo} createTodo={createTodo}></Todos>
			</ul>
		</>
	)
}