import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestingDeleteFunctionMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface TestingDeleteFunctionInput {}
export type TestingDeleteFunctionOutputRecord = JSONObject;
export interface TestingDeleteFunctionOutput extends Array<TestingDeleteFunctionOutputRecord> {}
