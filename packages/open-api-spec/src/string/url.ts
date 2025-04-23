import type { Brand } from '../util/brand.js';


/**
 * A string that represents a URL.
 */
export type URL = Brand<string, '@okapi/url'>;

export const isURL = (s: string): s is URL =>
    /^https?:\/\/([\da-z.-]+\.[a-z.]{2,6}|[\d.]+)([/:?=&#]{1}[\da-z.-]+)*[/?]?$/igm.test(s);

export function assertURL(s: string): asserts s is URL {
    if (!isURL(s)) throw new Error(`String(${s}) is not a valid URL format`);
}

export const URL = (s: string): URL => {
    assertURL(s);
    return s;
};
