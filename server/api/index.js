import { Router } from 'express';

import people from './people'
import petshop from './petshop';

// initialize resource based on used database

const router = Router();

router.use('/people', people);
router.use('/petshop', petshop);

export default router;
