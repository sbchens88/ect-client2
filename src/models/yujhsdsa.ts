import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const OpdfihokvjbhMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface OpdfihokvjbhInput {}
export type OpdfihokvjbhOutputRecord = JSONObject;
export interface OpdfihokvjbhOutput extends Array<OpdfihokvjbhOutputRecord> {}
