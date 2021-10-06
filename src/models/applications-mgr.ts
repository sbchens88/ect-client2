import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const DeleteAppByIdtestinMain = new eradaniConnect.run.Sql(` select *from qgpl.applications where id = ?`, {
    params: []
});
export interface DeleteAppByIdtestinInput {}
export type DeleteAppByIdtestinOutputRecord = JSONObject;
export interface DeleteAppByIdtestinOutput extends Array<DeleteAppByIdtestinOutputRecord> {}
