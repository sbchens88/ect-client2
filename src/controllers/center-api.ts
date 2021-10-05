import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetRandomDataMain, GetRandomDataOutput, GetRandomDataInput } from 'src/models/center-api';

const logger = createLogger('controllers/centerApi');

export async function GetRandomData(inputs: JSONObject): Promise<GetRandomDataOutput> {
    logger.debug('Calling getRandomData with args: ', inputs);
    const params: GetRandomDataInput = {};
    return transport.execute(GetRandomDataMain, params) as Promise<GetRandomDataOutput>;
}
