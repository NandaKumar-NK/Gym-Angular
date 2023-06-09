import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RefreshTokenRequest } from '../models/refresh-token-reqest';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  //private baseUrl:string=environment.baseUrl+'Token';
  
  generateRefreshToken(data:RefreshTokenRequest){
    const url= `https://localhost:7036/api/Token/Refresh`;
    return this.http.post<RefreshTokenRequest>(url,data);
  }

  revokeRefreshToken(){
   const url=`https://localhost:7036/api/Token/Revoke`;
   return this.http.post(url,null);
  }
}