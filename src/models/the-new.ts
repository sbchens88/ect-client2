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

export const FeatureSwagAdMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface FeatureSwagAdInput {}
export type FeatureSwagAdOutputRecord = JSONObject;
export interface FeatureSwagAdOutput extends Array<FeatureSwagAdOutputRecord> {}

export const FeatureSwagAdpppppMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface FeatureSwagAdpppppInput {}
export type FeatureSwagAdpppppOutputRecord = JSONObject;
export interface FeatureSwagAdpppppOutput extends Array<FeatureSwagAdpppppOutputRecord> {}
