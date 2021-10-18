import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdasfgbvdfMain, AsdasfgbvdfOutput, AsdasfgbvdfInput } from 'src/models/lets-seeid';

const logger = createLogger('controllers/letsSeeid');

export async function Asdasfgbvdf(inputs: JSONObject): Promise<AsdasfgbvdfOutput> {
    logger.debug('Calling asdasfgbvdf with args: ', inputs);
    const params: AsdasfgbvdfInput = {};
    return transport.execute(AsdasfgbvdfMain, params) as Promise<AsdasfgbvdfOutput>;
}
