import { writable } from 'svelte/store';

export const mobile = writable(false);

export const show = writable(false);

export const selectedMenuOption = writable(0);