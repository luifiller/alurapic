import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() onTyping:EventEmitter<string> = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  @Input() value: string = '';

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(500))
      .subscribe((filter) => (this.onTyping.emit(filter)));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
