import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { LerEndpointdMain, LerEndpointdOutput, LerEndpointdInput } from 'src/models/ting-control';

const logger = createLogger('controllers/tingControl');

export async function LerEndpointd(inputs: JSONObject): Promise<LerEndpointdOutput> {
    logger.debug('Calling lerEndpointd with args: ', inputs);
    const params: LerEndpointdInput = {};
    return transport.execute(LerEndpointdMain, params) as Promise<LerEndpointdOutput>;
}
