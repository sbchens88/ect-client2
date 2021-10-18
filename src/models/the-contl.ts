import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdsdswwwMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdsdswwwInput {}
export type AsdsdswwwOutputRecord = JSONObject;
export interface AsdsdswwwOutput extends Array<AsdsdswwwOutputRecord> {}
