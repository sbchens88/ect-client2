import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const ChensEpointMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface ChensEpointInput {}
export type ChensEpointOutputRecord = JSONObject;
export interface ChensEpointOutput extends Array<ChensEpointOutputRecord> {}
