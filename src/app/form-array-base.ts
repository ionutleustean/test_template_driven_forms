


export class FormArrayBase<T> {

  addItem (model: T[]) {
    model.push(new this.target());
  }

  constructor(private target: {new(): T}) {
  }

}
