import type { ExternalDocumentation, WithDescription } from '../docs/index.js';
import type { SpecificationExtensions } from '../meta/index.js';


/**
 * Base schema definition with common properties
 */
export type BaseSchema = SpecificationExtensions & WithDescription & {

    // Must be specified by inheriting type.
    type: never;

    /**
     * Adds support for polymorphism. The discriminator is an object name that is used to differentiate between other
     * schemas which may satisfy the payload description. See Composition and Inheritance for more details.
     */
    discriminator?: Discriminator;

    /** Additional external documentation for this schema. */
    externalDocs?: ExternalDocumentation;

    deprecated?: boolean;

};

/**
 * When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be
 * used to aid in serialization, deserialization, and validation. The discriminator is a specific object in a schema
 * which is used to inform the consumer of the document of an alternative schema based on the value associated with it.
 *
 * When using the discriminator, inline schemas will not be considered.
 * The discriminator object is legal only when using one of the composite keywords oneOf, anyOf, allOf.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#discriminator-object
 */
export type Discriminator = {

    /** The name of the property in the payload that will hold the discriminator value. */
    propertyName: string;

    /** An object to hold mappings between payload values and schema names or references. */
    mapping?: Record<string, string>;

};

