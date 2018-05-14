import { Router } from 'express'

import users from './users'
import admin from './admin'

const router = Router()

// Add USERS Routes
router.use('/admin',admin)
router.use('/users',users)

export default router
