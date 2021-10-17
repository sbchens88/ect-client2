import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetAppObjectByKeyAMain, GetAppObjectByKeyAOutput, GetAppObjectByKeyAInput } from 'src/models/chen-contr';

const logger = createLogger('controllers/chenContr');

export async function GetAppObjectByKeyA(inputs: JSONObject): Promise<GetAppObjectByKeyAOutput> {
    logger.debug('Calling getAppObjectByKeyA with args: ', inputs);
    const params: GetAppObjectByKeyAInput = {
        appId: inputs.appId
    };
    return transport.execute(GetAppObjectByKeyAMain, params) as Promise<GetAppObjectByKeyAOutput>;
}
