import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    public carousel: any = new Subject<any>();

    constructor() { }

    public setCarousel(carousel) {
        console.log('set carousel');
        this.carousel.next(carousel);
    }
}
