/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { OnInit } from '@angular/core';
import { Layouts, LayoutService } from './providers/layout.service';
export declare class ClrLayout implements OnInit {
    layoutService: LayoutService;
    layout: Layouts;
    constructor(layoutService: LayoutService);
    ngOnInit(): void;
}
