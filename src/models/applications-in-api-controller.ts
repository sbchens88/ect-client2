import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetApplicationsRecordssMain = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface GetApplicationsRecordssInput {}
export type GetApplicationsRecordssOutputRecord = JSONObject;
export interface GetApplicationsRecordssOutput extends Array<GetApplicationsRecordssOutputRecord> {}
