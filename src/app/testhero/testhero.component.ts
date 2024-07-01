import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-testhero',
  templateUrl: './testhero.component.html',
  styleUrl: './testhero.component.css'
})
export class TestheroComponent {
  radioURL:string='';
constructor(private radio:TestServiceService){

}
listOfRadioStations:any[]=[];
ngOnInit(){
  this.radio.fetchRadio().subscribe((res:any=[])=>{
    console.log(res)
    this.listOfRadioStations=res.slice(0,50);
  })
}
@ViewChild('radioElement') radioElement!:ElementRef;
play(url:string)
{
  console.log(url);
  this.radioURL=url;
  this.radioElement.nativeElement.load();
  this.radioElement.nativeElement.play();
}
}
