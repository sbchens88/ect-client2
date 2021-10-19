import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdasdasdasdMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface AsdasdasdasdInput {}
export type AsdasdasdasdOutputRecord = JSONObject;
export interface AsdasdasdasdOutput extends Array<AsdasdasdasdOutputRecord> {}
