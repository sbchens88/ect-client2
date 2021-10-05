import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetRandomDataMain = new eradaniConnect.run.Sql(` select * from TEST.BASICSQL`);
export interface GetRandomDataInput {}
export type GetRandomDataOutputRecord = JSONObject;
export interface GetRandomDataOutput extends Array<GetRandomDataOutputRecord> {}
