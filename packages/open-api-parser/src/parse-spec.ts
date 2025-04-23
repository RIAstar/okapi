import { $RefParser } from '@apidevtools/json-schema-ref-parser';
import type { JSONSchema } from '@apidevtools/json-schema-ref-parser';


const validExtensions = ['.json', '.yml', 'yaml'];

export const parseSpec = (filePath: string): Promise<JSONSchema> =>
    validExtensions.some(ext => filePath.endsWith(ext))
        ? $RefParser
            .parse(filePath)
            .then(json => $RefParser.dereference(json))
        : Promise.reject(new Error(`Input file "${filePath}" is neither y(a)ml nor json`));
