import type { SpecificationExtensions } from '../meta/index.js';


/**
 * Configuration details for a supported OAuth Flow
 *
 * @see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauth-flow-object
 */
export type OAuthFlow =
    | ImplicitFlow
    | PasswordFlow
    | ClientCredentialsFlow
    | AuthorizationCodeFlow;

export type ImplicitFlow =
    & SpecificationExtensions
    & WithAuthorizationUrl
    & WithRefreshUrl
    & WithScopes;

export type PasswordFlow =
    & SpecificationExtensions
    & WithTokenUrl
    & WithRefreshUrl
    & WithScopes;

export type ClientCredentialsFlow =
    & SpecificationExtensions
    & WithTokenUrl
    & WithRefreshUrl
    & WithScopes;

export type AuthorizationCodeFlow =
    & SpecificationExtensions
    & WithAuthorizationUrl
    & WithTokenUrl
    & WithRefreshUrl
    & WithScopes;


type WithAuthorizationUrl = {
    /**
     * The authorization URL to be used for this flow. This MUST be in the form of a URL.
     */
    authorizationUrl: string;
};

type WithTokenUrl = {
    /**
     * The token URL to be used for this flow. This MUST be in the form of a URL.
     */
    tokenUrl: string;
};

type WithRefreshUrl = {
    /**
     * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
     */
    refreshUrl?: string;
};

type WithScopes = {
    /**
     * The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it.
     */
    scopes: Record<string, string>;
};
