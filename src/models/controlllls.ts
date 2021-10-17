import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdsnSssSwweMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: [{ name: 'appId' }]
});
export interface AsdsnSssSwweInput {
    appId: string;
}
export type AsdsnSssSwweOutputRecord = JSONObject;
export interface AsdsnSssSwweOutput extends Array<AsdsnSssSwweOutputRecord> {}
