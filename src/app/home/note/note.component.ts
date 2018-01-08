import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  private name: 'The Force Awekens';
  checkModel: any = { select1: false,
                      select2: true,
                      select3: false,
                      select4: false,
                      select5: false,
                      select6: false,
                      select7: false,
                      select8: false,
                      select9: false,
                      select10: false,
                      select11: false
                    };
  constructor() { }

  ngOnInit() {
  }

}
