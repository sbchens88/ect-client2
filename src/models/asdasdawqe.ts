import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweffssMain = new eradaniConnect.run.Sql(
    ` selec * from qgpl.applications where name = 'chenTestApplication' AND port = "2222"`
);
export interface QweffssInput {}
export type QweffssOutputRecord = JSONObject;
export interface QweffssOutput extends Array<QweffssOutputRecord> {}

export const QweffssddMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication' AND port = "2222"`
);
export interface QweffssddInput {}
export type QweffssddOutputRecord = JSONObject;
export interface QweffssddOutput extends Array<QweffssddOutputRecord> {}
