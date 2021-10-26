import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { ApiGenCallMain, ApiGenCallOutput, ApiGenCallInput } from 'src/models/art-testing';

const logger = createLogger('controllers/artTesting');

export async function ApiGenCall(inputs: JSONObject): Promise<ApiGenCallOutput> {
    logger.debug('Calling apiGenCall with args: ', inputs);
    const params: ApiGenCallInput = {};
    return transport.execute(ApiGenCallMain, params) as Promise<ApiGenCallOutput>;
}
