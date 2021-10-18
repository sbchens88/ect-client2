import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetSomeRandsDatsMain, GetSomeRandsDatsOutput, GetSomeRandsDatsInput } from 'src/models/api-test-routing';

const logger = createLogger('controllers/apiTestRouting');

export async function GetSomeRandsDats(inputs: JSONObject): Promise<GetSomeRandsDatsOutput> {
    logger.debug('Calling getSomeRandsDats with args: ', inputs);
    const params: GetSomeRandsDatsInput = {};
    return transport.execute(GetSomeRandsDatsMain, params) as Promise<GetSomeRandsDatsOutput>;
}
