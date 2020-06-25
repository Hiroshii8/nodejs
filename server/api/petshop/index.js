import { Router } from 'express';
import { Database } from '../../../database/database';
import PetShopResource from '../../../resource/petshop';
import PetShopService from '../../../service/petshop';
import petShopHandler from './petShopHandler';

const router = Router();

const petShopResource = PetShopResource.Init(Database.redis, Database.Sequelize, null);
const petShopService = PetShopService.Init(petShopResource);
const handler = petShopHandler.Init(petShopService);

router.post('/PING', handler.PING);
router.get('/PING', handler.PING);

export default router;
