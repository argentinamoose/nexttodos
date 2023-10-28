import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteTodo } from '@/app/todo'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const todos = await deleteTodo(req.body.id)

		res.status(200).send({ data: todos })	
	}
	catch (ex) {
		res.status(500).send({ error: 'failed to fetch data' })
	}
}