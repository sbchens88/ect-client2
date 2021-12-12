import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    MonacofuncMain,
    MonacofuncOutput,
    MonacofuncInput,
    TestingMoacoMain,
    TestingMoacoOutput,
    TestingMoacoInput
} from 'src/models/monaco';

const logger = createLogger('controllers/monaco');

export async function Monacofunc(inputs: JSONObject): Promise<MonacofuncOutput> {
    logger.debug('Calling monacofunc with args: ', inputs);
    const params: MonacofuncInput = {};
    return transport.execute(MonacofuncMain, params) as Promise<MonacofuncOutput>;
}

export async function TestingMoaco(inputs: JSONObject): Promise<TestingMoacoOutput> {
    logger.debug('Calling testingMoaco with args: ', inputs);
    const params: TestingMoacoInput = {};
    return transport.execute(TestingMoacoMain, params) as Promise<TestingMoacoOutput>;
}
