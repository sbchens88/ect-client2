import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GettingSomeApDIngoMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface GettingSomeApDIngoInput {}
export type GettingSomeApDIngoOutputRecord = JSONObject;
export interface GettingSomeApDIngoOutput extends Array<GettingSomeApDIngoOutputRecord> {}
