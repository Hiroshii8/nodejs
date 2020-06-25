import { Router } from 'express';
import { Database } from '../database/database';
import api from './api';
const router = Router();

router.use('/api', api);

Database.Sequelize.sequelize.sync();

export default router;
