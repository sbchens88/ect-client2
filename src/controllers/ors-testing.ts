import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/orsTesting');

export async function YamlValidTest(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling yamlValidTest');

    const params: simplecalcInput = {
        Input: inputs.in,
        Param1: inputs.p1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
