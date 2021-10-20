import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    TestingDeleteFunctionMain,
    TestingDeleteFunctionOutput,
    TestingDeleteFunctionInput
} from 'src/models/rand-controler-c';

const logger = createLogger('controllers/randControlerC');

export async function TestingDeleteFunction(inputs: JSONObject): Promise<TestingDeleteFunctionOutput> {
    logger.debug('Calling testingDeleteFunction with args: ', inputs);
    const params: TestingDeleteFunctionInput = {};
    return transport.execute(TestingDeleteFunctionMain, params) as Promise<TestingDeleteFunctionOutput>;
}
