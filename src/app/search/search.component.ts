import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchvalue: string ='';

  changesearchvalue(eventdata: any){
 console.log(eventdata);

this.searchvalue=(<HTMLInputElement>eventdata.target).value;

  }

  

}
