import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {
  user: {id: number, name: string};

   paramSubscription:Subscription;
  
   constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
  this.user={
    id:  this.routes.snapshot.params['id'],
 name: this.routes.snapshot.params['name']  
  }
  this.paramSubscription=this.routes.params.subscribe(
    (param:Params)=>{
     this.user.id= param['id'];
      this.user.name=param['name'];
    }
    )
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
