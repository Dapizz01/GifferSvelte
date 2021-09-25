import { writable } from "svelte/store";

export const videoURL = writable()

export const frames = writable([])

export const maxLength = writable(100)

export const similarityData = writable([])

export const videoWidth = writable()

export const videoHeight = writable()