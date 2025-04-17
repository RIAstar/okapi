import type { WithDescription } from '../docs';
import type { SpecificationExtensions } from '../meta';


/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#server-variable-object
 */
export type ServerVariable = SpecificationExtensions & WithDescription & {

    /**
     * An enumeration of string values to be used if the substitution options are from a limited set.
     */
    enum?: string[];

    /**
     * The default value to use for substitution, and to send, if an alternate value is _not_ supplied.
     * Note this behavior is different than the Schema Object's treatment of default values,
     * because in those cases parameter values are optional.
     * If the enum is defined, the value MUST exist in the enum's values.
     */
    default: string;

}
