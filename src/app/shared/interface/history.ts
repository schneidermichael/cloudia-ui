export interface History {
  id: number,
  user_id: number,
  created_at: Date,
  type: string,
  provider_a: string,
  provider_b: string
  price_a: number,
  price_b: number
}
