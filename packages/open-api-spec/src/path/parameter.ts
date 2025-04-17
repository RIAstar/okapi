import type { XOR } from '../util/xor';
import type { Reference } from '../meta';
import type { Schema } from '../schema';
import type { WithDescription } from '../docs';

import type { MediaTypes } from './media-type';


/**
 * Describes a single operation parameter.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#parameter-object
 */
export type Parameter =
    | QueryParameter
    | HeaderParameter
    | PathParameter
    | CookieParameter;

type BaseParameter = WithDescription & {

    /*
     * The name of the parameter. Parameter names are case sensitive.
     * If in is "path", the name field MUST correspond to a template expression occurring within the path field in the
     * Paths Object. See Path Templating for further information. If in is "header" and the name field is "Accept",
     * "Content-Type" or "Authorization", the parameter definition SHALL be ignored. For all other cases, the name
     * corresponds to the parameter name used by the in property.
     */
    name: string;

    /**
     * Determines whether this parameter is mandatory. If the parameter location is "path", this property is REQUIRED
     * and its value MUST be true. Otherwise, the property MAY be included and its default value is false.
     */
    required?: boolean;

    /** Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is false. */
    deprecated?: boolean;

    /**
     * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and allows sending a
     * parameter with an empty value. Default value is false. If style is used, and if behavior is n/a (cannot be
     * serialized), the value of allowEmptyValue SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is
     * likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean;

    /**
     * When this is true, parameter values of type array or object generate separate parameters for each value of the
     * array or key-value pair of the map. For other types of parameters this property has no effect. When style is
     * form, the default value is true. For all other styles, the default value is false.
     */
    explode?: boolean;

} & XOR<

    /** The schema defining the type used for the parameter. */
    { schema: Schema | Reference<Schema> },

    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it. The
     * map MUST only contain one entry.
     */
    { content: MediaTypes }

>;

// Parameter Styles (RFC6570)
export type ParameterStyle =
    | 'matrix'
    | 'label'
    | 'simple'
    | 'form'
    | 'spaceDelimited'
    | 'pipeDelimited'
    | 'deepObject';

// Specialized Parameter Types
export type QueryParameter = BaseParameter & {
    in: 'query';

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by RFC3986 :/?#[]@!$&'()*+,;=
     * to be included without percent-encoding. This property only applies to parameters with an in value of query. The
     * default value is false.
     */
    allowReserved?: boolean;

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * @default form
     */
    style?: Extract<ParameterStyle, 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'>;
};

export type HeaderParameter = BaseParameter & {
    in: 'header';

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * @default simple
     */
    style?: Extract<ParameterStyle, 'simple'>;
};

export type PathParameter = BaseParameter & {
    in: 'path';
    required: true;

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * @default simple
     */
    style?: Extract<ParameterStyle, 'matrix' | 'label' | 'simple'>;
};

export type CookieParameter = BaseParameter & {
    in: 'cookie';

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value.
     * @default form
     */
    style?: Extract<ParameterStyle, 'form'>;
};

