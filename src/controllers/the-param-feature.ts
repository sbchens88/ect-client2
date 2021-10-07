import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    GetApplicationByIdKeyMain,
    GetApplicationByIdKeyOutput,
    GetApplicationByIdKeyInput
} from 'src/models/the-param-feature';

const logger = createLogger('controllers/theParamFeature');

export async function GetApplicationByIdKey(inputs: JSONObject): Promise<GetApplicationByIdKeyOutput> {
    logger.debug('Calling getApplicationByIdKey with args: ', inputs);
    const params: GetApplicationByIdKeyInput = {
        appId: inputs.appId
    };
    return transport.execute(GetApplicationByIdKeyMain, params) as Promise<GetApplicationByIdKeyOutput>;
}
