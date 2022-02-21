import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
    @Output() result = new EventEmitter<string>();

    selector(selection: string) {
        this.result.emit(selection)     
    }

  ngOnInit(): void {
  }

}
