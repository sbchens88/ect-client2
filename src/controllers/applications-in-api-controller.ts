import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    GetApplicationsRecordssMain,
    GetApplicationsRecordssOutput,
    GetApplicationsRecordssInput
} from 'src/models/applications-in-api-controller';

const logger = createLogger('controllers/applicationsInApiController');

export async function GetApplicationsRecordss(inputs: JSONObject): Promise<GetApplicationsRecordssOutput> {
    logger.debug('Calling getApplicationsRecordss with args: ', inputs);
    const params: GetApplicationsRecordssInput = {};
    return transport.execute(GetApplicationsRecordssMain, params) as Promise<GetApplicationsRecordssOutput>;
}
