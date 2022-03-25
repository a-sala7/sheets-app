import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { SheetDTO } from '../models/sheet.dto';
import { SheetService } from '../services/sheet.service';
import { DateParser } from '../utility/date.parser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  sheet: SheetDTO;
  totalLecs: number;
  currPage: number = 1;
  loading: boolean = true;
  courseId: number;
  sk: string;

  public constructor(private titleService: Title,
    private sheetService: SheetService, private dateParser: DateParser,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    let courseIdParam = this.route.snapshot.paramMap.get("courseId");
    let skParam = this.route.snapshot.paramMap.get("sk");
    
    if(courseIdParam != null && parseInt(courseIdParam) != undefined){
      this.courseId = parseInt(courseIdParam);
    }
    if(skParam != null){
      this.sk = skParam;
    }
    
    this.getPage(1);
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  getPage(pageNumber: number){
    this.sheetService
    .GetSheet(this.courseId, this.sk, pageNumber)
      .subscribe((data: SheetDTO) => {
        this.sheet = data;
        this.totalLecs = data.Lectures.TotalCount;
        this.currPage = pageNumber;
        next: {
          this.titleService.setTitle(`${this.sheet.StudentName}'s Sheet - Zamzam Institute`);
          this.sheet.Lectures.Objects.forEach(element => {
            element.DisplayDate = this.dateParser
              .ParseDate(element.StartTimeUtc, this.sheet.StudentTimeZoneId);
          });
        }
      });
  }
}