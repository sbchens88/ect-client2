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
    FeatureSwagAdInput,
    FeatureSwagAdpppppMain,
    FeatureSwagAdpppppOutput,
    FeatureSwagAdpppppInput,
    FeatureSwagAdpppppddMain,
    FeatureSwagAdpppppddOutput,
    FeatureSwagAdpppppddInput
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

export async function FeatureSwagAdppppp(inputs: JSONObject): Promise<FeatureSwagAdpppppOutput> {
    logger.debug('Calling featureSwagAdppppp with args: ', inputs);
    const params: FeatureSwagAdpppppInput = {};
    return transport.execute(FeatureSwagAdpppppMain, params) as Promise<FeatureSwagAdpppppOutput>;
}

export async function FeatureSwagAdpppppdd(inputs: JSONObject): Promise<FeatureSwagAdpppppddOutput> {
    logger.debug('Calling featureSwagAdpppppdd with args: ', inputs);
    const params: FeatureSwagAdpppppddInput = {};
    return transport.execute(FeatureSwagAdpppppddMain, params) as Promise<FeatureSwagAdpppppddOutput>;
}
