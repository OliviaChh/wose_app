import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { User_profileService } from "src/app/service/user_profile.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private user_profileService: User_profileService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.user_profileService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}