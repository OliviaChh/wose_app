import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    private arr_boolNav: boolean[] = [true, false, false, false, false, false];

    setCurPage(val: number) {
        for (var i = 1; i <= 5; i++) {
            if (val != i) this.arr_boolNav[i] = false;
            else this.arr_boolNav[i] = true;
        }
    }

    get curPage() {
        return this.arr_boolNav;
    }

}

