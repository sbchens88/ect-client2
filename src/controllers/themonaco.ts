import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { MoncofuncMain, MoncofuncOutput, MoncofuncInput } from 'src/models/themonaco';

const logger = createLogger('controllers/themonaco_');

export async function Moncofunc(inputs: JSONObject): Promise<MoncofuncOutput> {
    logger.debug('Calling moncofunc with args: ', inputs);
    const params: MoncofuncInput = {};
    return transport.execute(MoncofuncMain, params) as Promise<MoncofuncOutput>;
}
