declare const anyValue: any;

function takesString(str: string): void {
    console.log(str.length);
}

try {
    somethingRisky();
} catch (error: any) {
    // Should use 'unknown'
    console.log(error.message); // Unsafe access
    error.someMethod(); // Unsafe call
}

// Default catch variable is 'any' in older TypeScript
try {
    somethingRisky();
} catch (error) {
    // Implicitly 'any'
    console.log(error.message); // Unsafe access
}

const bar = {}

interface Foo {
    a: number
}

const value = bar as Foo;

const a = <Foo>bar;
