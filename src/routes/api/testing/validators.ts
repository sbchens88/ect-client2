import { InputCheckChain } from 'src/types';
import { check,params } from "express-validator";
export const TheParamInputFunction: InputCheckChain[] = [
                    check('Input')
                ,
                    params('Input').isNumeric()
                ]

