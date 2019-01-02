/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Point } from '../common/popover';
/**
 * @record
 */
export function Position() { }
if (false) {
    /** @type {?} */
    Position.prototype.anchorPoint;
    /** @type {?} */
    Position.prototype.popoverPoint;
    /** @type {?} */
    Position.prototype.offsetY;
    /** @type {?} */
    Position.prototype.offsetX;
}
/** @type {?} */
export const SIGNPOST_POSITIONS = {
    'top-left': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_RIGHT, offsetY: -10, offsetX: 0 },
    'top-middle': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_CENTER, offsetY: -10, offsetX: 0 },
    'top-right': { anchorPoint: Point.TOP_CENTER, popoverPoint: Point.BOTTOM_LEFT, offsetY: -10, offsetX: 0 },
    'right-top': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_BOTTOM, offsetY: 2, offsetX: 14 },
    'right-middle': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_CENTER, offsetY: 6, offsetX: 14 },
    'right-bottom': { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_TOP, offsetY: -1, offsetX: 14 },
    'bottom-right': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_LEFT, offsetY: 9, offsetX: -1 },
    'bottom-middle': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_CENTER, offsetY: 9, offsetX: 12 },
    'bottom-left': { anchorPoint: Point.BOTTOM_CENTER, popoverPoint: Point.TOP_RIGHT, offsetY: 9, offsetX: 0 },
    'left-bottom': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_TOP, offsetY: 0, offsetX: -14 },
    'left-middle': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_CENTER, offsetY: 4, offsetX: -14 },
    'left-top': { anchorPoint: Point.LEFT_CENTER, popoverPoint: Point.RIGHT_BOTTOM, offsetY: 0, offsetX: -14 },
    default: { anchorPoint: Point.RIGHT_CENTER, popoverPoint: Point.LEFT_CENTER, offsetY: 6, offsetX: 14 },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnBvc3QtcG9zaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNsci9hbmd1bGFyLyIsInNvdXJjZXMiOlsicG9wb3Zlci9zaWducG9zdC9zaWducG9zdC1wb3NpdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTFDLDhCQUtDOzs7SUFKQywrQkFBbUI7O0lBQ25CLGdDQUFvQjs7SUFDcEIsMkJBQWdCOztJQUNoQiwyQkFBZ0I7OztBQUdsQixNQUFNLE9BQU8sa0JBQWtCLEdBQWtDO0lBQy9ELFVBQVUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ3pHLFlBQVksRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQzVHLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO0lBQ3pHLFdBQVcsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtJQUMxRyxjQUFjLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7SUFDN0csY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7SUFDM0csY0FBYyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDM0csZUFBZSxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO0lBQzlHLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtJQUMxRyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMxRyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUM3RyxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMxRyxPQUFPLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Q0FDdkciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9wb3BvdmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gIGFuY2hvclBvaW50OiBQb2ludDtcbiAgcG9wb3ZlclBvaW50OiBQb2ludDtcbiAgb2Zmc2V0WTogbnVtYmVyO1xuICBvZmZzZXRYOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBTSUdOUE9TVF9QT1NJVElPTlM6IHsgW2lucHV0OiBzdHJpbmddOiBQb3NpdGlvbiB9ID0ge1xuICAndG9wLWxlZnQnOiB7IGFuY2hvclBvaW50OiBQb2ludC5UT1BfQ0VOVEVSLCBwb3BvdmVyUG9pbnQ6IFBvaW50LkJPVFRPTV9SSUdIVCwgb2Zmc2V0WTogLTEwLCBvZmZzZXRYOiAwIH0sXG4gICd0b3AtbWlkZGxlJzogeyBhbmNob3JQb2ludDogUG9pbnQuVE9QX0NFTlRFUiwgcG9wb3ZlclBvaW50OiBQb2ludC5CT1RUT01fQ0VOVEVSLCBvZmZzZXRZOiAtMTAsIG9mZnNldFg6IDAgfSxcbiAgJ3RvcC1yaWdodCc6IHsgYW5jaG9yUG9pbnQ6IFBvaW50LlRPUF9DRU5URVIsIHBvcG92ZXJQb2ludDogUG9pbnQuQk9UVE9NX0xFRlQsIG9mZnNldFk6IC0xMCwgb2Zmc2V0WDogMCB9LFxuICAncmlnaHQtdG9wJzogeyBhbmNob3JQb2ludDogUG9pbnQuUklHSFRfQ0VOVEVSLCBwb3BvdmVyUG9pbnQ6IFBvaW50LkxFRlRfQk9UVE9NLCBvZmZzZXRZOiAyLCBvZmZzZXRYOiAxNCB9LFxuICAncmlnaHQtbWlkZGxlJzogeyBhbmNob3JQb2ludDogUG9pbnQuUklHSFRfQ0VOVEVSLCBwb3BvdmVyUG9pbnQ6IFBvaW50LkxFRlRfQ0VOVEVSLCBvZmZzZXRZOiA2LCBvZmZzZXRYOiAxNCB9LFxuICAncmlnaHQtYm90dG9tJzogeyBhbmNob3JQb2ludDogUG9pbnQuUklHSFRfQ0VOVEVSLCBwb3BvdmVyUG9pbnQ6IFBvaW50LkxFRlRfVE9QLCBvZmZzZXRZOiAtMSwgb2Zmc2V0WDogMTQgfSxcbiAgJ2JvdHRvbS1yaWdodCc6IHsgYW5jaG9yUG9pbnQ6IFBvaW50LkJPVFRPTV9DRU5URVIsIHBvcG92ZXJQb2ludDogUG9pbnQuVE9QX0xFRlQsIG9mZnNldFk6IDksIG9mZnNldFg6IC0xIH0sXG4gICdib3R0b20tbWlkZGxlJzogeyBhbmNob3JQb2ludDogUG9pbnQuQk9UVE9NX0NFTlRFUiwgcG9wb3ZlclBvaW50OiBQb2ludC5UT1BfQ0VOVEVSLCBvZmZzZXRZOiA5LCBvZmZzZXRYOiAxMiB9LFxuICAnYm90dG9tLWxlZnQnOiB7IGFuY2hvclBvaW50OiBQb2ludC5CT1RUT01fQ0VOVEVSLCBwb3BvdmVyUG9pbnQ6IFBvaW50LlRPUF9SSUdIVCwgb2Zmc2V0WTogOSwgb2Zmc2V0WDogMCB9LFxuICAnbGVmdC1ib3R0b20nOiB7IGFuY2hvclBvaW50OiBQb2ludC5MRUZUX0NFTlRFUiwgcG9wb3ZlclBvaW50OiBQb2ludC5SSUdIVF9UT1AsIG9mZnNldFk6IDAsIG9mZnNldFg6IC0xNCB9LFxuICAnbGVmdC1taWRkbGUnOiB7IGFuY2hvclBvaW50OiBQb2ludC5MRUZUX0NFTlRFUiwgcG9wb3ZlclBvaW50OiBQb2ludC5SSUdIVF9DRU5URVIsIG9mZnNldFk6IDQsIG9mZnNldFg6IC0xNCB9LFxuICAnbGVmdC10b3AnOiB7IGFuY2hvclBvaW50OiBQb2ludC5MRUZUX0NFTlRFUiwgcG9wb3ZlclBvaW50OiBQb2ludC5SSUdIVF9CT1RUT00sIG9mZnNldFk6IDAsIG9mZnNldFg6IC0xNCB9LFxuICBkZWZhdWx0OiB7IGFuY2hvclBvaW50OiBQb2ludC5SSUdIVF9DRU5URVIsIHBvcG92ZXJQb2ludDogUG9pbnQuTEVGVF9DRU5URVIsIG9mZnNldFk6IDYsIG9mZnNldFg6IDE0IH0sXG59O1xuIl19