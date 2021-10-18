import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AgetsomeThingsMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: [{ name: 'num' }]
});
export interface AgetsomeThingsInput {
    num: string;
}
export type AgetsomeThingsOutputRecord = JSONObject;
export interface AgetsomeThingsOutput extends Array<AgetsomeThingsOutputRecord> {}
