import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EditorTestingMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface EditorTestingInput {}
export type EditorTestingOutputRecord = JSONObject;
export interface EditorTestingOutput extends Array<EditorTestingOutputRecord> {}
