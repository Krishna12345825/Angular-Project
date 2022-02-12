import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase';
  courses$;

  constructor(private db:AngularFireDatabase){
    this.courses$=db.list('/courses').snapshotChanges();
    // this.courses$=db.list('/courses').valueChanges();
  }

  add(cname:HTMLInputElement,fees:HTMLInputElement)
  {
    var name=cname.value;
    var fee:number=Number(fees.value);
    this.db.list('/courses').push({'coursename':name, 'fees':fee});
  }

  update(ufees:HTMLInputElement,id:any)
  {
    var ufee:number=Number(ufees.value);
    this.db.list('/courses').update(id,{'fees':ufee});
    // this.db.list('/course').remove(id);
  }
}
