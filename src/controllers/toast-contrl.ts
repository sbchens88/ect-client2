import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { TestingToastingMain, TestingToastingOutput, TestingToastingInput } from 'src/models/toast-contrl';

const logger = createLogger('controllers/toastContrl');

export async function TestingToasting(inputs: JSONObject): Promise<TestingToastingOutput> {
    logger.debug('Calling testingToasting with args: ', inputs);
    const params: TestingToastingInput = {};
    return transport.execute(TestingToastingMain, params) as Promise<TestingToastingOutput>;
}
