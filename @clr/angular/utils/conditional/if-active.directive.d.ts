import { EventEmitter, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { IfActiveService } from './if-active.service';
export declare class ClrIfActive implements OnDestroy {
    private ifActiveService;
    private id;
    private template;
    private container;
    private subscription;
    private wasActive;
    constructor(ifActiveService: IfActiveService, id: number, template: TemplateRef<any>, container: ViewContainerRef);
    private checkAndUpdateView;
    /*********
     *
     * @description
     * A setter that updates IfActiveService.active with value.
     *
     * @param value
     */
    /********
    *
    * @description
    * A getter that returns the current IfActiveService.active value.
    */
    active: boolean;
    /**********
     * @property activeChange
     *
     * @description
     * An event emitter that emits when the active property is set to allow for 2way binding when the directive is
     * used with de-structured / de-sugared syntax.
     *
     */
    activeChange: EventEmitter<boolean>;
    /*********
     *
     * @description
     * Function that takes a any value and either created an embedded view for the associated ViewContainerRef or,
     * Clears all views from the ViewContainerRef
     * @param value
     */
    updateView(value: boolean): void;
    ngOnDestroy(): void;
}
