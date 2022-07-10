import {Component, EventEmitter, Output} from '@angular/core';
import {Region} from "../../shared/interface/region";
import {GcpService} from "../../shared/service/gcp.service";
import {MachineTypeDatabase} from "../../shared/interface/machine-type-database";

@Component({
  selector: 'app-gcp-cloud-sql',
  templateUrl: './gcp-cloud-sql.component.html'
})
export class GcpCloudSqlComponent {

  @Output() instanceEvent = new EventEmitter<any>();
  @Output() cpuEvent = new EventEmitter<number>();
  @Output() ramEvent = new EventEmitter<number>();
  @Output() sizeEvent = new EventEmitter<number>();

  selectedRegion : string = 'us-central1';
  selectedSize : number | undefined;

  selectedCpuSize : number | undefined;
  selectedCpuSizePerHour : number | undefined;
  selectedRamSize : number | undefined;
  selectedRamSizePerHour : number | undefined;
  selectedPricePerGb : number | undefined;

  region: Region[] | undefined;
  machineTypeDatabase : MachineTypeDatabase[] | undefined;

  constructor(private service : GcpService) {
    this.service.getMachineTypeDatabase().subscribe(response => {
      this.machineTypeDatabase = response;
    })
  }

  selectedRegionChanged($event: any) {
    this.selectedCpuSizePerHour = $event.price_per_cpu_hour;
    this.selectedRamSizePerHour = $event.price_per_ram_hour;
    this.selectedPricePerGb = $event.price_per_gib;
    this.instanceEvent.emit($event);
  }

  selectedCpuSizeChanged($event: any) {
    this.cpuEvent.emit($event);
  }

  selectedRamSizeChanged($event: any) {
    this.ramEvent.emit($event);
  }

  selectedSizeChanged($event: any) {
    this.sizeEvent.emit($event);
  }
}
