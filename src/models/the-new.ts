import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const FeatureSwagMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface FeatureSwagInput {}
export type FeatureSwagOutputRecord = JSONObject;
export interface FeatureSwagOutput extends Array<FeatureSwagOutputRecord> {}

export const FeatureSwagAsdMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface FeatureSwagAsdInput {}
export type FeatureSwagAsdOutputRecord = JSONObject;
export interface FeatureSwagAsdOutput extends Array<FeatureSwagAsdOutputRecord> {}
