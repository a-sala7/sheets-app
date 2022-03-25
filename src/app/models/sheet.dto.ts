import { PagedResult } from "./paged.result";
import { LectureSheetDTO } from "./sheet.lecture.dto";

export class SheetDTO {
    CourseId: number;
    TeacherId: string;
    TeacherName: string;
    StudentId: number;
    StudentName: string;
    StudentTimeZoneId: string;
    StudentTimeZoneName: string;
    Lectures: PagedResult<LectureSheetDTO>;
}