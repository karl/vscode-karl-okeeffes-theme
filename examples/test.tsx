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


const doOther = async (duration) => {
  setTimeout(doSomething, duration);
};

const cool = async function*() {
  const x = yield y();
};
