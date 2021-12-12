import createLogger from 'src/services/logger';
import transport from 'src/services/connection';
import { JSONObject } from 'src/types';
import { EditorTestingMain, EditorTestingOutput, EditorTestingInput } from 'src/models/monaco-ed';

const logger = createLogger('controllers/monacoEd');

export async function EditorTesting(inputs: JSONObject): Promise<EditorTestingOutput> {
    logger.debug('Calling editorTesting with args: ', inputs);
    const params: EditorTestingInput = {};
    return transport.execute(EditorTestingMain, params) as Promise<EditorTestingOutput>;
}
