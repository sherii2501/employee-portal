import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  SERVER_URL="http://localhost:3000"
  constructor(private http:HttpClient) { }
  // add user api
  addUserAPI(user:UserModel){
    return this.http.post(`${this.SERVER_URL}/users`,user)
  }
  // get all user
  getAllUserAPI(){
    return this.http.get(`${this.SERVER_URL}/users`)
  }
  // delete user
  deleteUserAPI(id:string){
    return this.http.delete(`${this.SERVER_URL}/users/${id}`)
  }
  viewUserAPI(id:any){
    return this.http.get(`${this.SERVER_URL}/users/${id}`)
  }
  updateUserAPI(id:any,user:UserModel){
    return this.http.put(`${this.SERVER_URL}/users/${id}`,user)
  }
}
