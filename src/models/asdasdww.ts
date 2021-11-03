import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const PokjhbvcghMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface PokjhbvcghInput {}
export type PokjhbvcghOutputRecord = JSONObject;
export interface PokjhbvcghOutput extends Array<PokjhbvcghOutputRecord> {}
