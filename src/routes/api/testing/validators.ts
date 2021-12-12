import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const TheParamInputFunction: InputCheckChain[] = [
                    check('id')
                ,
                    check('id').isNumeric()
                ]

