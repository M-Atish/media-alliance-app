export const darkModeSlice = (set, get) => ({
    darkMode: false,
    toggleDarkMode: () => set((prev) => ({ darkMode: !prev.darkMode })),
})
