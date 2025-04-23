import type { WithDescription } from '../docs/index.js';

import type { MediaTypes } from './media-type.js';


/**
 * Describes a single request body.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#request-body-object
 */
export type RequestBody = WithDescription & {

    /**
     * The content of the request body. The key is a media type or media type range.
     * For requests matching multiple keys, only the most specific key applies.
     * (e.g. 'text/plain' overrides 'text/*')
     */
    content: MediaTypes;

    /**
     * Whether the request body is required
     * @default false
     */
    required?: boolean;

};
