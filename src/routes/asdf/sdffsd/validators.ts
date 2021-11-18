import { InputCheckChain } from 'src/types';
import { body,query,check } from "express-validator";
export const Dsafsdf: InputCheckChain[] = [
                body('in').isLength({ max: 15 }).optional().isArray(),check('Param1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];

