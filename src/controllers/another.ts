import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { simplecalcModel, simplecalcOutput, simplecalcInput } from 'src/models/MyPgmMod';

const logger = createLogger('controllers/another');

export async function TestingsomeYaml(inputs: JSONObject): Promise<simplecalcOutput> {
    logger.debug('Calling testingsomeYaml');
    const p1Array = inputs.p1.map((i: any) => {
        i.agentName = i.agentName;
        return i;
    });

    const params: simplecalcInput = {
        Input: inputs.Input,
        Param1: p1Array,
        Output: inputs.Output
    };

    return transport.execute(simplecalcModel, params) as Promise<simplecalcOutput>;
}
