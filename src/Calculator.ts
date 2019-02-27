export default class Calculator {

  public elem: HTMLElement;

  constructor(elem: HTMLElement) {
    this.elem = elem;
  }

  sum(x: number, y: number): number {
    return x + y;
  }

  fillElem(text: string) {
    this.elem.innerHTML = text;
    // console.log('prend', this.elem);
    // return this.elem.innerHTML;
  }
};