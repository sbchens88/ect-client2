import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AendpoindaaMain = new eradaniConnect.run.Sql(` select * from gqpl.applications`);
export interface AendpoindaaInput {}
export type AendpoindaaOutputRecord = JSONObject;
export interface AendpoindaaOutput extends Array<AendpoindaaOutputRecord> {}
