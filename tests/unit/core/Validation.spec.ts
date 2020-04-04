import { validate } from "@/core/Validation/Validation";

describe("Validation", () => {
    it ("accepts data and single rule", () => {
        const result = validate("test", {
            string: true,
        });

        expect(result).toHaveLength(0);
    });

    it ("accepts data and multiple rules", () => {
        const result = validate("test", {
            string: true,
            lowercase: true
        });

        expect(result).toHaveLength(0);
    });

    it ("accepts data with arguments", () => {
        const result = validate("test", {
            exact: "test",
        });

        expect(result).toHaveLength(0);
    });

    it ("skips disabled rules", () => {
        const result = validate("test", {
            number: false,
            boolean: false,
        });

        expect(result).toHaveLength(0);
    });

    it ("skips validation when data is empty and not required", () => {
        const result = validate("", {
            number: false,
            boolean: false,
        });

        expect(result).toHaveLength(0);
    });

    it ("succeeds when there are no rules", () => {
        const result = validate("test", {});

        expect(result).toHaveLength(0);
    });

    it ("ignores validator that doesn't exists", () => {
        const result = validate("test", {
            // @ts-ignore
            nonExistentValidator: true,
        });

        expect(result).toHaveLength(0);
    });

    describe("Rules", () => {
        describe("Required", () => {
            it ("succeeds when required data is present", () => {
                const result = validate("test", {
                    required: true,
                });

                expect(result).toHaveLength(0);
            });

            it ("fails when required data is missing", () => {
                const result = validate("", {
                    required: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Equal", () => {
            it ("succeeds when data and value are equal", () => {
                const result = validate("test", {
                    equal: "test"
                });

                expect(result).toHaveLength(0);
            });

            it ("fails when data and value are not equal", () => {
                const result = validate("test", {
                    equal: "test123"
                });

                expect(result).not.toHaveLength(0);
            });

            it ("succeeds when data and value are equal, but not identical", () => {
                const result = validate("1", {
                    equal: true
                });

                expect(result).toHaveLength(0);
            });

            it ("fails when data and value are not equal and not identical", () => {
                const result = validate("1", {
                    equal: false
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Exact", () => {
            it ("succeeds when data and value are exact", () => {
                const result = validate("test", {
                    exact: "test"
                });

                expect(result).toHaveLength(0);
            });

            it ("fails when data and value are not equal", () => {
                const result = validate("1", {
                    exact: true
                });

                expect(result).not.toHaveLength(0);
            });

            it ("fails when data and value are equal, but not identical", () => {
                const result = validate("1", {
                    exact: true
                });

                expect(result).not.toHaveLength(0);
            });

            it ("fails when data and value are not equal and not identical", () => {
                const result = validate("1", {
                    exact: false
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Different", () => {
            it ("succeeds when data and value are different, but same type", () => {
                const result = validate("test", {
                    different: "test1"
                });

                expect(result).toHaveLength(0);
            });

            it ("fails when data and value are not different, but same type", () => {
                const result = validate("test", {
                    different: "test"
                });

                expect(result).not.toHaveLength(0);
            });

            it ("succeeds when data and value are equal, but different", () => {
                const result = validate("1", {
                    different: true
                });

                expect(result).toHaveLength(0);
            });

            it ("succeeds when data and value are not equal and not identical", () => {
                const result = validate("1", {
                    different: false
                });

                expect(result).toHaveLength(0);
            });
        });

        describe("String", () => {
            it("succeeds when data is a string", () => {
                const result = validate("test", {
                    string: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is am empty string", () => {
                const result = validate("", {
                    string: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    string: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Number", () => {
            it("succeeds when data is an integer", () => {
                const result = validate(123, {
                    number: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is a float", () => {
                const result = validate(123.45, {
                    number: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is 0", () => {
                const result = validate(0, {
                    number: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is a numeric", () => {
                const result = validate("123", {
                    number: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a number", () => {
                const result = validate("123", {
                    number: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Integer", () => {
            it("succeeds when data is an integer", () => {
                const result = validate(123, {
                    integer: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is a float", () => {
                const result = validate(123.45, {
                    integer: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is a numeric", () => {
                const result = validate("123", {
                    integer: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("succeeds when data is 0", () => {
                const result = validate(0, {
                    integer: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a number", () => {
                const result = validate("123", {
                    integer: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Numeric", () => {
            it("succeeds when data is an integer", () => {
                const result = validate(123, {
                    numeric: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is a float", () => {
                const result = validate(123.45, {
                    numeric: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is a numeric", () => {
                const result = validate("123", {
                    numeric: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is 0", () => {
                const result = validate(0, {
                    numeric: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is empty string", () => {
                const result = validate("", {
                    required: true,
                    numeric: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a number", () => {
                const result = validate([], {
                    required: true,
                    numeric: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Boolean", () => {
            it("succeeds when data is true", () => {
                const result = validate(true, {
                    boolean: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is false", () => {
                const result = validate(false, {
                    boolean: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a boolean", () => {
                const result = validate("test", {
                    boolean: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Undefined", () => {
            it("succeeds when data is undefined", () => {
                const result = validate(undefined, {
                    undefined: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not undefined", () => {
                const result = validate("test", {
                    undefined: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Null", () => {
            it("succeeds when data is null", () => {
                const result = validate(null, {
                    null: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not null", () => {
                const result = validate("test", {
                    null: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Array", () => {
            it("succeeds when data is an array", () => {
                const result = validate([1, 2, 3], {
                    array: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is an empty array", () => {
                const result = validate([], {
                    array: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an array", () => {
                const result = validate("test", {
                    array: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Object", () => {
            it("succeeds when data is an object", () => {
                const result = validate({ key: "data" }, {
                    object: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is an empty object", () => {
                const result = validate({}, {
                    object: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an object", () => {
                const result = validate("test", {
                    object: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Date", () => {
            it("succeeds when data is a date string", () => {
                const result = validate("Apr 1, 2020", {
                    date: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is a Date object", () => {
                const result = validate(new Date("Apr 1, 2020"), {
                    date: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a date", () => {
                const result = validate([], {
                    required: true,
                    date: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("File", () => {
            it("succeeds when data is a file", () => {
                const file = new File(["test"], "test.txt", {
                   type: "text/plain",
                });

                const result = validate(file, {
                    file: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is an empty file", () => {
                const file = new File([], "test.txt", {
                    type: "text/plain",
                });

                const result = validate(file, {
                    file: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a file", () => {
                const result = validate("test", {
                    file: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("InstanceOf", () => {
            it("succeeds when data instance matches", () => {
                const result = validate(new Date(), {
                    instanceOf: Date,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data instance does not match", () => {
                const result = validate(new Date(), {
                    instanceOf: Number,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Lowercase", () => {
            it("succeeds when data is lowercase", () => {
                const result = validate("test", {
                    lowercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is lowercase with numbers", () => {
                const result = validate("test123", {
                    lowercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is empty", () => {
                const result = validate("", {
                    lowercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    lowercase: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Uppercase", () => {
            it("succeeds when data is uppercase", () => {
                const result = validate("TEST", {
                    uppercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is uppercase with numbers", () => {
                const result = validate("TEST123", {
                    uppercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is empty", () => {
                const result = validate("", {
                    uppercase: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    uppercase: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("StartsWith", () => {
            it("succeeds when data starts with value", () => {
                const result = validate("test", {
                    startsWith: "te"
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is empty", () => {
                const result = validate("test", {
                    startsWith: ""
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data does not start with value", () => {
                const result = validate("test", {
                    startsWith: "st"
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    startsWith: "te"
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("EndsWith", () => {
            it("succeeds when data ends with value", () => {
                const result = validate("test", {
                    endsWith: "st"
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is empty", () => {
                const result = validate("test", {
                    endsWith: ""
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data does not ends with value", () => {
                const result = validate("test", {
                    endsWith: "te"
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    endsWith: "te"
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Url", () => {
            it("succeeds when data is a HTTP url", () => {
                const result = validate("http://www.google.com/", {
                    url: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is a HTTPS url", () => {
                const result = validate("https://www.google.com/", {
                    url: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is a url without protocol", () => {
                const result = validate("www.google.com/", {
                    url: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a url", () => {
                const result = validate("test", {
                    url: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Email", () => {
            it("succeeds when data is an email address", () => {
                const result = validate("user@example.com", {
                    email: true
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when there is a dot in first part", () => {
                const result = validate("first.last@example.com", {
                    email: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when first part is missing", () => {
                const result = validate("@example.com", {
                    email: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when TLD and dot are missing", () => {
                const result = validate("user@example", {
                    email: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when TLD is missing", () => {
                const result = validate("user@example.", {
                    email: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    email: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("IpAddress", () => {
            it("succeeds when data is an IP address", () => {
                const result = validate("1.1.1.1", {
                    ipAddress: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when IP address is in range 0.0.0.0 - 0.255.255.255", () => {
                const result = validate("0.0.0.0", {
                    ipAddress: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is a string, but not an IP address", () => {
                const result = validate("test", {
                    ipAddress: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a string", () => {
                const result = validate(123, {
                    ipAddress: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Negative", () => {
            it("succeeds when data is a negative number", () => {
                const result = validate(-10, {
                    negative: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is a positive number", () => {
                const result = validate(10, {
                    negative: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is 0", () => {
                const result = validate(0, {
                    negative: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a number", () => {
                const result = validate("test", {
                    negative: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Positive", () => {
            it("succeeds when data is a positive number", () => {
                const result = validate(10, {
                    positive: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is a positive number", () => {
                const result = validate(-10, {
                    positive: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is 0", () => {
                const result = validate(0, {
                    positive: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a number", () => {
                const result = validate("test", {
                    positive: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Between", () => {
            it("succeeds when data is between two values", () => {
                const result = validate(5, {
                    between: [0, 10]
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is equal to highest valid number", () => {
                const result = validate(10, {
                    between: [0, 10]
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is equal to lowest valid number", () => {
                const result = validate(0, {
                    between: [0, 10]
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when min and max are equal and data is valid number", () => {
                const result = validate(0, {
                    between: [0, 0]
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not between two values", () => {
                const result = validate(-11, {
                    between: [-10, 10]
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when min and max values are switched", () => {
                const result = validate(5, {
                    between: [10, -10]
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("LessThan", () => {
            it("succeeds when data is less than value", () => {
                const result = validate(5, {
                    lessThan: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is equal to value", () => {
                const result = validate(10, {
                    lessThan: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is greater than value", () => {
                const result = validate(15, {
                    lessThan: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("succeeds data is numeric", () => {
                const result = validate("5", {
                    lessThan: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails data is not numeric", () => {
                const result = validate([], {
                    required: true,
                    lessThan: 10
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("LessThanOrEqual", () => {
            it("succeeds when data is less than value", () => {
                const result = validate(5, {
                    lessThanOrEqual: 10
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is equal to value", () => {
                const result = validate(10, {
                    lessThanOrEqual: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is greater than value", () => {
                const result = validate(15, {
                    lessThanOrEqual: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails data is numeric", () => {
                const result = validate("5", {
                    lessThanOrEqual: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails data is not numeric", () => {
                const result = validate([], {
                    required: true,
                    lessThanOrEqual: 10
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("GreaterThan", () => {
            it("succeeds when data is greater than value", () => {
                const result = validate(15, {
                    greaterThan: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is equal to value", () => {
                const result = validate(10, {
                    greaterThan: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is less than value", () => {
                const result = validate(5, {
                    greaterThan: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails data is not a number", () => {
                const result = validate("5", {
                    greaterThan: 10
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("GreaterThanOrEqual", () => {
            it("succeeds when data is greater than value", () => {
                const result = validate(15, {
                    greaterThanOrEqual: 10
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is equal to value", () => {
                const result = validate(10, {
                    greaterThanOrEqual: 10
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is lrdd than value", () => {
                const result = validate(5, {
                    greaterThanOrEqual: 10
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails data is not a number", () => {
                const result = validate("5", {
                    greaterThanOrEqual: 10
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Even", () => {
            it("succeeds when data is even", () => {
                const result = validate(10, {
                    even: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not even", () => {
                const result = validate(11, {
                    even: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("succeeds data is numeric", () => {
                const result = validate("10", {
                    even: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails data is numeric", () => {
                const result = validate([], {
                    required: true,
                    even: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Odd", () => {
            it("succeeds when data is odd", () => {
                const result = validate(11, {
                    odd: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not odd", () => {
                const result = validate(10, {
                    odd: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("succeeds data is numeric", () => {
                const result = validate("11", {
                    odd: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails data is numeric", () => {
                const result = validate([], {
                    required: true,
                    odd: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Pattern", () => {
            it("succeeds when data matches the pattern", () => {
                const result = validate("00", {
                    pattern: /^\d{1,2}$/
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data does not match the pattern", () => {
                const result = validate("test", {
                    pattern: /^\d{1,2}$/
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("MimeType", () => {
            it("succeeds when data mime type matches", () => {
                const file = new File(["test"], "test.txt", {
                    type: "text/plain",
                });

                const result = validate(file, {
                    mimeType: "text/plain",
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data mime type does not match", () => {
                const file = new File([], "test.txt", {
                    type: "text/plain",
                });

                const result = validate(file, {
                    mimeType: "image/jpeg",
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a file", () => {
                const result = validate("test", {
                    mimeType: "text/plain",
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Image", () => {
            it("succeeds when data is an image", () => {
                const file = new File(["test"], "test.jpg", {
                    type: "image/jpeg",
                });

                const result = validate(file, {
                    image: true
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an image", () => {
                const file = new File([], "test.txt", {
                    type: "text/plain",
                });

                const result = validate(file, {
                    image: true
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not a file", () => {
                const result = validate("test", {
                    image: true
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Empty", () => {
            it("succeeds when data is an empty array", () => {
                const result = validate([], {
                    empty: true,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data is an empty string", () => {
                const result = validate("", {
                    empty: true,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is non-empty array", () => {
                const result = validate([ 1 ], {
                    empty: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is non-empty empty", () => {
                const result = validate("1", {
                    empty: true,
                });

                expect(result).not.toHaveLength(0);
            });

            it("fails when data is not an array or string", () => {
                const result = validate(1, {
                    empty: true,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Length", () => {
            it("succeeds when data array has expected length", () => {
                const result = validate([ 1, 2, 3 ], {
                    length: 3,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string has expected length", () => {
                const result = validate("123", {
                    length: 3,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data array should be empty", () => {
                const result = validate([], {
                    length: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string should be empty", () => {
                const result = validate("", {
                    length: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an array or string", () => {
                const result = validate(1, {
                    length: 1,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("MinLength", () => {
            it("succeeds when data array has min length", () => {
                const result = validate([ 1, 2, 3 ], {
                    minLength: 2,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string has min length", () => {
                const result = validate("123", {
                    minLength: 2,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data array can be empty", () => {
                const result = validate([], {
                    minLength: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string can be empty", () => {
                const result = validate("", {
                    minLength: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an array or string", () => {
                const result = validate(1, {
                    minLength: 1,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("MaxLength", () => {
            it("succeeds when data array has min length", () => {
                const result = validate([ 1, 2, 3 ], {
                    maxLength: 4,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string has min length", () => {
                const result = validate("123", {
                    maxLength: 4,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data array can be empty", () => {
                const result = validate([], {
                    maxLength: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string can be empty", () => {
                const result = validate("", {
                    maxLength: 0,
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an array or string", () => {
                const result = validate(1, {
                    maxLength: 1,
                });

                expect(result).not.toHaveLength(0);
            });
        });

        describe("Includes", () => {
            it("succeeds when data array includes value", () => {
                const result = validate([ 1, 2, 3 ], {
                    includes: 2,
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string includes value", () => {
                const result = validate("123", {
                    includes: "2",
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string can be empty", () => {
                const result = validate("", {
                    includes: "",
                });

                expect(result).toHaveLength(0);
            });

            it("succeeds when data string matches value", () => {
                const result = validate("123", {
                    includes: "123",
                });

                expect(result).toHaveLength(0);
            });

            it("fails when data is not an array or string", () => {
                const result = validate(1, {
                    includes: "1",
                });

                expect(result).not.toHaveLength(0);
            });
        });
    });
});
