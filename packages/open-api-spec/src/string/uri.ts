import type { Brand } from '../util/brand.js';


/**
 * A string that represents a [URI](https://tools.ietf.org/html/rfc3986).
 */
export type URI = Brand<string, '@okapi/uri'>;

export const isURI = (s: string): s is URI =>
    /^\.?\/([\da-z.-]+\.[a-z.]{2,6}|[\d.]+)$/igm.test(s);

export function assertURI(s: string): asserts s is URI {
    if (!isURI(s)) throw new Error(`String(${s}) is not a valid URI format`);
}

export const URI = (s: string): URI => {
    assertURI(s);
    return s;
};
