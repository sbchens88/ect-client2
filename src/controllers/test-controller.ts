import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetSomeEpDataMain, GetSomeEpDataOutput, GetSomeEpDataInput } from 'src/models/test-controller';

const logger = createLogger('controllers/testController');

export async function GetSomeEpData(inputs: JSONObject): Promise<GetSomeEpDataOutput> {
    logger.debug('Calling getSomeEpData with args: ', inputs);
    const params: GetSomeEpDataInput = {};
    return transport.execute(GetSomeEpDataMain, params) as Promise<GetSomeEpDataOutput>;
}
