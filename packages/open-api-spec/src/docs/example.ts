import type { RefMap, SpecificationExtensions } from '../meta';
import type { XOR } from '../util/xor';

import type { WithDescription } from './description';
import type { WithSummary } from './summary';


/**
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#example-object
 */
export type Example<T = object> = SpecificationExtensions & WithSummary & WithDescription & XOR<

    /**
     * Embedded literal example. The value field and externalValue field are mutually exclusive.
     * To represent examples of media types that cannot naturally represented in JSON or YAML,
     * use a string value to contain the example, escaping where necessary.
     */
    { value: T },

    /**
     * A URL that points to the literal example.
     * This provides the capability to reference examples that cannot easily be included in JSON or YAML documents.
     * The value field and externalValue field are mutually exclusive.
     */
    { externalValue: string }

>;

export type WithExample<T> = Record<string, never> | XOR<

    /**
     * Example of the media type. The example SHOULD match the specified schema and encoding properties if present.
     * The example field is mutually exclusive of the examples field. Furthermore, if referencing a schema which
     * contains an example, the example value SHALL override the example provided by the schema.
     * To represent examples of media types that cannot naturally be represented in JSON or YAML,
     * a string value can contain the example with escaping where necessary.
     */
    { example: T },

    /**
     * Examples of the media type. Each example SHOULD contain a value in the correct format as specified in the
     * parameter encoding. The examples field is mutually exclusive of the example field. Furthermore,
     * if referencing a schema which contains an example, the examples value SHALL override the example
     * provided by the schema.
     */
    { examples: RefMap<Example<T>> }

>;
