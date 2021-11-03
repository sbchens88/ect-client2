import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import {
    FeatureSwagMain,
    FeatureSwagOutput,
    FeatureSwagInput,
    FeatureSwagAsdMain,
    FeatureSwagAsdOutput,
    FeatureSwagAsdInput,
    FeatureSwagAdMain,
    FeatureSwagAdOutput,
    FeatureSwagAdInput
} from 'src/models/the-new';

const logger = createLogger('controllers/theNew');

export async function FeatureSwag(inputs: JSONObject): Promise<FeatureSwagOutput> {
    logger.debug('Calling featureSwag with args: ', inputs);
    const params: FeatureSwagInput = {};
    return transport.execute(FeatureSwagMain, params) as Promise<FeatureSwagOutput>;
}

export async function FeatureSwagAsd(inputs: JSONObject): Promise<FeatureSwagAsdOutput> {
    logger.debug('Calling featureSwagAsd with args: ', inputs);
    const params: FeatureSwagAsdInput = {};
    return transport.execute(FeatureSwagAsdMain, params) as Promise<FeatureSwagAsdOutput>;
}

export async function FeatureSwagAd(inputs: JSONObject): Promise<FeatureSwagAdOutput> {
    logger.debug('Calling featureSwagAd with args: ', inputs);
    const params: FeatureSwagAdInput = {};
    return transport.execute(FeatureSwagAdMain, params) as Promise<FeatureSwagAdOutput>;
}
