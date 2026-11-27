# JavaScript and TypeScript from a Java and C# starting point

Several investigations stumbled over the same distinction: a TypeScript annotation informs the checker, while the JavaScript program still follows JavaScript rules. [Model and array investigation](../archive/development-journal-2019.md?plain=1#L659).

## Sharing, copying and casting

Arguments are passed by value. For an object that value is a reference to the object. Assigning a different value to a function parameter leaves the caller’s variable alone. Modifying a property through the copied reference changes the same object either caller can access. JavaScript object references therefore work for in-memory identity. Use persistent IDs for the separate problem of recognizing a logical record across copies, sessions and serialization.

In the [checkout model](../../src/app/models/cue-card.ts), the constructor of `Studiable` contains:

```ts
this.quizCueCards = <QuizzingCueCard[]>cc;
```

That assertion leaves the original array and its elements in place. It creates no subclass instance, fields, method implementations or defaults. A separate mapping step could build a session record for each card with explicit `attempted: false` and recall state. Keeping session state separate would also avoid modifying shared card objects.

## Arrays, errors and API conventions

- `map` returns a new result array. A callback can mutate a shared object, so `cards.map(card => card.visible = true)` changes the cards and builds an array of booleans.
- `forEach` calls a function for each element and discards the return values. Reassigning its parameter leaves the element in place. Mutating a field or writing to the original array changes shared state.
- `filter` returns an array of matching elements, with original object references. `find` returns the first match or `undefined`. `reduce` carries an accumulator, and an explicit initial value makes empty input easier to handle. For a LINQ comparison, these cover familiar selection, filtering, first-match and aggregation operations. Standard array methods run eagerly where LINQ to Objects operators often defer execution.
- `{}` and `[]` are truthy. `0`, `''`, `false`, `null` and `undefined` are falsy. `===` avoids coercion, and two object literals compare by reference. The [entry form](../../src/app/components/cue-card-entry-form/cue-card-entry-form.component.ts) tests `result === {}`, which is always false. Its Add/Save button separately implements the at-least-one-field rule.
- In TypeScript 3.2, `private` and `readonly` protect access at type-check time. `Object.freeze()` applies at runtime but only shallowly. A read-only reference can still point to an object reachable through another mutable alias.
- Constructor overload signatures share a single runtime implementation. Use explicit defaults or named factories when different input shapes represent different domain operations. Prototype modification changes behaviour for all users of that prototype and can collide with other code. A standalone helper is a local alternative to C# extension methods.
- Throw an `Error` for a failed invariant, with enough context for the caller to respond. Form input that is expected to be incomplete can be handled through validation. An unexpected missing card in the state owner is a different kind of failure.

[ECMAScript equality algorithm](https://tc39.es/ecma262/#sec-isstrictlyequal) · [TypeScript handbook on assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) · [Learning index](../LEARNING.md)
