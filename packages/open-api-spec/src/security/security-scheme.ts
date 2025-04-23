import type { RefMap } from '../meta/index.js';
import type { WithDescription } from '../docs/index.js';

import type { OAuthFlow } from './oauth-flow.js';


/**
 * Defines a security scheme for API operations
 * @see https://swagger.io/specification/#securitySchemeObject
 */
export type SecurityScheme =
    | ApiKeySecurityScheme
    | HttpSecurityScheme
    | OAuth2SecurityScheme
    | OpenIdConnectSecurityScheme;

/**
 * API Key authentication scheme
 */
export type ApiKeySecurityScheme = WithDescription & {
    type: 'apiKey';

    /**
     * Name of the header, query or cookie parameter
     * @example 'X-API-KEY'
     */
    name: string;

    /**
     * Location of the API key
     */
    in: 'query' | 'header' | 'cookie';
};

/**
 * HTTP authentication scheme
 */
export type HttpSecurityScheme = WithDescription & {
    type: 'http';

    /**
     * HTTP Authorization scheme (RFC7235)
     * @example 'basic', 'bearer', 'digest'
     */
    scheme: string;

    /**
     * Hint for bearer token format
     * @example 'JWT' for JWT tokens
     */
    bearerFormat?: string;
};

/**
 * OAuth2 authentication scheme (RFC6749)
 */
export type OAuth2SecurityScheme = WithDescription & {
    type: 'oauth2';

    /**
     * Configuration for supported OAuth2 flows
     */
    flows: RefMap<OAuthFlow>;
};

/**
 * OpenID Connect authentication scheme
 */
export type OpenIdConnectSecurityScheme = WithDescription & {
    type: 'openIdConnect';

    /**
     * URL to discover OAuth2 configuration
     * @example 'https://example.com/.well-known/openid-configuration'
     */
    openIdConnectUrl: string;
};

// Type Guards
export const isApiKeyScheme = (scheme: SecurityScheme): scheme is ApiKeySecurityScheme =>
    scheme.type === 'apiKey';
