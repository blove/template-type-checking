export interface Customer {
  id: number;
  name: string;
  catchPhrase: string;
  avatar: string;
  address: {
    street1: string;
    city: string;
    state: string;
    zip: string;
  };
}
