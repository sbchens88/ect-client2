import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QweruidfofjasdMain = new eradaniConnect.run.Sql(
    ` Select B.auto_vin_nbr_x, 'Y', '0' from CSACTT00 A inner join CSAUTT00 B on A.branch_n = B.branch_n and A.account_n = B.account_n where B.auto_vin_nbr_x = ? and B.collateral_type_c in ('C' ,'*') and A.account_status_c = 'A' and FAC_status_c in ('I', ' ') LIMIT 1`,
    {
        params: [{ name: 'first' }]
    }
);
export interface QweruidfofjasdInput {
    first: number;
}
export type QweruidfofjasdOutputRecord = JSONObject;
export interface QweruidfofjasdOutput extends Array<QweruidfofjasdOutputRecord> {}
