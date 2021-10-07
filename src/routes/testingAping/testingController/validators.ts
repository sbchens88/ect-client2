
            import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetAppByIdAndLib: InputCheckChain[] = [
                    check('appId').exists().isNumeric().toFloat(),check('lib').exists().isLength({ max: 256 })
                ];

