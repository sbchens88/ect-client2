import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TheParamInputFunctionMain = new eradaniConnect.run.Sql(` select * from qgpl.application where id = ?`, {
    params: [{ name: 'id' }]
});
export interface TheParamInputFunctionInput {
    id: number;
}
export type TheParamInputFunctionOutputRecord = JSONObject;
export interface TheParamInputFunctionOutput extends Array<TheParamInputFunctionOutputRecord> {}

export const TheParamInputFunction123Main = new eradaniConnect.run.Sql(` select * from qgpl.application where id = ?`, {
    params: [{ name: 'id' }]
});
export interface TheParamInputFunction123Input {
    id: number;
}
export type TheParamInputFunction123OutputRecord = JSONObject;
export interface TheParamInputFunction123Output extends Array<TheParamInputFunction123OutputRecord> {}

export const TheParamInputFunction1234Main = new eradaniConnect.run.Sql(
    ` select * from qgpl.application where id = ?`,
    {
        params: [{ name: 'id' }]
    }
);
export interface TheParamInputFunction1234Input {
    id: number;
}
export type TheParamInputFunction1234OutputRecord = JSONObject;
export interface TheParamInputFunction1234Output extends Array<TheParamInputFunction1234OutputRecord> {}
