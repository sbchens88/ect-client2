import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const FunctionNamesssMain = new eradaniConnect.run.Sql(`select * from qgpl.applications where id = ? `, {
    params: [{ name: 'appId' }]
});
export interface FunctionNamesssInput {
    appId: number;
}
export type FunctionNamesssOutputRecord = JSONObject;
export interface FunctionNamesssOutput extends Array<FunctionNamesssOutputRecord> {}

export const JustGetTheAppMain = new eradaniConnect.run.Sql(` select * from QGPL.applications where id = ?`);
export interface JustGetTheAppInput {
    appId: string;
}
export type JustGetTheAppOutputRecord = JSONObject;
export interface JustGetTheAppOutput extends Array<JustGetTheAppOutputRecord> {}
