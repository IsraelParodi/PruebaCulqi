export interface IToken {
  email: string;
  cvv: number;
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  token?: string;
  create_date?: Date;
}
