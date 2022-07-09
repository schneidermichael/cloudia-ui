import {Component} from '@angular/core';
import {HistoryService} from "../../shared/service/history.service";
import {AuthenticationService} from "../../shared/service/authentication.service";
import {History} from "../../shared/interface/history";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})

export class HistoryComponent {

  data: History[] | undefined;

  constructor(private historyService: HistoryService, private authenticationService: AuthenticationService) {
    this.historyService.findAllByUserId(this.authenticationService.getUserId()).subscribe(value => this.data = value)
  }

  chart(id: number) {
    this.historyService.findOne(id).subscribe(value => console.log(value));
  }

  delete(id: number) {
    this.historyService.delete(id).subscribe(value => {
      // @ts-ignore
      let newData = this.data.filter(function (el) {
        return el.id !== value.id
      });
      this.data = newData;
    });
  }

}

