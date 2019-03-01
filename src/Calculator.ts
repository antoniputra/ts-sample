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
    // return this.elem.innerHTML;
  }
};