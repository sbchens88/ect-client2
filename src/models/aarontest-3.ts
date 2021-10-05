import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const RuntestsqltestMain = new eradaniConnect.run.Sql(` select count(*) from QIWS.QCUSTCDT where baldue > 100`);
export interface RuntestsqltestInput {}
export type RuntestsqltestOutputRecord = JSONObject;
export interface RuntestsqltestOutput extends Array<RuntestsqltestOutputRecord> {}
