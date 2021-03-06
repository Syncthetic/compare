import { Observable } from 'rxjs';
import { CalendarModel } from '../model/calendar.model';
import { DayModel } from '../model/day.model';
/**
 * This service is responsible for:
 * 1. Initializing the displayed calendar.
 * 2. Moving the calendar to the next, previous or current months
 * 3. Managing the focused and selected day models.
 */
export declare class DateNavigationService {
    private _displayedCalendar;
    readonly displayedCalendar: CalendarModel;
    private setDisplayedCalendar;
    /**
     * Variable to store today's date.
     */
    private _todaysFullDate;
    private _today;
    private initializeTodaysDate;
    readonly today: DayModel;
    selectedDay: DayModel;
    private _selectedDayChange;
    readonly selectedDayChange: Observable<DayModel>;
    /**
     * Notifies that the selected day has changed so that the date can be emitted to the user.
     * Note: Only to be called from day.ts
     */
    notifySelectedDayChanged(dayModel: DayModel): void;
    focusedDay: DayModel;
    /**
     * Initializes the calendar based on the selected day.
     */
    initializeCalendar(): void;
    changeMonth(month: number): void;
    changeYear(year: number): void;
    /**
     * Moves the displayed calendar to the next month.
     */
    moveToNextMonth(): void;
    /**
     * Moves the displayed calendar to the previous month.
     */
    moveToPreviousMonth(): void;
    /**
     * Moves the displayed calendar to the current month and year.
     */
    moveToCurrentMonth(): void;
    incrementFocusDay(value: number): void;
    private _displayedCalendarChange;
    /**
     * This observable lets the subscriber know that the displayed calendar has changed.
     */
    readonly displayedCalendarChange: Observable<void>;
    private _focusOnCalendarChange;
    /**
     * This observable lets the subscriber know that the focus should be applied on the calendar.
     */
    readonly focusOnCalendarChange: Observable<void>;
    private _focusedDayChange;
    /**
     * This observable lets the subscriber know that the focused day in the displayed calendar has changed.
     */
    readonly focusedDayChange: Observable<DayModel>;
}
