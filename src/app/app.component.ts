import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registration form';

  displayname="";
  displayaddress="";
  displaycontact="";
  displayemail="";
  getValue(name:string,adress:string,contact:string,email:string){
   this.displayname=name;
   this.displayaddress =adress;
   this.displaycontact=contact;
   this.displayemail=email;
  }
}
