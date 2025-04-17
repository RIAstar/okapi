import { Components } from './components';
import { ExternalDocumentation } from './docs';
import { Info } from './info';
import { Paths } from './path';
import { SecurityRequirement } from './security';
import { Server } from './server';
import { SpecificationExtensions, Tag } from './meta';
import { Semver } from './string/semver';


/**
 * A document (or set of documents) that defines or describes an API. An OpenAPI definition uses and conforms to the
 * OpenAPI Specification.
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md#openapi-object
 */
export type OpenApiSpec = SpecificationExtensions & {

    /**
     * This string MUST be the [semantic version number](http://semver.org/spec/v2.0.0.html) of the [OpenAPI
     * Specification version](#versions) that the OpenAPI document uses. The `openapi` field SHOULD be used by tooling
     * specifications and clients to interpret the OpenAPI document. This is *not* related to the API
     * [`info.version`](#infoVersion) string. *
     */
    openapi: '3.1.0' & Semver,

    /**
     * Provides metadata about the API. The metadata MAY be used by tooling as required.
     */
    info: Info,

    /**
     * The default value for the `$schema` keyword within [Schema Objects](#schema-object) contained within this OAS
     * document. This MUST be in the form of a URI.
     */
    jsonSchemaDialect?: URL,

    /**
     * An array of Server Objects, which provide connectivity information to a target server. If the `servers` property
     * is not provided, or is an empty array, the default value would be a [Server Object](#serverObject) with a
     * [url](#serverUrl) value of `/`. *
     */
    servers?: Server[],

    /**
     * The available paths and operations for the API.
     */
    paths?: Paths,

    /**
     * An element to hold various schemas for the specification.
     */
    components?: Components,

    /**
     * A declaration of which security mechanisms can be used across the API. The list of values includes alternative
     * security requirement objects that can be used. Only one of the security requirement objects need to be satisfied
     * to authorize a request. Individual operations can override this definition.
     */
    security?: SecurityRequirement[],

    /**
     * A list of tags used by the specification with additional metadata. The order of the tags can be used to reflect
     * on their order by the parsing tools. Not all tags that are used by the [Operation Object](#operationObject) must
     * be declared. The tags that are not declared MAY be organized randomly or based on the tools' logic. Each tag name
     * in the list MUST be unique.
     */
    tags?: Tag[],

    /**
     * Additional external documentation.
     */
    externalDocs?: ExternalDocumentation

}
