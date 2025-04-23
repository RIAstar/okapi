import type { Callback } from './callback.js';
import type { ExternalDocumentation, WithDescription, WithSummary } from '../docs/index.js';
import type { Reference, RefList, RefMap, TagName } from '../meta/index.js';
import type { SecurityRequirement } from '../security/index.js';
import type { Server } from '../server/index.js';

import type { Parameter } from './parameter.js';
import type { RequestBody } from './request-body.js';
import type { ResponsesByStatus } from './response.js';


/**
 * Describes a single API operation on a path.
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operation-object
 */
export type Operation = WithSummary & WithDescription & {

    /**
     * Unique string used to identify the operation. The id MUST be unique among all operations described in the API.
     * The operationId value is case-sensitive. Tools and libraries MAY use the operationId to uniquely identify an
     * operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
     * This property is not required in the OpenAPI spec, but it is necessary to be able to generate code.
     * Hence it is required in this interface.
     */
    operationId?: string;

    /**
     * A list of tags for API documentation control.
     * Tags can be used for logical grouping of operations by resources or any other qualifier.
     */
    tags?: TagName[];

    /**
     * Additional external documentation for this operation.
     */
    externalDocs?: ExternalDocumentation;

    /**
     * A list of parameters that are applicable for this operation. If a parameter is already defined at the Path Item,
     * the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location. The list can use the Reference Object to
     * link to parameters that are defined at the OpenAPI Object's components/parameters.
     */
    parameters?: RefList<Parameter>;

    /**
     * The request body applicable for this operation. The requestBody is only supported in HTTP methods where the HTTP
     * 1.1 specification RFC7231 has explicitly defined semantics for request bodies. In other cases where the HTTP
     * spec is vague, requestBody SHALL be ignored by consumers.
     */
    requestBody?: RequestBody | Reference<RequestBody>;

    /**
     * The list of possible responses as they are returned from executing this operation.
     */
    responses: ResponsesByStatus;

    /**
     * A map of possible out-of-band callbacks related to the parent operation. The key is a unique identifier for the
     * Callback Object. Each value in the map is a Callback Object that describes a request that may be initiated by
     * the API provider and the expected responses. The key value used to identify the callback object is an expression,
     * evaluated at runtime, that identifies a URL to use for the callback operation.
     */
    callbacks?: RefMap<Callback>;

    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation.
     * @default false
     */
    deprecated?: boolean;

    /**
     * A declaration of which security mechanisms can be used for this operation. The list of values includes
     * alternative security requirement objects that can be used. Only one of the security requirement objects need to
     * be satisfied to authorize a request. This definition overrides any declared top-level security. To remove a
     * top-level security declaration, an empty array can be used.
     */
    security?: SecurityRequirement[];

    /**
     * An alternative server array to service this operation. If an alternative server object is specified at the Path
     * Item Object or Root Level, it will be overridden by this value.
     */
    servers?: Server[];

};

