import { TodoItem } from "@/components/TodoItem"
import { prisma } from "@/db"
import Link from "next/link"

//grabs todos from database
function getTodos() {
  return prisma.todo.findMany()
}

//sends todo completion clicks to database
async function toggleTodo(id: string, complete:boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete }})
}

async function deleteTodo(id: string) {
  "use server"

  await prisma.todo.delete( { where: { id }})
}

//displays todos (home page layout)
export default async function home() {
  const todos = await getTodos()

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
        {todos.map(todo =>(
          <span>
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          </span>
        ))}
        
      </ul>
    </>
  )
}