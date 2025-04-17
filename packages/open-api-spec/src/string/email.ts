import { Brand } from '../util/brand';


/**
 * A string that represents an e-mail address.
 */
export type Email = Brand<string, '@okapi/email'>;

export const isEmail = (s: string): s is Email =>
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(s);

export function assertEmail(s: string): asserts s is Email {
    if (!isEmail(s)) throw new Error(`String(${s}) is not a valid Email format`);
}

export const Email = (s: string): Email => {
    assertEmail(s);
    return s;
};
