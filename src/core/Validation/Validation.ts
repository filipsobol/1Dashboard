import dayjs from "dayjs";
import { Rules, Validators } from "@/interfaces/core/Validation";

export function validate(data: any, rules: Rules): Array<string> {
    return Object
        .entries(rules)
        .reduce((carry: any, [rule, argument]: [string, any]) => {
            const validator = validators[rule];

            if (!validator) {
                // Validator doesn't exists
                return carry;
            }

            const result = validator.length === 2
                ? validator(data, argument) // If validator accepts two parameters it needs the argument to perform the validation
                : validator(data) === argument; // If validator accepts one parameter the argument is used as an expected value

            if (!result) {
                carry.push([ rule, argument ]);
            }

            return carry;
        }, []);
}

const allowedImageTypes: Array<string> = [
    "image/gif",
    "image/jpeg",
    "image/png",
];

const emailRegex = /\S+@\S+\.\S+/;

const ipAddressRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

const validators: Validators = {
    required: (value: any): boolean => Boolean(value),

    /**
     * Equality validators
     */
    equal: (value: any, target: any): boolean => value == target,

    exact: (value: any, target: any): boolean => value === target,

    different: (value: any, target: any): boolean => value !== target,

    truthy: (value: any): boolean => !!value,

    falsy: (value: any): boolean => !value,

    /**
     * Type validators
     */
    number: (value: any): boolean => typeof value === "number" && isFinite(value),

    integer: (value: any): boolean => typeof value === "number" && Number.isInteger(value),

    string: (value: any): boolean => typeof value === "string",

    boolean: (value: any): boolean => typeof value === "boolean",

    undefined: (value: any): boolean => typeof value === "undefined",

    null: (value: any): boolean => value === null,

    array: (value: any): boolean => Array.isArray(value),

    object: (value: any): boolean => typeof value === "object",

    date: (value: any): boolean => dayjs(value).isValid(),

    file: (value: any): boolean => value instanceof File,

    instanceOf: (value: any, instance: any): boolean => value instanceof instance,

    /**
     * String validators
     */
    lowercase: (value: string): boolean => validators.string(value) && value === value.toLowerCase(),

    uppercase: (value: string): boolean => validators.string(value) && value === value.toUpperCase(),

    startsWith: (value: string, pattern: string): boolean => validators.string(value) && value.startsWith(pattern),

    endsWith: (value: string, pattern: string): boolean => validators.string(value) && value.endsWith(pattern),

    url: (value: string): boolean => {
        try {
            return validators.string(value)
                && new URL(value)
                && validators.startsWith(value, "http");
        } catch {
            return false;
        }
    },

    email: (value: string): boolean => validators.string(value) && emailRegex.test(value),

    ipAddress: (value: string): boolean => validators.string(value) && ipAddressRegex.test(value),

    /**
     * Number validators
     */
    negative: (value: number): boolean => validators.number(value) && value < 0,

    positive: (value: number): boolean => validators.number(value) && value > 0,

    between: (value: number, [min, max]: [number, number]): boolean => {
        return validators.number(value)
            && value >= min
            && value <= max;
    },

    lessThan: (value: number, maxValue: number): boolean => validators.number(value) && value < maxValue,

    lessThanOrEqual: (value: number, maxValue: number): boolean => validators.number(value) && value <= maxValue,

    greaterThan: (value: number, minValue: number): boolean => validators.number(value) && value > minValue,

    greaterThanOrEqual: (value: number, minValue: number): boolean => validators.number(value) && value >= minValue,

    even: (value: number): boolean => validators.number(value) && value % 2 === 0,

    odd: (value: number): boolean => validators.number(value) && value % 2 !== 0,

    /**
     * Regex validators
     */
    pattern: (value: any, pattern: RegExp): boolean => pattern.test(value),

    /**
     * File validators
     */
    mimeType: (value: File, target: string): boolean => validators.file(value) && value["type"] === target,

    image: (value: File): boolean => allowedImageTypes.includes(value["type"]),

    /**
     * Multi-type validators
     */
    empty: (value: string | Array<any>): boolean => {
        return (validators.array(value) || validators.string(value))
            && value.length === 0;
    },

    length: (value: string | Array<any>, expectedLength: number): boolean => {
        return (validators.array(value) || validators.string(value))
            && value.length === expectedLength;
    },

    minLength: (value: string | Array<any>, minLength: number): boolean => {
        return (validators.array(value) || validators.string(value))
            && value.length >= minLength;
    },

    maxLength: (value: string | Array<any>, maxLength: number): boolean => {
        return (validators.array(value) || validators.string(value))
            && value.length <= maxLength;
    },

    includes: (value: string | Array<any>, expected: any): boolean => {
        return (validators.string(value) || validators.array(value))
            && value.includes(expected);
    }
};
