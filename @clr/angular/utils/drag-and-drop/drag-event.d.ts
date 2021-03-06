import { DragEventInterface, DragPointPosition } from './interfaces/drag-event.interface';
export declare class ClrDragEvent<T> {
    dragPosition: DragPointPosition;
    group: string | string[];
    dragDataTransfer: T;
    dropPointPosition: {
        pageX: number;
        pageY: number;
    };
    constructor(dragEvent: DragEventInterface<T>);
}
