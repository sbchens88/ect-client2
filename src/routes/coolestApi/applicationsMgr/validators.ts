
            import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const DeleteAppByIdtestin: InputCheckChain[] = [
                    check('appId').exists().isNumeric().toFloat()
                ];

