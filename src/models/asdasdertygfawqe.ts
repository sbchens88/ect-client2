import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweffssddwerhgfMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication' AND port = "2222"`
);
export interface QweffssddwerhgfInput {}
export type QweffssddwerhgfOutputRecord = JSONObject;
export interface QweffssddwerhgfOutput extends Array<QweffssddwerhgfOutputRecord> {}

export const SomewqeWqeMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication' AND port = "2222"`
);
export interface SomewqeWqeInput {}
export type SomewqeWqeOutputRecord = JSONObject;
export interface SomewqeWqeOutput extends Array<SomewqeWqeOutputRecord> {}
