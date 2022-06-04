type Slime = {
  name: string;
  age: number;
};

type Monster<Type> = {
  name: string;
  abilities: Type[]
}

const AWESOME = 'AWESOME';

class Monkey {
  age: number;

  eat() {
    console.log('Bananas');
 }
 run() {
  const x = bigNumber + this.age;
 }
}

class Cat extends Monkey {
  eat() {
    console.log('Mouse');
  }
}

const regex = /\d+moo/;
regex.compile('\d+far');

const Bramwell:Cat = new Cat();

const bigNumber = 123_456_789;
const decimalNumber = 123.456;

const things = ['first', 'second', 'third'].map((place) => {
  let other = 'other';
  other = 'new';
  const result = place.toLocaleUpperCase();
  return result + other;
});

const x = bigNumber + decimalNumber + things.length;

const animal = new Cat();
if (animal instanceof Cat) {
  console.log(`We have an ${AWESOME} cat`);
}

/**
 * @param {Slime} thing
 */
function doAThing(thing: Slime) {
  let n = thing.name;
  const { name } = thing;

  const other: Slime = { name: "Jeff", age: 12 };
  other.name = n || name;
}

const doSomething = (thing: Monster<string>) => {
  let n = thing.name;
  const { name } = thing;

  const other: Monster<string> = { name: "Jeff", abilities: ['flight', 'swimming'] };
  other.name = n || name;
};

export const doOther = async (duration) => {
  setTimeout(doSomething, duration);
  setTimeout(doAThing, duration);
};

const moo = {
  thing: () => {},
};

export const cool = async function* () {
  console.log('A console message');
  const y = moo?.thing;
  const z = moo.thing;
  const x = yield y();
};

export interface IndexOutroProps {
  goBackToQuestions(): void;
  submitAnswers(): Promise<void>;
  foo: null;
  bar: undefined;
  baz: string;
  blah: Slime;
  inter: IndexOutroProps;
}

export const IndexOutro = (props: IndexOutroProps) => {
  return (
    <div id="an-id" className="a-class-name" data-test-id="IndexOutro">
      {props.baz}
    </div>
  );
};

describe('xxx', () => {
  it('yyy', () => {
    expect(z).toMatchInlineSnapshot(`
      {
        "name": "Jeff",
        "abilities": [
          "flight",
          "swimming"
        ]
      }
    `);

    expect(a).toMatchInlineSnapshot(`
      <div id="example id">
        <div className="example class">
          <div data-test-id="example-child">
            Example text!
          </div>
        </div>
      </div>
    `);
  });
});
