import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './service/user.service';
import { catchError} from 'rxjs/operators';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';
  faRotate = faRotate;
  user:any;

  constructor (
    private userService:UserService,
    private toastr: ToastrService){
    }

    getApi(){
          this.user = '';
          this.userService.getUser()
          .subscribe({
              complete: () => { this.toastr.success('Completed Successfully') }, // completeHandler
              error: (err:any) => { this.toastr.error(JSON.stringify(err),'something error occured') },    // errorHandler 
              next: (data:any) => { 
                this.user = data.results[0];
                console.log(this.user);
              }
        });
    }

    ngOnInit() {
      this.getApi();
    }
    
}
