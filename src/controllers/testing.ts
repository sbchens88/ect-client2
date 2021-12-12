import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    TheParamInputFunctionMain,
    TheParamInputFunctionOutput,
    TheParamInputFunctionInput,
    TheParamInputFunction123Main,
    TheParamInputFunction123Output,
    TheParamInputFunction123Input,
    TheParamInputFunction1234Main,
    TheParamInputFunction1234Output,
    TheParamInputFunction1234Input
} from 'src/models/testing';

const logger = createLogger('controllers/testing');

export async function TheParamInputFunction(inputs: JSONObject): Promise<TheParamInputFunctionOutput> {
    logger.debug('Calling theParamInputFunction with args: ', inputs);
    const params: TheParamInputFunctionInput = {
        id: inputs.id
    };
    return transport.execute(TheParamInputFunctionMain, params) as Promise<TheParamInputFunctionOutput>;
}

export async function TheParamInputFunction123(inputs: JSONObject): Promise<TheParamInputFunction123Output> {
    logger.debug('Calling theParamInputFunction123 with args: ', inputs);
    const params: TheParamInputFunction123Input = {
        id: inputs.id
    };
    return transport.execute(TheParamInputFunction123Main, params) as Promise<TheParamInputFunction123Output>;
}

export async function TheParamInputFunction1234(inputs: JSONObject): Promise<TheParamInputFunction1234Output> {
    logger.debug('Calling theParamInputFunction1234 with args: ', inputs);
    const params: TheParamInputFunction1234Input = {
        id: inputs.id
    };
    return transport.execute(TheParamInputFunction1234Main, params) as Promise<TheParamInputFunction1234Output>;
}
