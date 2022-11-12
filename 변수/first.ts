const a: number = 5;
const b: string = "asdf";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true; // 모든 타입이 다 된다. 그러면 타입스크립트를 쓰는 이유가 없다.

function add(x: number, y: number): number {
    return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => x + y;

/* interface를 이용한 함수 타입 정의*/
interface Add {
    (x: number, y: number): number;
}
const add3: Add = (x, y) => x + y;

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

const arr: string[] = ["123", "456"];
const arr2: number[] = [123, 456];
