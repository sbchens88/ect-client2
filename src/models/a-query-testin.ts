import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const RoutingEndpoiutFuncMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id =110`);
export interface RoutingEndpoiutFuncInput {}
export type RoutingEndpoiutFuncOutputRecord = JSONObject;
export interface RoutingEndpoiutFuncOutput extends Array<RoutingEndpoiutFuncOutputRecord> {}
