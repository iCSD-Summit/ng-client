import { Component } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { PushService } from './push-service';
import { stringify } from "querystring";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
    selector: 'push-notification',
    template: `<button class="push-button" md-button mat-fab *ngIf="pushButtonVisible" (click)="subscribeToNotifications()">
                <mat-icon>notifications</mat-icon>
               </button>`,
    styles: ['.push-button {position: absolute; bottom: 5%; left: 40%}']
})

export class PushComponent {
    readonly VAPID_PUBLIC_KEY = "BIJ6HLNdBMUUh8rDhtC8jFntlNj0m-_d9Rq18Zre8E_v_t3czWrUvly--n8top_nAdVWYAamQHQwi5Ir7SFuX-Q";
    pushButtonVisible: boolean;

    constructor(
        private swPush: SwPush,
        private newsletterService: PushService) {

        this.pushButtonVisible = this.swPush.isEnabled;
    }

    subscribeToNotifications() {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
            .then(sub => {
                this.newsletterService.addPushSubscriber(sub).subscribe();
            })
            .catch(err => console.error("Could not subscribe to notifications", err));
    }
}