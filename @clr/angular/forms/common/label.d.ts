import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlIdService } from './providers/control-id.service';
import { LayoutService } from './providers/layout.service';
import { NgControlService } from './providers/ng-control.service';
export declare class ClrLabel implements OnInit, OnDestroy {
    private controlIdService;
    private layoutService;
    private ngControlService;
    private renderer;
    private el;
    constructor(controlIdService: ControlIdService, layoutService: LayoutService, ngControlService: NgControlService, renderer: Renderer2, el: ElementRef);
    forAttr: string;
    private subscriptions;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
