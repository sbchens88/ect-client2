import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const ChiEndpointMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface ChiEndpointInput {}
export type ChiEndpointOutputRecord = JSONObject;
export interface ChiEndpointOutput extends Array<ChiEndpointOutputRecord> {}
