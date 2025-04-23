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

const withFiles = (ext: 'yml' | 'yaml' | 'json', mainContent: string, referencedContents: string[] = []) => {
    const files = [mainContent, ...referencedContents].map((content, index) => ({
        path: `./tmp.${index}.${ext}`,
        content
    }));

    return Promise.all(files.map(({ path, content }) => writeFile(path, content)))
        .then(() => parseSpec(files[0].path))
        .finally(() => Promise.all(files.map(({ path }) => rm(path))));
}

describe('JSON parsing', () => {

    it(`fails on an empty document`, () => {
        return withFiles('json', '')
            .then(() => fail('Should fail to parse'))
            .catch(error => expect(error.message).toContain('is not a valid JSON Schema'));
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

        return withFiles('json', JSON.stringify(content))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- keep the test simple
            .then((json: any) => expect(json.foo).toBe(json.schema.bar));
    });

    it(`resolves external references`, () => {
        const main = { foo: { $ref: './tmp.1.json#/schema/bar' } };
        const referenced = [
            { schema: { bar: { success: true, message: { $ref: './tmp.2.json#/deeper/baz' } } } },
            { deeper: { baz: { message: 'success', description: 'Hurrah!' } } }
        ];

        return withFiles('json', JSON.stringify(main), referenced.map(o => JSON.stringify(o)))
            .then(json => expect(json).toStrictEqual({
                foo: {
                    success: true,
                    message: { message: 'success', description: 'Hurrah!' }
                }
            }));
    });

});

describe('YAML parsing', () => {

    it(`fails on an empty document`, () => {
        return withFiles('yml', '')
            .then(() => fail('Should fail to parse'))
            .catch(error => expect(error.message).toContain('is not a valid JSON Schema'));
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

        return withFiles('yml', content)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any -- keep the test simple
            .then((json: any) => expect(json.foo).toBe(json.schema.bar));
    });

    it(`resolves external references`, () => {
        const main = `
            foo:
              $ref: './tmp.1.yml#/schema/bar'`;

        const referenced = [`
            schema:
              bar:
                success: true
                message:
                  $ref: './tmp.2.yml#/deeper/baz'`, `
            deeper:
              baz:
                message: 'success'
                description: 'Hurrah!'`
        ];

        return withFiles('yml', main, referenced)
            .then(json => expect(json).toStrictEqual({
                foo: {
                    success: true,
                    message: { message: 'success', description: 'Hurrah!' }
                }
            }));
    });

});

