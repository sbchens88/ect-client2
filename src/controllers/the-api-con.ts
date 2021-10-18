import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { AgetsomeThingsMain, AgetsomeThingsOutput, AgetsomeThingsInput } from 'src/models/the-api-con';

const logger = createLogger('controllers/theApiCon');

export async function AgetsomeThings(inputs: JSONObject): Promise<AgetsomeThingsOutput> {
    logger.debug('Calling agetsomeThings with args: ', inputs);
    const params: AgetsomeThingsInput = {
        num: inputs.num
    };
    return transport.execute(AgetsomeThingsMain, params) as Promise<AgetsomeThingsOutput>;
}
