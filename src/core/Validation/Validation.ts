import { Rules, Validators } from "@/interfaces/core/Validation";

export function validate(data: any, rules: Rules): boolean {
    return Object
        .entries(rules)
        .every(([rule, argument]: [string, any]) => {
            const validator = validators[rule];

            if (!validator) {
                // Validator doesn't exists
                return false;
            }

            if (validator.length === 2) {
                // If validator accepts two parameters it needs the argument to perform the validation
                return validator(data, argument);
            }

            // If validator accepts one parameter the argument is used to turn the validation on or off
            return argument
                ? validator(data)
                : true;
        });
}

const allowedImageTypes: Array<string> = [
    "image/gif",
    "image/jpeg",
    "image/png",
];

const emailRegex = /\S+@\S+\.\S+/;

const ipAddressRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;

const validators: Validators = {
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

    date: (value: any): boolean => value instanceof Date || !isNaN(Date.parse(value)),

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
     * Array validators
     */
    empty: (value: Array<any>): boolean => validators.array(value) && value.length === 0,

    length: (value: Array<any>, expectedLength: number): boolean => {
        return validators.array(value) && value.length === expectedLength;
    },

    minLength: (value: Array<any>, minLength: number): boolean => {
        return validators.array(value) && value.length >= minLength;
    },

    maxLength: (value: Array<any>, maxLength: number): boolean => {
        return validators.array(value) && value.length <= maxLength;
    },

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
    mimeType: (value: File, target: string): boolean => value["type"] === target,

    image: (value: File): boolean => allowedImageTypes.includes(value["type"]),

    /**
     * Multi-type validators
     */
    includes: (value: string | Array<any>, expected: any): boolean => {
        return (validators.string(value) || validators.array(value))
            && value.includes(expected);
    }
};
