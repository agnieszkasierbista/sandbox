export const CLOSE = "CLOSE";
export const CANCEL_X = "CANCEL_X";
export const CONFIRM_X = "CONFIRM_X";
export const CANCEL = "CANCEL";
export const CLEAR = "CLEAR";
export const CANCEL_AND_CLOSE = "CANCEL_AND_CLOSE";
export const CONFIRM = "CONFIRM";
export const SAVE = "SAVE";
export const CONFIRM_AND_CLOSE = "CONFIRM_AND_CLOSE";

export function close() {return {type: CLOSE}}
export function cancelX() {return {type: CANCEL_X}}
export function confirmX() {return {type: CONFIRM}}
export function cancel() {return {type: CANCEL}}
export function clear() {return {type: CLEAR}}
export function cancelAndClose() {return {type: CANCEL_AND_CLOSE}}
export function confirm() {return {type: CONFIRM}}
export function save() {return {type: SAVE}}
export function confirmAndClose() {return {type: CONFIRM_AND_CLOSE}}
