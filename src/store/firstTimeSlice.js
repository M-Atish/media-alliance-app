export const firstTimeSlice = (set, get) => ({
    firstTime: false,
    toggleFirstTime: () => set((prev) => ({ firstTime: !prev.firstTime })),
})
