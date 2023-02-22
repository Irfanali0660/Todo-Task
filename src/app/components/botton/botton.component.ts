import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botton',
  templateUrl: './botton.component.html',
  styleUrls: ['./botton.component.css']
})
export class BottonComponent implements OnInit{

  @Input() text !:string ;
  @Input() color !:string ;
  @Output() btnClick = new EventEmitter();
  constructor(){}
  ngOnInit(): void {}
  onClick(){
    this.btnClick.emit()
  }
}
