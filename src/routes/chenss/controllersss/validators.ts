import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetYamlTee: InputCheckChain[] = [
                check('LAYOUTREC')
            ];

