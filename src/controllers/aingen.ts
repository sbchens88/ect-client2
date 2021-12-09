import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdeeeMain, AsdeeeOutput, AsdeeeInput } from 'src/models/aingen';

const logger = createLogger('controllers/aingen');

export async function Asdeee(inputs: JSONObject): Promise<AsdeeeOutput> {
    logger.debug('Calling asdeee with args: ', inputs);
    const params: AsdeeeInput = {};
    return transport.execute(AsdeeeMain, params) as Promise<AsdeeeOutput>;
}
