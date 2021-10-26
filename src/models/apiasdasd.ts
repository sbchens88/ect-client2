import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const EradaniApiasdasdMain = new eradaniConnect.run.Sql(`select * from qgpl.applications `);
export interface EradaniApiasdasdInput {}
export type EradaniApiasdasdOutputRecord = JSONObject;
export interface EradaniApiasdasdOutput extends Array<EradaniApiasdasdOutputRecord> {}
