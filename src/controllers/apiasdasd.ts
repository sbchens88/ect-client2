import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EradaniApiasdasdMain, EradaniApiasdasdOutput, EradaniApiasdasdInput } from 'src/models/apiasdasd';

const logger = createLogger('controllers/apiasdasd');

export async function EradaniApiasdasd(inputs: JSONObject): Promise<EradaniApiasdasdOutput> {
    logger.debug('Calling eradaniApiasdasd with args: ', inputs);
    const params: EradaniApiasdasdInput = {};
    return transport.execute(EradaniApiasdasdMain, params) as Promise<EradaniApiasdasdOutput>;
}
