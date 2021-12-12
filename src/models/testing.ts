import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TheParamInputFunctionMain = new eradaniConnect.run.Sql(` select * from qgpl.application where id = ?`, {
    params: [{ name: 'Input' }]
});
export interface TheParamInputFunctionInput {
    Input: number;
}
export type TheParamInputFunctionOutputRecord = JSONObject;
export interface TheParamInputFunctionOutput extends Array<TheParamInputFunctionOutputRecord> {}
