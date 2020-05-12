type Slime = {
  name: string;
  age: number;
};

const doSomething = (thing: Slime) => {
  let n = thing.name;
  const { name } = thing;

  const other: Slime = { name: "Jeff", age: 12 };
  other.name = n || name;
};

export const doOther = async (duration) => {
  setTimeout(doSomething, duration);
};

export const cool = async function* () {
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
