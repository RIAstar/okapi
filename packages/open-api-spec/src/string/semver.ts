import type { Brand } from '../util/brand.js';


/**
 * @see http://semver.org/spec/v2.0.0.html
 */
export type Semver = Brand<`${string}.${number}.${number}`, '@okapi/semver'>;

export const isSemver = (s: string): s is Semver => /^\d\.\d\.\d$/.test(s);

export function assertSemver(s: string): asserts s is Semver {
    if (!isSemver(s)) throw new Error(`String(${s}) is not a valid Semver format`);
}

export const Semver = (s: string): Semver => {
    assertSemver(s);
    return s;
};
