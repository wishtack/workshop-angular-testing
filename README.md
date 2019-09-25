# CodesandboxAngularTesting

This is a template for codesandbox, you can fork it here: https://codesandbox.io/s/github/wishtack/codesandbox-angular-testing/tree/master/

<p align="center">
    <img src="https://github.com/wishtack/codesandbox-angular-testing/raw/master/screenshot.png" alt="Codesandbox Angular Testing">
</p>

## Run Karma
```sh
yarn test
```

## Run Jest
```sh
yarn jest
```

## Known issues
🐞 There are some memory limitations on codesandbox that can make karma crash.
If you want to use karma and you don't need to run the app simultaneously, then you can simply replace `"start": "ng serve..."` by `"start": "ng test"`.
Codesandbox will run karma instead of the app which will reduce memory usage.

# Workshop guidelines

## 1. Isolated testing <app-sandwich-search>

Let’s start with a presentational component like <app-sandwich-search>


### Create the component

```
yarn ng g @wishtack/schematics:scam sandwich-search
```

### Add empty specs to share intention

```
xit('🚧 should search and display sandwiches', () => {
  throw new Error('🚧 work in progress!');
});
```

### Describe the test with comments

```
// @todo create the component with…
// @todo check this and that
```

### 🎁 the sandwich class

```
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

### Use `of` function to create an observable from synchronous source 

```
const data$ = of(42)
data$.subscribe(console.log); // 42
```

### Create the sandwich search & cart service

… and let’s skip tests for now
```
yarn ng g service sandwich-search/sandwich-search —skipTests
yarn ng g service cart/cart —skipTests
```

### Implement the test and use IDE to generate the methods with the right signature
Top down approach helps with generation and enforces good design.
Start with the usage and not the implementation or interface.

### Enable the test by replacing `xit` with `it` and make it work

## 2. Isolated testing <app-sandwich-search> with spies

```
class Greetings {

  hello(name) {
  }

}

const greetings = new Greetings();

spyOn(greetings, ‘hello’).and.returnValue(‘HELLO FOO!’);

greetings.hello(‘JOHN’) // ‘HELLO FOO’

// remember to check that the spy has been called with the right parameters
expect(greetings.hello).toHaveBeenCalledWith(‘FOO’)

```

## 3. Dom testing <app-sandwich-list>

### Create the <app-sandwich-list> component

```
yarn ng g @wishtack/schematics:scam sandwich-list/sandwich-list
```

### Check that sandwiches are displayed by querying the view

```
fixture.debugElement.queryAll(By.css(‘…’))
```

### Remember to trigger the change detection when needed

```
fixture.detectChanges();
```

### Use `data-role` attribute to query elements

## 4. Dom testing events

### Trigger a click
```
fixture.debugElement.query(…).triggerEventHandler(‘click’, {})
```

## 5. Shallow testing 

TODO: Add custom schema
TODO: Inject services
