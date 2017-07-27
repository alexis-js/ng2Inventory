import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  onRatingClicked() {
    this.ratingClicked.emit(this.rating + ' stars');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 86 / 5;
  }
}
