import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/stingWi');

export async function YamlTest(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling yamlTest');

    const params: simplecalcInput = {
        Input: inputs.in,
        Param1: inputs.p1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
