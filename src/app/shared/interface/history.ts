export interface History {
  id: number,
  userId: number,
  createdAt: Date,
  type: string,
  providerA: string,
  providerB: string
  priceA: number,
  priceB: number
}
