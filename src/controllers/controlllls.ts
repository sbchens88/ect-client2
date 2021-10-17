import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AsdsnSssSwweMain, AsdsnSssSwweOutput, AsdsnSssSwweInput } from 'src/models/controlllls';

const logger = createLogger('controllers/controlllls');

export async function AsdsnSssSwwe(inputs: JSONObject): Promise<AsdsnSssSwweOutput> {
    logger.debug('Calling asdsnSSSSwwe with args: ', inputs);
    const params: AsdsnSssSwweInput = {
        appId: inputs.appId
    };
    return transport.execute(AsdsnSssSwweMain, params) as Promise<AsdsnSssSwweOutput>;
}
