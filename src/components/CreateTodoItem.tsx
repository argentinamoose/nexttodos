"use client"

import { TodoNewProps } from "@/types/Todo"
import { useState } from "react"

//CreateTodoItem tsx formatting for rendering
export function CreateTodoItem({ createTodo }: TodoNewProps) {
	const [title, setTitle] = useState<string>('')

	function create() {
		if (title && title.length > 0) {
			createTodo(title)
		}
	}
	
    return (
        <div className="relative flex w-full flex-wrap items-stretch mb-3 justify-between gap-2">
			<label>
				<input 
					type="text"
					placeholder="Placeholder"
					className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</label>
			<button onClick={() => create()}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</button>
			{/* <button onClick={() => create()} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-200 font-large rounded-lg text-lg px-2.5 py-1 focus:outline-none dark:focus:ring-blue-800 font-4x1">+</button> */}
		</div>
    )
}