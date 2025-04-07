import express from 'express';
import { createSnippet, getAllSnippets } from '../controllers/snippetController.js';

const router = express.Router();
router.post('/', createSnippet);
router.get('/', getAllSnippets);

export default router;
