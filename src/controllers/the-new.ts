import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { FeatureSwagMain, FeatureSwagOutput, FeatureSwagInput } from 'src/models/the-new';

const logger = createLogger('controllers/theNew');

export async function FeatureSwag(inputs: JSONObject): Promise<FeatureSwagOutput> {
    logger.debug('Calling featureSwag with args: ', inputs);
    const params: FeatureSwagInput = {};
    return transport.execute(FeatureSwagMain, params) as Promise<FeatureSwagOutput>;
}
