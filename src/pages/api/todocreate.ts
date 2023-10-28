import type { NextApiRequest, NextApiResponse } from 'next'
import { createTodo } from '@/app/todo'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
		const todos = await createTodo(req.body.todo)

		res.status(200).send({ data: true })	
	}
	catch (ex) {
		console.log(ex)
		res.status(500).send({ error: 'failed to create todo' })
	}
}