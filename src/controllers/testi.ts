import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetParamsappIdMain, GetParamsappIdOutput, GetParamsappIdInput } from 'src/models/testi';

const logger = createLogger('controllers/testi');

export async function GetParamsappId(inputs: JSONObject): Promise<GetParamsappIdOutput> {
    logger.debug('Calling getParamsappId with args: ', inputs);
    const params: GetParamsappIdInput = {
        appId: inputs.appId
    };
    return transport.execute(GetParamsappIdMain, params) as Promise<GetParamsappIdOutput>;
}
