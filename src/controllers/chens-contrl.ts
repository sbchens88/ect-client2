import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { ChensEpointMain, ChensEpointOutput, ChensEpointInput } from 'src/models/chens-contrl';

const logger = createLogger('controllers/chensContrl');

export async function ChensEpoint(inputs: JSONObject): Promise<ChensEpointOutput> {
    logger.debug('Calling chensEpoint with args: ', inputs);
    const params: ChensEpointInput = {};
    return transport.execute(ChensEpointMain, params) as Promise<ChensEpointOutput>;
}
