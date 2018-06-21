import { Component, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

declare var tinymce: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  content: string;
  editor: any;

  constructor(private ngZone: NgZone, public dialog: MatDialog) {}

  ngOnInit() {

    var self = this;

    tinymce.PluginManager.add('custom', function(editor, url) {
      // Add a button that opens a window
      editor.addButton('button1', {
        icon: true,
        tooltip: 'Dialog using built in window manager', 
        image: '/assets/images/custom.png',
        onclick: function() {
          // Open window
          editor.windowManager.open({
            title: 'Select an Animal',
            body: [
              {
                  type   : 'buttongroup',
                  name   : 'buttongroup',
                  label  : false,
                  items  : [
                      { 
                        text: 'Lion', 
                        value: 'Lion',
                        onclick: function(e) {
                          console.log(editor);
                          editor.insertContent('<span>Lion</span>', {format: 'raw'});
                          editor.windowManager.close();
                        } 
                      },
                      { 
                        text: 'Tiger', 
                        value: 'Tiger',
                        onclick: function(e) {
                          editor.insertContent('<span>Tiger</span>');
                          editor.windowManager.close();
                        }
                      }
                  ]
              }
            ],
            buttons: [{
              text: 'Close',
              onclick: 'close'
            }]  
          });
        }
      });
    
      // Adds a menu item to the tools menu
      editor.addButton('button2', {
        icon: true,
        tooltip: 'Custom Material Dialog', 
        image: '/assets/images/custom-1.png',
        onclick: function() {
          // Open window with a specific url
          self.ngZone.run(() => {
            self.openDialog();
          });
        }
      });
    
      return {
        getMetadata: function () {
          return  {
            name: "Custom plugin"
          };
        }
      };
    });

  }

  onTinyMCEInit({ event, editor }: any) {
    this.editor = editor;
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, { width: '500px' });

    dialogRef.afterClosed().subscribe(animal => {
      console.log('The dialog was closed');
      console.log(animal);
      this.editor.insertContent('<span>' + animal + '</span>');
    });
  }
}