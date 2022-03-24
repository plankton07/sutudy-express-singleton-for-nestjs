import { Cat, CatType } from './cats.model';
import { Router } from 'express';
import { readAllcat, readCat, addCat } from "./cats.service";

const router = Router();
router.get('/cats', readAllcat);
router.get('/cats/:id', readCat);
router.post('/cats', addCat);

export default router;