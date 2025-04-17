import { URI } from '../string/uri';
import type { Brand } from '../util/brand';


/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 *
 * The `$ref` string value contains a URI [RFC3986](https://tools.ietf.org/html/rfc3986), which identifies the location
 * of the value being referenced.
 *
 * See the rules for resolving [Relative References](#relative-references-in-uris).
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#reference-object
 */
export type Reference<T extends Record<string, unknown>> =
    Record<string, unknown> & Omit<Brand<{
        $ref: URI;
    }, T>, '__brand'>;
// type trick: add property of type T and remove it again, just to avoid "unused generic type" error

export const Reference = <T extends Record<string, unknown>>($ref: string): Reference<T> =>
    ({ $ref: URI($ref) });

export const isReference = <T extends Record<string, unknown>>(o: T | Reference<T>): o is Reference<T> =>
    Object.prototype.hasOwnProperty.call(o, '$ref');

export const isInline = <T extends Record<string, unknown>>(o: T | Reference<T>): o is T =>
    !isReference(o);

export type RefList<T extends Record<string, unknown>> =
    (T | Reference<T>)[];

export type RefMap<V extends Record<string, unknown>, K extends string | number = string>
    = Record<K, V | Reference<V>>;
