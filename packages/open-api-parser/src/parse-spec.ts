import { readFile } from 'node:fs/promises';

import { parse } from 'yaml';
import { $RefParser } from '@apidevtools/json-schema-ref-parser';
import type { JSONSchema } from '@apidevtools/json-schema-ref-parser';


export const parseSpec = (filePath: string): Promise<JSONSchema> => {
    if (filePath.endsWith('.json')) return parseJson(filePath);
    if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) return parseYaml(filePath);
    return Promise.reject(new Error(`Input file "${filePath}" is neither y(a)ml nor json`));
}

const resolve = (json: unknown) => $RefParser.dereference(json);

const parseJson = (filePath: string) =>
    readFile(filePath, 'utf8')
        .then(JSON.parse)
        .then(resolve);

const parseYaml = (filePath: string) =>
    readFile(filePath, 'utf8')
        .then(parse)
        .then(resolve);

