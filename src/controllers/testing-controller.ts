import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { GetAppByIdAndLibMain, GetAppByIdAndLibOutput, GetAppByIdAndLibInput } from 'src/models/testing-controller';

const logger = createLogger('controllers/testingController');

export async function GetAppByIdAndLib(inputs: JSONObject): Promise<GetAppByIdAndLibOutput> {
    logger.debug('Calling getAppByIdAndLib with args: ', inputs);
    const params: GetAppByIdAndLibInput = {
        appId: inputs.appId,
        lib: inputs.lib
    };
    return transport.execute(GetAppByIdAndLibMain, params) as Promise<GetAppByIdAndLibOutput>;
}
