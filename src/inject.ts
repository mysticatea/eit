/* DON'T EDIT THIS FILE; THIS IS AUTO-GENERATED. */
import dropWhile from "./lib/drop-while"
import drop from "./lib/drop"
import every from "./lib/every"
import filter from "./lib/filter"
import findIndex from "./lib/find-index"
import find from "./lib/find"
import forEach from "./lib/for-each"
import includes from "./lib/includes"
import indexOf from "./lib/index-of"
import join from "./lib/join"
import map from "./lib/map"
import reduce from "./lib/reduce"
import reverse from "./lib/reverse"
import slice from "./lib/slice"
import some from "./lib/some"
import takeWhile from "./lib/take-while"
import take from "./lib/take"
import toArray from "./lib/to-array"
import toMap from "./lib/to-map"
import toObject from "./lib/to-object"
import toSet from "./lib/to-set"
import { property } from "./utils"

const IteratorPrototype = Object.getPrototypeOf(
    Object.getPrototypeOf([][Symbol.iterator]()),
)
Object.defineProperties(IteratorPrototype, {
    dropWhile: property(dropWhile),
    drop: property(drop),
    every: property(every),
    filter: property(filter),
    findIndex: property(findIndex),
    find: property(find),
    forEach: property(forEach),
    includes: property(includes),
    indexOf: property(indexOf),
    join: property(join),
    map: property(map),
    reduce: property(reduce),
    reverse: property(reverse),
    slice: property(slice),
    some: property(some),
    takeWhile: property(takeWhile),
    take: property(take),
    toArray: property(toArray),
    toMap: property(toMap),
    toObject: property(toObject),
    toSet: property(toSet),
})

declare global {
    interface IterableIterator<T> {
        dropWhile<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): IterableIterator<T>
        dropWhile(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): IterableIterator<T>
        drop(count: number): IterableIterator<T>
        every<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): boolean
        every(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): boolean
        filter<R, U extends T>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
            thisArg: R,
        ): IterableIterator<U>
        filter<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): IterableIterator<T>
        filter<U extends T>(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
        ): IterableIterator<U>
        filter(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): IterableIterator<T>
        findIndex<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): number
        findIndex(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): number
        find<R, U extends T>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
            thisArg: R,
        ): U | undefined
        find<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): T | undefined
        find<U extends T>(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
        ): U | undefined
        find(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): T | undefined
        forEach<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => void,
            thisArg: R,
        ): void
        forEach(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => void,
        ): void
        includes(searchElement: T, fromIndex?: number): boolean
        indexOf(searchElement: T, fromIndex?: number): number
        join(separator?: string): string
        map<U, R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => U,
            thisArg: R,
        ): IterableIterator<U>
        map<U>(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => U,
        ): IterableIterator<U>
        reduce<U extends T>(
            callback: (
                accumulator: U,
                currentValue: T,
                currentIndex: number,
                iterator: IterableIterator<T>,
            ) => U,
            initialValue: U,
        ): U
        reduce(
            callback: (
                accumulator: T,
                currentValue: T,
                currentIndex: number,
                iterator: IterableIterator<T>,
            ) => T,
        ): T
        reverse(): IterableIterator<T>
        slice(start?: number, end?: number): IterableIterator<T>
        some<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): boolean
        some(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): boolean
        takeWhile<R, U extends T>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
            thisArg: R,
        ): IterableIterator<U>
        takeWhile<R>(
            callback: (
                this: R,
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
            thisArg: R,
        ): IterableIterator<T>
        takeWhile<U extends T>(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => element is U,
        ): IterableIterator<U>
        takeWhile(
            callback: (
                element: T,
                index: number,
                iterator: IterableIterator<T>,
            ) => boolean,
        ): IterableIterator<T>
        take(count: number): IterableIterator<T>
        toArray(): Array<T>
        toSet(): Set<T>
    }
}
