import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { authservice } from "./Auth-service.service";

@Injectable()
export class authguard implements CanActivate , CanActivateChild{
constructor(private authService:authservice,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

return  this.authService.isAuthentication()
        .then(
            (authentication:boolean)=>{
                if(authentication){
                    return true;
                }
                else{
                this.router.navigate(['/']);
                }
            }
        )
    }
    canActivateChild(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot):  Observable<boolean>   | Promise<boolean> | boolean {
        return this.canActivate(route , state);
    }
}
