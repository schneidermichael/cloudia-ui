export interface InstanceTypeDatabase {
  id: number;
  region: string;
  instance_type: string;
  core: number;
  ram: number;
  price_per_hour: number;
  price_per_gib: number;
}
