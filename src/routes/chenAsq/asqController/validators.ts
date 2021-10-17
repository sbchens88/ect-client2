import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetDataEndpointaa: InputCheckChain[] = [
                check('Input').isLength({ max: 15 }).optional().isArray(),check('Param1').isLength({ max: 16 }).optional().isNumeric().toFloat(),check('Output').not().exists().withMessage('param is not allowed')
            ];

