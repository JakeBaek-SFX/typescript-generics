const getFirstElement = <T,>(array: T[]): T => {
  return array[0]
}

const numbers= [0, 1, 2];
getFirstElement(numbers);

const strings= ['1', '2', '3'];
getFirstElement(strings);

const input = document.querySelector<HTMLInputElement>(".input");
input?.value;

const a = [1, 2, 3];
a.map(() => {});
 
const b = [1, '2', 3];
b.map(() => {});

const map = new Map<string, number>([['1', 1]]);

type ApiResource<Data = {name: string, id: number}> = {
  data: Data;
  isError: boolean;
}

const StoreResponse: ApiResource = {
  data: {
    name: 'Shoppers',
    id: 1
  },
  isError: false
}

const patientResponse: ApiResource<{name: string, age: number}> = {
  data: {
    name: 'Jake',
    age: 29
  },
  isError: false
}

type anotherApiResource<Data extends object> = {
  data: Data;
  isError: boolean;
}

const anotherApiResponse: anotherApiResource<{name: string}> = {
  data: {name: 'hi'},
  isError: true
}