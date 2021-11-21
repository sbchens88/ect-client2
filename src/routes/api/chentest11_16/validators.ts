import { InputCheckChain } from 'src/types';
import { body,check } from "express-validator";
export const Sdawert4Y5Nn: InputCheckChain[] = [
                body('in').isLength({ max: 15 }).optional().isArray(),check('Param1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];

