import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const TheParamInputFunction: InputCheckChain[] = [
                    check('id')
                ,
                    check('id').isNumeric()
                ]
export const TheParamInputFunction123: InputCheckChain[] = [
                    check('id')
                ,
                    check('id').isNumeric()
                ]
export const TheParamInputFunction1234: InputCheckChain[] = [
                    check('id')
                ,
                    check('id').isNumeric()
                ]



