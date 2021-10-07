import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetAppByIdAndLibMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where id = ? and library = ?`,
    {
        params: [{ name: 'appId' }, { name: 'lib' }]
    }
);
export interface GetAppByIdAndLibInput {
    appId: number;
    lib: string;
}
export type GetAppByIdAndLibOutputRecord = JSONObject;
export interface GetAppByIdAndLibOutput extends Array<GetAppByIdAndLibOutputRecord> {}
