import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lost-password-success',
  templateUrl: './lost-password-success.component.html',
})
export class LostPasswordSuccessComponent implements OnInit{

  newPassword : string | undefined;
  private routeSub: Subscription | undefined;

  constructor(private route: ActivatedRoute) {
    //This is empty
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.newPassword = params['id'];
    });
  }


}
