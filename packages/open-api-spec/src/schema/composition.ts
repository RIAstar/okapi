import type { Reference, RefList } from '../meta/index.js';

import type { Schema } from './schema.js';


export type XorSchema = {
    oneOf: RefList<Schema>;
};

export const isXor = (s: unknown): s is XorSchema =>
    Object.prototype.hasOwnProperty.call(s, 'oneOf');


export type UnionSchema = {
    anyOf: RefList<Schema>;
};

export const isUnion = (s: unknown): s is UnionSchema =>
    Object.prototype.hasOwnProperty.call(s, 'anyOf');


export type IntersectionSchema = {
    allOf: RefList<Schema>;
};

export const isIntersection = (s: unknown): s is IntersectionSchema =>
    Object.prototype.hasOwnProperty.call(s, 'allOf');


export type WithoutSchema = {
    not: Schema | Reference<Schema>;
};

export const isWithout = (s: unknown): s is WithoutSchema =>
    Object.prototype.hasOwnProperty.call(s, 'not');


export type CompositionSchema =
    | XorSchema
    | UnionSchema
    | IntersectionSchema
    | WithoutSchema;
