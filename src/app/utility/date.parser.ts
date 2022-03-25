import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { DateTimeFormatter, LocalDateTime, ZonedDateTime, ZoneId } from '@js-joda/core';
import '@js-joda/timezone';
import { Locale } from '@js-joda/locale_en';

@Injectable({
    providedIn: 'root'
})

export class DateParser {

    ParseDate(utcDate: any, timezoneId: string){
        let zonedDate = this.ConvertDate(utcDate, timezoneId);
        return this.FormatDate(zonedDate);
    }

    private ConvertDate(utcDate: any, timezoneId: string): ZonedDateTime {
        let localDateTimeString = LocalDateTime
            .parse(utcDate)
            .atZone(ZoneId.UTC)
            .toString();
        
        let zonedDateTime = ZonedDateTime
            .parse(localDateTimeString)
            .withZoneSameInstant(ZoneId.of(timezoneId));
        
        return zonedDateTime;
    }

    private FormatDate(date: ZonedDateTime): string {
        return date.format(DateTimeFormatter.ofPattern("dd/MMM/yyyy, hh:mm a").withLocale(Locale.ENGLISH));
    }
}