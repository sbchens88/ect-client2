import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { FunctionMain, FunctionOutput, FunctionInput } from 'src/models/api-route';

const logger = createLogger('controllers/apiRoute');

export async function Function(inputs: JSONObject): Promise<FunctionOutput> {
    logger.debug('Calling function with args: ', inputs);
    const params: FunctionInput = {};
    return transport.execute(FunctionMain, params) as Promise<FunctionOutput>;
}
