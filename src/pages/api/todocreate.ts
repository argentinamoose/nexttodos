import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo, getTodos } from '@/app/todo'
import { Todo } from '@prisma/client'
import BaseReponse from '@/types/BaseReponse'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
		const todo: Todo = req.body

		if (!todo) {
			res.status(400).send(
				new BaseReponse<null>(false, 'must provide todo object', null)
			)
		}
		
		if (!todo.title || todo.title.length < 1) {
			res.status(400).send(
				new BaseReponse<null>(false, 'title cannot be empty', null)
			)
		}

		const createRes = await createTodo({
			title: todo.title,
			complete: todo.complete,
		})

		const todos = await getTodos()

		res.status(200).send(
			new BaseReponse<Todo[]>(true, '', todos)
		)
	}
	catch (ex) {
		res.status(500).send(
			new BaseReponse<null>(false, 'unexpected error', null)
		)
	}
}