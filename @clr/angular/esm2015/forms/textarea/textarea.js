/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ViewContainerRef, Renderer2, ElementRef, Injector, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { WrappedFormControl } from '../common/wrapped-control';
import { ClrTextareaContainer } from './textarea-container';
export class ClrTextarea extends WrappedFormControl {
    /**
     * @param {?} vcr
     * @param {?} injector
     * @param {?} control
     * @param {?} renderer
     * @param {?} el
     */
    constructor(vcr, injector, control, renderer, el) {
        super(vcr, ClrTextareaContainer, injector, control, renderer, el);
        this.index = 1;
    }
}
ClrTextarea.decorators = [
    { type: Directive, args: [{ selector: '[clrTextarea]', host: { '[class.clr-textarea]': 'true' } },] }
];
/** @nocollapse */
ClrTextarea.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Injector },
    { type: NgControl, decorators: [{ type: Self }, { type: Optional }] },
    { type: Renderer2 },
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    ClrTextarea.prototype.index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY2xyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJmb3Jtcy90ZXh0YXJlYS90ZXh0YXJlYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRzVELE1BQU0sT0FBTyxXQUFZLFNBQVEsa0JBQXdDOzs7Ozs7OztJQUd2RSxZQUNFLEdBQXFCLEVBQ3JCLFFBQWtCLEVBR2xCLE9BQWtCLEVBQ2xCLFFBQW1CLEVBQ25CLEVBQWM7UUFFZCxLQUFLLENBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBWDFELFVBQUssR0FBRyxDQUFDLENBQUM7SUFZcEIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsRUFBRTs7OztZQU45RCxnQkFBZ0I7WUFBeUIsUUFBUTtZQUM1RCxTQUFTLHVCQVliLElBQUksWUFDSixRQUFRO1lBZHlCLFNBQVM7WUFBRSxVQUFVOzs7O0lBUXpELDRCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMTggVk13YXJlLCBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCBJbmplY3RvciwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgV3JhcHBlZEZvcm1Db250cm9sIH0gZnJvbSAnLi4vY29tbW9uL3dyYXBwZWQtY29udHJvbCc7XG5pbXBvcnQgeyBDbHJUZXh0YXJlYUNvbnRhaW5lciB9IGZyb20gJy4vdGV4dGFyZWEtY29udGFpbmVyJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsclRleHRhcmVhXScsIGhvc3Q6IHsgJ1tjbGFzcy5jbHItdGV4dGFyZWFdJzogJ3RydWUnIH0gfSlcbmV4cG9ydCBjbGFzcyBDbHJUZXh0YXJlYSBleHRlbmRzIFdyYXBwZWRGb3JtQ29udHJvbDxDbHJUZXh0YXJlYUNvbnRhaW5lcj4ge1xuICBwcm90ZWN0ZWQgaW5kZXggPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZjcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQFNlbGYoKVxuICAgIEBPcHRpb25hbCgpXG4gICAgY29udHJvbDogTmdDb250cm9sLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgZWw6IEVsZW1lbnRSZWZcbiAgKSB7XG4gICAgc3VwZXIodmNyLCBDbHJUZXh0YXJlYUNvbnRhaW5lciwgaW5qZWN0b3IsIGNvbnRyb2wsIHJlbmRlcmVyLCBlbCk7XG4gIH1cbn1cbiJdfQ==