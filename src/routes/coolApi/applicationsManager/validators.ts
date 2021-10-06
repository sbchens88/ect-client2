
            import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetAppByIdTesting: InputCheckChain[] = [
                    check('appId').exists().isNumeric().toFloat()
                ];

