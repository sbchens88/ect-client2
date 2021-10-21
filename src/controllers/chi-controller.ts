import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { ChiEndpointMain, ChiEndpointOutput, ChiEndpointInput } from 'src/models/chi-controller';

const logger = createLogger('controllers/chiController');

export async function ChiEndpoint(inputs: JSONObject): Promise<ChiEndpointOutput> {
    logger.debug('Calling chiEndpoint with args: ', inputs);
    const params: ChiEndpointInput = {};
    return transport.execute(ChiEndpointMain, params) as Promise<ChiEndpointOutput>;
}
