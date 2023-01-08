import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VerifyTicketService } from '../verify-ticket.service';

@Component({
  selector: 'app-redirect-to-login',
  templateUrl: './redirect-to-login.component.html',
  styleUrls: ['./redirect-to-login.component.scss']
})
export class RedirectToLoginComponent implements OnInit {
  
  ticket: string = '';
  constructor(private route: ActivatedRoute, public pippo: VerifyTicketService) {}

  ngOnInit() {
    this.route.queryParams
              .subscribe((queryParams: Params) => {
                  this.ticket = queryParams['ticket'];                  
               });
    
    if(this.ticket !== ''){
      this.verifyTicket();
    }
  }

  verifyTicket(){
    this.pippo.verifyTicket(this.ticket).subscribe((res) => {
      console.log(res);
    })
  }

}
