"use client"

import { TodoNewProps } from "@/types/Todo"
import { useState } from "react"

//TodoItem tsx formatting for rendering
export function CreateTodoItem({ createTodo }: TodoNewProps) {
	const [title, setTitle] = useState<string>('')

	function create() {
		if (title && title.length > 0) {
			createTodo(title)
		}
	}
	
    return (
        <div>
			<label>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</label>
			<button onClick={() => create()}>
				Add Todo
			</button>
		</div>
    )
}