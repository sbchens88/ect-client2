import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { MoncofunMain, MoncofunOutput, MoncofunInput } from 'src/models/monco';

const logger = createLogger('controllers/monco');

export async function Moncofun(inputs: JSONObject): Promise<MoncofunOutput> {
    logger.debug('Calling moncofun with args: ', inputs);
    const params: MoncofunInput = {};
    return transport.execute(MoncofunMain, params) as Promise<MoncofunOutput>;
}
