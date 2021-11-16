import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const YamlValidTest: InputCheckChain[] = [
                check('in').isLength({ max: 15 }).optional().isArray(),check('p1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];

