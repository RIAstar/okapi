/**
 * While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the
 * specification at certain points.
 *
 * The extensions properties are implemented as patterned fields that are always prefixed by `"x-"`.
 *
 * Field Pattern | Type | Description
 * ---|:---:|---
 * <a name="infoExtensions"></a>^x- | Any | Allows extensions to the OpenAPI Schema. The field name MUST begin with
 * `x-`, for example, `x-internal-id`. The value can be `null`, a primitive, an array or an object. Can have any valid
 * JSON format value.
 *
 * The extensions may or may not be supported by the available tooling, but those may be extended as well to add
 * requested support (if tools are internal or open-sourced).
 */
export type SpecificationExtensions = Record<SpecificationExtensionKey, unknown>;

export type SpecificationExtensionKey = `x-${string}`;

export const isSpecificationExtensionKey =
    (key: string): key is SpecificationExtensionKey => key.startsWith('x-');

export const hasSpecificationExtension =
    (obj: Record<string, unknown>): obj is SpecificationExtensions => Object.keys(obj).some(isSpecificationExtensionKey);
