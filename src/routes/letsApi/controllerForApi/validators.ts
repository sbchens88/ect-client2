import { InputCheckChain } from 'src/types';
import { check } from "express-validator";
export const GetUserByUserNameEp: InputCheckChain[] = [
                    check('user').exists().isLength({ max: 256 })
                ];

