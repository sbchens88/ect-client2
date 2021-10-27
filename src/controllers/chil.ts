import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { SomerandomFunctionMain, SomerandomFunctionOutput, SomerandomFunctionInput } from 'src/models/chil';

const logger = createLogger('controllers/chil');

export async function SomerandomFunction(inputs: JSONObject): Promise<SomerandomFunctionOutput> {
    logger.debug('Calling somerandomFunction with args: ', inputs);
    const params: SomerandomFunctionInput = {};
    return transport.execute(SomerandomFunctionMain, params) as Promise<SomerandomFunctionOutput>;
}
