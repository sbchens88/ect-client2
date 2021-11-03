import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SadfghjkMain, SadfghjkOutput, SadfghjkInput } from 'src/models/asdasdsa';

const logger = createLogger('controllers/asdasdsa');

export async function Sadfghjk(inputs: JSONObject): Promise<SadfghjkOutput> {
    logger.debug('Calling sadfghjk with args: ', inputs);
    const params: SadfghjkInput = {};
    return transport.execute(SadfghjkMain, params) as Promise<SadfghjkOutput>;
}
