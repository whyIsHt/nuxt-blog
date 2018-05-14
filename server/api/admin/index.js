import { Router } from 'express'

import admin from './admin'
import login from './login'
import add from './add'
import del from './del'
import modInfo from './modInfo'
import mod from './mod'

const router = Router()



router.use('/',admin)
router.use('/login',login)
router.use('/add',add)
router.use('/del',del)
router.use('/modInfo',modInfo)
router.use('/mod',mod)

export default router
