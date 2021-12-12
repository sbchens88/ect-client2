import { InputCheckChain } from 'src/types';
import { check,params } from "express-validator";
export const GetParamsappId: InputCheckChain[] = [
                    check('appId')
                ,
                    params('appId').isNumeric()
                ]

