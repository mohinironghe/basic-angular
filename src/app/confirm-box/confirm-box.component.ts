import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.css']
})
export class ConfirmBoxComponent implements OnInit {

  constructor(public dialog:MatDialog ) { }

  ngOnInit() {
  }
  openDialog():void{
    const dialogRef = this.dialog.open( ConfirmationDialogComponent,{
      width:'350px',
      data:"Do you confirm the deletion of this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('yes clicked');
      }
    })
  }
}
