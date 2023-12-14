import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { UserModel } from '../users.model';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:UserModel={}
    constructor(private route:ActivatedRoute,private api:UserApiService,private router:Router,private toaster:ToasterService){}

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      // console.log(res);
      const {id} =res
      this.getExistingUser(id)
      
    })
  }
  getExistingUser(id:any){
    this.api.viewUserAPI(id).subscribe((res:any)=>{
      console.log(res);
      this.user = res
    })
  }
  editUser(id:any){
    this.api.updateUserAPI(id,this.user).subscribe({
      next:(res:any)=>{
        this.toaster.showSuccess("user updated")
        this.router.navigateByUrl('/users')
      },
      error:(err:any)=>{
        this.toaster.showError(err.error)
      }
    })
  }
  cancel(id:any){
    this.getExistingUser(id)
  }
}
