import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SomeDMain = new eradaniConnect.run.Sql(`select`);
export interface SomeDInput {}
export type SomeDOutputRecord = JSONObject;
export interface SomeDOutput extends Array<SomeDOutputRecord> {}
