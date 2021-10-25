import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const PkmnhytFuncMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication'`
);
export interface PkmnhytFuncInput {}
export type PkmnhytFuncOutputRecord = JSONObject;
export interface PkmnhytFuncOutput extends Array<PkmnhytFuncOutputRecord> {}

export const PkmnhytFuncsssaaMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication'`
);
export interface PkmnhytFuncsssaaInput {}
export type PkmnhytFuncsssaaOutputRecord = JSONObject;
export interface PkmnhytFuncsssaaOutput extends Array<PkmnhytFuncsssaaOutputRecord> {}
