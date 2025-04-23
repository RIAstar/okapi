import type { URI } from '../string/uri.js';
import type { RefMap } from '../meta/index.js';

import type { BaseSchema } from './base.js';
import type { Schema } from './schema.js';


export type ObjectSchema = BaseSchema & {
    type: 'object';
    properties?: RefMap<Property>;
    required?: string[];
    additionalProperties?: boolean | Schema;
    minProperties?: number;
    maxProperties?: number;
};

export const isObject = (s: BaseSchema): s is ObjectSchema =>
    s.type === 'object';

export type Property = Omit<Schema, 'required'> & {
    required?: boolean;
    readonly?: boolean;
    writeOnly?: boolean;
    xml?: XML;
};

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be
 * used to add that information. See examples for expected behavior.
 */
export type XML = {

    /**
     * Replaces the name of the element/attribute used for the described schema property. When defined within items, it
     * will affect the name of the individual XML elements within the list. When defined alongside type being array
     * (outside the items), it will affect the wrapping element and only if wrapped is true. If wrapped is false, it
     * will be ignored.
     */
    name?: string;

    /** The URI of the namespace definition. This MUST be in the form of an absolute URI. */
    namespace?: URI;

    /** The prefix to be used for the name. */
    prefix?: string;

    /**
     * Declares whether the property definition translates to an attribute instead of an element.
     * @default false
     */
    attribute?: boolean;

    /**
     * MAY be used only for an array definition. Signifies whether the array is wrapped (for example,
     * <books><book/><book/></books>) or unwrapped (<book/><book/>). Default value is false. The definition takes effect
     * only when defined alongside type being array (outside the items).
     */
    wrapped?: boolean;

}

