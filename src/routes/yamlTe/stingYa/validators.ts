import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const YamlTeeing: InputCheckChain[] = [
                check('Input').isLength({ max: 15 }).optional().isArray(),check('pa1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];
export const YamlTeeingQq: InputCheckChain[] = [
                check('Input').isLength({ max: 15 }).optional().isArray(),check('pa1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];


