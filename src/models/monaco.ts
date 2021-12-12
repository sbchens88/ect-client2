import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const MonacofuncMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface MonacofuncInput {}
export type MonacofuncOutputRecord = JSONObject;
export interface MonacofuncOutput extends Array<MonacofuncOutputRecord> {}

export const TestingMoacoMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface TestingMoacoInput {}
export type TestingMoacoOutputRecord = JSONObject;
export interface TestingMoacoOutput extends Array<TestingMoacoOutputRecord> {}

export const QweqweMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QweqweInput {}
export type QweqweOutputRecord = JSONObject;
export interface QweqweOutput extends Array<QweqweOutputRecord> {}

export const EwqqweyMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface EwqqweyInput {}
export type EwqqweyOutputRecord = JSONObject;
export interface EwqqweyOutput extends Array<EwqqweyOutputRecord> {}
