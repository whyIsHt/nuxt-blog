import { Router } from 'express'

import users from './users'
import blog from './blog'
import select from './select'

const router = Router()


// Add USERS Routes
router.use('/',users)
router.use('/select',select)
router.use('/blog',blog)

export default router
