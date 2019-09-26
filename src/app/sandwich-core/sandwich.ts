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
