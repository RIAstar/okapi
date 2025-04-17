import type { RefMap } from '../meta';
import type { WithDescription } from '../docs';

import type { Header } from './header';
import type { HttpStatus } from './http-status';
import type { Link } from './link';
import type { MediaTypes } from './media-type';


/**
 * Container for expected operation responses mapped to HTTP status codes.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#responses-object
 */
export type ResponsesByStatus = Partial<RefMap<Response, HttpStatus | 'default'>>;

/**
 * Describes a single API response with optional headers, content, and links.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#response-object
 */
export type Response = WithDescription & {

    /**
     * Response headers (case-insensitive names per RFC7230).
     * Note: 'Content-Type' headers will be ignored if defined here.
     */
    headers?: RefMap<Header>;

    /**
     * Response payload descriptions by media type.
     * More specific types override ranges (e.g. 'text/plain' overrides 'text/*').
     */
    content?: MediaTypes;

    /**
     * Design-time links to related operations.
     * Keys follow Component Object naming constraints.
     */
    links?: RefMap<Link>;

};
