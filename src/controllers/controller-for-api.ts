import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    GetUserByUserNameEpMain,
    GetUserByUserNameEpOutput,
    GetUserByUserNameEpInput
} from 'src/models/controller-for-api';

const logger = createLogger('controllers/controllerForApi');

export async function GetUserByUserNameEp(inputs: JSONObject): Promise<GetUserByUserNameEpOutput> {
    logger.debug('Calling getUserByUserNameEP with args: ', inputs);
    const params: GetUserByUserNameEpInput = {
        user: inputs.user
    };
    return transport.execute(GetUserByUserNameEpMain, params) as Promise<GetUserByUserNameEpOutput>;
}
