import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const LerEndpointdMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface LerEndpointdInput {}
export type LerEndpointdOutputRecord = JSONObject;
export interface LerEndpointdOutput extends Array<LerEndpointdOutputRecord> {}
