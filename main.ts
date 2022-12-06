import { RouterContext } from '@oak'

import { httpServer, jsonDispatch } from '@utils'

const dispatch = jsonDispatch({
	test: async () => 'hello world 1',
})

const router = httpServer({ port: 8000 })

router.get('/test', () => 'test')

router.post('/phl', async (ctx: RouterContext<'/phl'>) => {
	const data = await ctx.request.body().value

	const client = {
		addr: {
			hostname: ctx.request.ip,
		},
	}

	ctx.response.body = await dispatch(data, client).catch((err) => err)
})
