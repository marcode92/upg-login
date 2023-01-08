import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyTicketService {
  
  ssoPath='https://sso.vigilfuoco.it/cas-test/serviceValidate'
  servicePath = 'https://geoloc.vvf.to.it/sso_test.php'

  constructor(private http: HttpClient) { }

  verifyTicket(ticket: string){

    let params = new HttpParams();
    params = params.append('ticket',ticket);
    params = params.append('service',this.servicePath);
    
    return this.http.get(this.ssoPath, {params})
  }
}
