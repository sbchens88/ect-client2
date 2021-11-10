import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/stingYa');

export async function YamlTeeing(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling yamlTeeing');

    const params: simplecalcInput = {
        Input: inputs.Input,
        Param1: inputs.pa1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}

export async function YamlTeeingQq(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling yamlTeeingQq');

    const params: simplecalcInput = {
        Input: inputs.Input,
        Param1: inputs.pa1,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
