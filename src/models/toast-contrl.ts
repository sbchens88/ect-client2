import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const TestingToastingMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`);
export interface TestingToastingInput {}
export type TestingToastingOutputRecord = JSONObject;
export interface TestingToastingOutput extends Array<TestingToastingOutputRecord> {}

export const AsdsadasdMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface AsdsadasdInput {}
export type AsdsadasdOutputRecord = JSONObject;
export interface AsdsadasdOutput extends Array<AsdsadasdOutputRecord> {}

export const AsdasdasdMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdasdasdInput {}
export type AsdasdasdOutputRecord = JSONObject;
export interface AsdasdasdOutput extends Array<AsdasdasdOutputRecord> {}
