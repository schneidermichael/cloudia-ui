export interface CreateHistoryRequest {
  userId : number;
  type: string;
  providerA: string;
  providerB: string;
  priceA: number;
  priceB: number;
}
