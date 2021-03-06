/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { first } from 'rxjs/operators';
/**
 * This service focuses the day that is focusable in the calendar.
 */
var DatepickerFocusService = /** @class */ (function () {
    function DatepickerFocusService(_ngZone, platformId) {
        this._ngZone = _ngZone;
        this.platformId = platformId;
    }
    // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    /**
     * @param {?} elRef
     * @return {?}
     */
    DatepickerFocusService.prototype.focusCell = 
    // Credit: Material: https://github.com/angular/material2/blob/master/src/lib/datepicker/calendar.ts
    /**
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable
                .asObservable()
                .pipe(first())
                .subscribe(function () {
                if (isPlatformBrowser(_this.platformId)) {
                    /** @type {?} */
                    var focusEl = elRef.nativeElement.querySelector('[tabindex="0"]');
                    if (focusEl) {
                        focusEl.focus();
                    }
                }
            });
        });
    };
    DatepickerFocusService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DatepickerFocusService.ctorParameters = function () { return [
        { type: NgZone },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return DatepickerFocusService;
}());
export { DatepickerFocusService };
if (false) {
    /** @type {?} */
    DatepickerFocusService.prototype._ngZone;
    /** @type {?} */
    DatepickerFocusService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb2N1cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZm9ybXMvZGF0ZXBpY2tlci9wcm92aWRlcnMvZGF0ZXBpY2tlci1mb2N1cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3ZDO0lBRUUsZ0NBQW9CLE9BQWUsRUFBK0IsVUFBa0I7UUFBaEUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUcsQ0FBQztJQUV4RixvR0FBb0c7Ozs7OztJQUNwRywwQ0FBUzs7Ozs7O0lBQVQsVUFBVSxLQUFpQjtRQUEzQixpQkFjQztRQWJDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2lCQUNsQixZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNiLFNBQVMsQ0FBQztnQkFDVCxJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7d0JBQ2hDLE9BQU8sR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDbkUsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNqQjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQkYsVUFBVTs7OztnQkFOOEIsTUFBTTtnQkFRaUMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7O0lBa0IxRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHNCQUFzQjs7O0lBQ3JCLHlDQUF1Qjs7SUFBRSw0Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0YWJsZSwgTmdab25lLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhpcyBzZXJ2aWNlIGZvY3VzZXMgdGhlIGRheSB0aGF0IGlzIGZvY3VzYWJsZSBpbiB0aGUgY2FsZW5kYXIuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRm9jdXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7fVxuXG4gIC8vIENyZWRpdDogTWF0ZXJpYWw6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9ibG9iL21hc3Rlci9zcmMvbGliL2RhdGVwaWNrZXIvY2FsZW5kYXIudHNcbiAgZm9jdXNDZWxsKGVsUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZVxuICAgICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgLnBpcGUoZmlyc3QoKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvY3VzRWwgPSBlbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleD1cIjBcIl0nKTtcbiAgICAgICAgICAgIGlmIChmb2N1c0VsKSB7XG4gICAgICAgICAgICAgIGZvY3VzRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=