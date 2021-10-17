import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetYamlTes: InputCheckChain[] = [
                check('LAYOUTREC')
            ];

