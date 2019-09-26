# Angular Testing Workshop

This is an angular unit-testing workshop by [Younes](https://twitter.com/yjaaidi) from [Wishtack](https://wishtack.io) and we can keep in touch here:

- ℹ️ [wishtack.io](https://wishtack.io)
- 📺 [marmicode.fr](https://marmicode.fr)
- 🐦 [@yjaaidi](https://twitter.com/yjaaidi)
- 💻 [github/wishtack](https://github.com/wishtack)

It is made to run on codesandbox.

<p align="center">
    <img src="https://github.com/wishtack/codesandbox-angular-testing/raw/master/screenshot.png" alt="Codesandbox Angular Testing">
</p>

# Workshop guide

## 0. The skeleton

[Click here to open the skeleton on Codesandbox](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/0-skeleton).

## 1. Isolated testing `<app-sandwich-search>`

Let’s start with a presentational component like `<app-sandwich-search>`

### 1.1. Create the component

```sh
yarn ng g @wishtack/schematics:scam sandwich-search
```

### 1.2. Add empty specs to share intention

```js
xit('🚧 should search and display sandwiches', () => {
  throw new Error('🚧 work in progress!');
});
```

### 1.3. Describe the test with comments

```
// @todo create the component with…
// @todo check this and that
```

### 1.4. 🎁 It's time for a sandwich 🍔

```typescript
export class Sandwich {
  id: string;
  name: string;
  price: number;

  constructor(args: Partial<Sandwich> = {}) {
    this.id = args.id;
    this.name = args.name;
    this.price = args.price;
  }
}
```

### 1.5. Use `of` function to create an observable from synchronous source 

```js
const data$ = of(42)
data$.subscribe(console.log); // 42
```

### 1.6. Create the sandwich search & cart service

… and let’s skip tests for now
```sh
yarn ng g service sandwich-search/sandwich-search —skipTests
yarn ng g service cart/cart —skipTests
```

### 1.7. Implement the test and use IDE to generate the methods with the right signature
Top down approach helps with generation and enforces good design.
Start with the usage and not the implementation or interface.

### 1.8. Enable the test by replacing `xit` with `it`... and make it work

🛑🤔 [OPEN SOLUTION](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/1-isolated-testing-sandwich-search) 

## 2. Isolated testing `<app-sandwich-search>` with spies

```js
class FavoriteColorService {
  getFavoriteColor(userId) {
    ...
  }
}

function getCurrentUserFavoriteColor() {
  return getFavoriteColor(currentUser.id);
}

it('...', () => {

  const favoriteColorService = new FavoriteColorService();

  spyOn(favoriteColorService, 'getFavoriteColor').and.returnValue('RED');

  expect(getCurrentUserFavoriteColor()); // 'RED'

  // ⚠️ remember to check that the spy has been called with the right parameters
  expect(favoriteColorService.getFavoriteColor).toHaveBeenCalledWith('FOO'); // FAIL! Was called with `undefined` instead of FOO

});
```

🛑🤔 [OPEN SOLUTION](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/2-isolated-testing-sandwich-search-with-spies)

## 3. Dom testing `<app-sandwich-list>`

### 3.1. Create the `<app-sandwich-list>` component
```sh
yarn ng g @wishtack/schematics:scam sandwich-list
```

### 3.2. Check that sandwiches are displayed by querying the view
```js
fixture.debugElement.queryAll(By.css('…'));
```

### 3.3. Remember to trigger the change detection when needed
```js
fixture.detectChanges();
```

### 3.4. Use `data-role` attribute to query elements
```html
<button data-role="destroy-planet-button">DESTROY PLANET</button>
```

```js
expect(fixture.debugEment.query(By.css('[data="destroy-planet-button"]'))).toBeNull(); // 😰
```

🛑🤔 [OPEN SOLUTION](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/3-dom-testing-sandwich-list)

## 4. Dom testing events

### 4.1. Trigger a click
```js
const clickEvent = {};
fixture.debugElement.query(...).triggerEventHandler('click', clickEvent);
```

### 4.2. Subscribe to component's output

😉 `EventEmitter` is a `Subject` which is an `Observable`, so you can subscribe to the output.

🛑🤔 [OPEN SOLUTION](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/4-dom-testing-sandwich-list-events)

## 5. Shallow testing 

### 5.1. Ignore unknown elements
```js
TestBed.configureTestingModule({
  declarations: [DestroyPlanetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
}).compileComponents();
```

### 5.2. Inject services
```js
let myService: MyService;
beforeEach(() => myService = TestBed.inject(MyService)); // Since Angular 9
beforeEach(() => myService = TestBed.get(MyService)) // Before Angular 9
```

🛑🤔 [OPEN SOLUTION](https://codesandbox.io/s/github/wishtack/workshop-angular-testing/tree/5-shallow-testing-sandwich-search)

# Known issues with Codesandbox
🐞 There are some memory limitations on codesandbox that can make karma crash.
If you want to use karma and you don't need to run the app simultaneously, then you can simply replace `"start": "ng serve..."` by `"start": "ng test"`.
Codesandbox will run karma instead of the app which will reduce memory usage.
