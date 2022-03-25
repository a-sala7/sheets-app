import { DateParser } from "../utility/date.parser";

export class LectureSheetDTO {
    Id: number;
    AttendanceStatus: string;
    New: string;
    Notes: string;
    Revision: string;
    FunActivities: string;
    StartTimeUtc: Date;
    DisplayDate: string;
}