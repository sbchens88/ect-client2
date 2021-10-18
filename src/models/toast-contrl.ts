import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestingToastingMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`);
export interface TestingToastingInput {}
export type TestingToastingOutputRecord = JSONObject;
export interface TestingToastingOutput extends Array<TestingToastingOutputRecord> {}
