import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../../providers/programs.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public programs : any[];
  public data : any[];
  constructor(private _ProgramService:ProgramsService ) { }
  public filter : string;
  public loading : boolean = true;

  ngOnInit() {
    setTimeout(()=> {
      this.onLoadPrograms();
    },1000)
  }
  onLoadPrograms(){
    this._ProgramService.getProgramss().subscribe(programs => {
      this.programs = programs;
      this.data = programs;
      this.loading = false;
    });
  }
  onSearch(){
    let filter = this.filter;
    this.programs = this.data.filter(function(programs) {
      console.log(programs.name.toUpperCase().indexOf(filter.toUpperCase()))
      return programs.name.toUpperCase().indexOf(filter.toUpperCase()) >= 0 ;
    });
  }
  
}
