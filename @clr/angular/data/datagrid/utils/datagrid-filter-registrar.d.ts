import { OnDestroy } from '@angular/core';
import { ClrDatagridFilterInterface } from '../interfaces/filter.interface';
import { FiltersProvider, RegisteredFilter } from '../providers/filters';
export declare abstract class DatagridFilterRegistrar<T, F extends ClrDatagridFilterInterface<T>> implements OnDestroy {
    private filters;
    constructor(filters: FiltersProvider<T>);
    registered: RegisteredFilter<T, F>;
    readonly filter: F;
    setFilter(filter: F | RegisteredFilter<T, F>): void;
    deleteFilter(): void;
    ngOnDestroy(): void;
}
