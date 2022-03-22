import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Ahmed Ali's Sheet (Course ID: 144) - Zamzam Institute")
  }

}
