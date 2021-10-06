import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    DeleteAppByIdtestinMain,
    DeleteAppByIdtestinOutput,
    DeleteAppByIdtestinInput
} from 'src/models/applications-mgr';

const logger = createLogger('controllers/applicationsMgr');

export async function DeleteAppByIdtestin(inputs: JSONObject): Promise<DeleteAppByIdtestinOutput> {
    logger.debug('Calling deleteAppByIdtestin with args: ', inputs);
    const params: DeleteAppByIdtestinInput = {
        appId: inputs.appId
    };
    return transport.execute(DeleteAppByIdtestinMain, params) as Promise<DeleteAppByIdtestinOutput>;
}
