import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetApplicationByIdKey: InputCheckChain[] = [
                    check('appId').exists().isNumeric().toFloat()
                ];

