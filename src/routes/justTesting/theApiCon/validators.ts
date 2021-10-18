import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const AgetsomeThings: InputCheckChain[] = [
                    check('num')
                ]

