import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ UserService ]  
})

export class AppComponent implements OnInit {
  public title = 'AGORA LEARNING SYSTEM';
  public user: User;
  public identity;
  public token;
  public errorMessage;
  
  constructor ( private _userService: UserService ) {    
      this.user = new User( '','','','','','ROLE_USER','' );
  }
  
  ngOnInit () {
      
  }
  
  public onSubmit() {
      console.log(this.user);
      
      // Get user data authenticated
      this._userService.signup(this.user).subscribe(
        response => {
            let identity = response.user;
            this.identity = identity;
            
            if(!this.identity._id){
                alert("User is not correctly identified");
            }else{
                // Create element in localstorage to keep user in session
            
                // Obtain token for send to each http petition
            
                this._userService.signup(this.user, 'true').subscribe(
                    response => {
                        let token = response.token;
                        this.token = token;

                        if(this.token.length <= 0){
                            alert("Token has not succesfully generated");
                        }else{
                            // Create element in localstorage to has token available

                            console.log(token);
                            console.log(identity);
                        }
                    },
                    error => {
                        var errorMessage = <any>error;

                        if(errorMessage != null){
                            var body = JSON.parse(error._body);
                            this.errorMessage = body.message;
                            console.log(error);
                        }
                    }
                  );
            }
        },
        error => {
            var errorMessage = <any>error;
            
            if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(error);
            }
        }
      );
  }
}