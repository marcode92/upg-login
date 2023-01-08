import { Component } from '@angular/core';

@Component({
  selector: 'app-link-to-login',
  templateUrl: './link-to-login.component.html',
  styleUrls: ['./link-to-login.component.scss']
})

export class LinkToLoginComponent {

  ssoPath = 'https://sso.vigilfuoco.it/cas-test';
  servicePath = 'https://geoloc.vvf.to.it/sso_test.php' //localhost:4200/index

  goToLoginPage(){
    /* quando chiami questa pagina, se risulti già loggato ti porterà direttamente
    alla pagina che hai accreditato presso ... che sarebbe localhost:4200/index?ticket=xxx */
    window.location.href = `${this.ssoPath}/login?service=${this.servicePath}`;
  }

}
