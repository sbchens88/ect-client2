import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetSDataMain, GetSDataOutput, GetSDataInput } from 'src/models/testing-a';

const logger = createLogger('controllers/testingA');

export async function GetSData(inputs: JSONObject): Promise<GetSDataOutput> {
    logger.debug('Calling getSData with args: ', inputs);
    const params: GetSDataInput = {};
    return transport.execute(GetSDataMain, params) as Promise<GetSDataOutput>;
}
