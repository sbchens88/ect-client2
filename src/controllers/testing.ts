import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { TheParamInputFunctionMain, TheParamInputFunctionOutput, TheParamInputFunctionInput } from 'src/models/testing';

const logger = createLogger('controllers/testing');

export async function TheParamInputFunction(inputs: JSONObject): Promise<TheParamInputFunctionOutput> {
    logger.debug('Calling theParamInputFunction with args: ', inputs);
    const params: TheParamInputFunctionInput = {
        Input: inputs.Input
    };
    return transport.execute(TheParamInputFunctionMain, params) as Promise<TheParamInputFunctionOutput>;
}
