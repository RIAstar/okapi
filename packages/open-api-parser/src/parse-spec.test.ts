import { fail } from 'assert';
import { rm, writeFile } from 'fs/promises';
import { join } from 'path';

import { parseSpec } from './parse-spec.js';


it(`doesn't accept unknown file types`, () => {
    return parseSpec('/path/to/file.csv')
        .then(() => fail('Should fail to parse'))
        .catch(error => {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe('Input file "/path/to/file.csv" is neither y(a)ml nor json');
        });
});

const withFile = (ext: 'yml' | 'yaml' | 'json', content: string) => {
    const filePath = './tmp.' + ext;

    return writeFile(filePath, content)
        .then(() => parseSpec(filePath))
        .finally(() => rm(filePath));
}

describe('JSON parsing', () => {

    it(`fails on an empty document`, () => {
        return withFile('json', '')
            .then(() => fail('Should fail to parse'))
            .catch(error => expect(error.message).toBe('Unexpected end of JSON input'))
    });

    it(`can parse the Swagger petstore API example`, () => {
        return parseSpec(join(__dirname, '../e2e/pet-store.json'))
            .then(json => expect(json).toBeTypeOf('object'));
    });

    it(`resolves internal references`, () => {
        const content = {
            foo: { $ref: '#/schema/bar' },
            schema: { bar: { message: 'success' } }
        };

        return withFile('json', JSON.stringify(content))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- keep the test simple
            .then((json: any) => expect(json.foo).toBe(json.schema.bar));
    });

});

describe('YAML parsing', () => {

    it(`fails on an empty document`, () => {
        return withFile('yml', '')
            .then(() => fail('Should fail to parse'))
            .catch(error => expect(error.message).toContain('Expected a file path, URL, or object.'));
    });

    it(`can parse the Swagger petstore API example`, () => {
        return parseSpec(join(__dirname, '../e2e/pet-store.yml'))
            .then(json => expect(json).toBeTypeOf('object'));
    });

    it(`yields the exact same result as parsing the equivalent JSON schema`, () => {
        return Promise
            .all([
                parseSpec(join(__dirname, '../e2e/pet-store.json')),
                parseSpec(join(__dirname, '../e2e/pet-store.yml'))
            ])
            .then(([json, yml]) => expect(json).toStrictEqual(yml));
    });

    it(`resolves internal references`, () => {
        const content = `
            foo:
              $ref: '#/schema/bar'
            schema:
              bar:
                message: success`;

        return withFile('yml', content)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- keep the test simple
            .then((json: any) => expect(json.foo).toBe(json.schema.bar));
    });

});

