import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(private http: HttpClient) { }

  getProgramss(): Observable<any>{
    return this.http.get("assets/data.json")
  } 

}
