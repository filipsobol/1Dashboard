export interface Validators {
    [key: string]: (value: any, parameter?: any) => boolean;
}

export interface Rules {
    /**
     * Equality validators
     */
    equal?: any;

    exact?: any;

    different?: any;

    truthy?: any;

    falsy?: any;

    /**
     * Type validators
     */
    number?: boolean;

    integer?: boolean;

    string?: boolean;

    boolean?: boolean;

    undefined?: boolean;

    null?: boolean;

    array?: boolean;

    object?: boolean;

    date?: boolean;

    file?: boolean;

    instanceOf?: any;

    /**
     * String validators
     */
    lowercase?: boolean;

    uppercase?: boolean;

    startsWith?: string;

    endsWith?: string;

    url?: boolean;

    email?: boolean;

    ipAddress?: boolean;

    /**
     * Number validators
     */
    negative?: boolean;

    positive?: boolean;

    between?: [number, number];

    lessThan?: number;

    lessThanOrEqual?: number;

    greaterThan?: number;

    greaterThanOrEqual?: number;

    even?: boolean;

    odd?: boolean;

    /**
     * Regex validators
     */
    pattern?: RegExp;

    /**
     * File validators
     */
    mimeType?: string;

    image?: boolean;

    /**
     * Multi-type validators
     */
    empty?: string | Array<any>;

    length?: string | Array<any>;

    minLength?: string | Array<any>;

    maxLength?: string | Array<any>;

    includes?: string | Array<any>;
}
