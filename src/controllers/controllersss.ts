import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { poccblpgmModel, poccblpgmOutput, poccblpgmInput } from 'src/models/layout';

const logger = createLogger('controllers/controllersss');

export async function GetYamlTee(inputs: JSONObject): Promise<poccblpgmOutput> {
    logger.debug('Calling getYamlTee');
    const params: poccblpgmInput = {
        LAYOUTREC: inputs.LAYOUTREC
    };

    return transport.execute(poccblpgmModel, params) as Promise<poccblpgmOutput>;
}
