import { writable } from "svelte/store";
import { TYPES } from "./constants";

export const qrType = writable(TYPES.URL);
export const qrData = writable("");
