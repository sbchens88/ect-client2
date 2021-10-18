import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwertyukmnbMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: [{ name: 'appId' }]
});
export interface QwertyukmnbInput {
    appId: string;
}
export type QwertyukmnbOutputRecord = JSONObject;
export interface QwertyukmnbOutput extends Array<QwertyukmnbOutputRecord> {}
