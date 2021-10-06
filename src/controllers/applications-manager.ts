import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    GetAppByIdTestingMain,
    GetAppByIdTestingOutput,
    GetAppByIdTestingInput
} from 'src/models/applications-manager';

const logger = createLogger('controllers/applicationsManager');

export async function GetAppByIdTesting(inputs: JSONObject): Promise<GetAppByIdTestingOutput> {
    logger.debug('Calling getAppByIdTesting with args: ', inputs);
    const params: GetAppByIdTestingInput = {
        appId: inputs.appId
    };
    return transport.execute(GetAppByIdTestingMain, params) as Promise<GetAppByIdTestingOutput>;
}
