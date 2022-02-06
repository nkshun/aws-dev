import { Router } from 'express'
import GetPosts from './posts/get_posts'
import CreatPost from './posts/get_posts'

const router = Router()

router.get('/', (req, res, next) => {
  console.log('get');
  
  new GetPosts(req, res).main().catch(next)
})

router.post('/create', (req, res, next) => {
  console.log('gcreate');
  new CreatPost(req, res).main().catch(next)
})

export default router