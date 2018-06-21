import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  animals: string[] = [];

  constructor(
    private ngZone: NgZone,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.animals = ['Lion', 'Tiger', 'Wolf', 'Elephant', 'Cheetah', 'Rhino', 'Panther'];
  }

  onCloseClick(): void {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  onAnimalSelect(animal) {
    this.ngZone.run(() => {
      this.dialogRef.close(animal);
    });
  }

}
