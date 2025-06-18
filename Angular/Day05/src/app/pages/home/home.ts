import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Promotion } from '../../services/promotion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  currentAd: string = '';
  mySub!: Subscription;
  constructor(private promotion: Promotion, private cdr: ChangeDetectorRef) {}
  ngOnDestroy(): void {
    this.mySub.unsubscribe();
  }
  ngOnInit(): void {
    this.mySub = this.promotion.getCurrentAds().subscribe({
      next: (response) => {
        this.currentAd = response;
        console.log(response);

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
