"use client"

import { TodoNewProps } from "@/types/Todo"



//TodoItem tsx formatting for rendering
export function CreateTodoItem({ createTodo }: TodoNewProps) {
    return (
        <div>
            <form method="post" onSubmit={createTodo}>
                <label>
                    New Todo: <input name="todoId" />
                </label>
            </form>
      </div>
    )
}