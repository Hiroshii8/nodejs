import { Router } from 'express';
import { Database } from '../../../database/database';
import PeopleService from '../../../service/people';
import PeopleResource from '../../../resource/people';
import peopleHandler from './peopleHandler';

const router = Router();

const peopleResource = PeopleResource.Init(Database.redis);
const peopleService = PeopleService.Init(peopleResource);
const handler = peopleHandler.Init(peopleService);

router.post('/attend', handler.setEmployeeAttendance);
router.get('/attend', handler.getEmployeeAttendance);

export default router;
