import {Region} from "../interface/gcp-region";
import {Serie} from "../interface/gcp-series";
import {Size} from "../interface/gcp-size";
import {Os} from "../interface/gcp-os";

export const REGIONS: Region[] = [
  { id: 1, name: 'asia-east1', },
  { id: 2, name: 'asia-east2' },
  { id: 3, name: 'asia-northeast1' },
  { id: 4, name: 'asia-northeast2' },
  { id: 5, name: 'asia-northeast3' },
  { id: 6, name: 'asia-south1' },
  { id: 7, name: 'asia-south2' },
  { id: 8, name: 'asia-southeast1' },
  { id: 9, name: 'asia-southeast2' },
  { id: 10, name: 'australia-southeast1' },
  { id: 11, name: 'australia-southeast2' },
  { id: 12, name: 'europe-central2' },
  { id: 13, name: 'europe-north1' },
  { id: 14, name: 'europe-southwest1' },
  { id: 15, name: 'europe-west1' }
];

export const ZONES: Region[] = [
  { id: 1, name: 'asia-east1-a', },
  { id: 2, name: 'asia-east2-b' },
  { id: 3, name: 'asia-east2-c' },
  { id: 4, name: 'asia-northeast2-a' },
  { id: 5, name: 'asia-northeast2-b' },
  { id: 6, name: 'asia-northeast2-c' },
  { id: 7, name: 'asia-south2-a' },
  { id: 8, name: 'asia-south2-b' },
  { id: 9, name: 'asia-south2-c' },
  { id: 10, name: 'australia-southeast1-a' },
  { id: 11, name: 'australia-southeast1-b' },
  { id: 12, name: 'australia-southeast1-c' },
  { id: 13, name: 'europe-north1-a' },
  { id: 14, name: 'europe-north1-b' },
  { id: 15, name: 'europe-north1-c' }
];

export const SERIES: Serie[] = [
  { name: 'E2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { name: 'N2', description: 'Vivamus a urna condimentum, facilisis sem ve' },
  { name: 'N2D', description: 'In consectetur neque enim, eu cursus nisl feugiat s' },
  { name: 'T2D', description: 'Duis sapien sem, porta a vestibulum a, vehicula ut lorem' },
  { name: 'N1', description: 'Aenean at placerat odio' }
];

export const MACHINES: Serie[] = [
  { name: 'e2-micro', description: '2 vCPU, 1 GB Memory' },
  { name: 'e2-small', description: '2 vCPU, 2 GB Memory' },
  { name: 'e2-medium', description: '2 vCPU, 4 GB Memory' }
];

export const OPERATINGSYSTEMS: Os[] = [
  { name: 'CentOS' },
  { name: 'Debian' },
  { name: 'Fedora' },
  { name: 'Ubuntu' },
];

export const SIZES: Size[] = [
  { gb: 5 },
  { gb: 10 },
  { gb: 15 },
  { gb: 20 },
  { gb: 25 },
  { gb: 30 }
];


