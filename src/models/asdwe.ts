import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const RegffdssagMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface RegffdssagInput {}
export type RegffdssagOutputRecord = JSONObject;
export interface RegffdssagOutput extends Array<RegffdssagOutputRecord> {}
