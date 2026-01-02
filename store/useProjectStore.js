import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProjectStore = create(
    persist(
        (set) => ({
            // State
            frontend: 'nextjs',
            styling: ['tailwind'],
            language: 'javascript',
            backend: 'none',
            projectName: '',

            // Actions
            setFrontend: (frontend) => set({ frontend }),
            setStyling: (styling) => set({ styling }),
            setLanguage: (language) => set({ language }),
            setBackend: (backend) => set({ backend }),
            setProjectName: (projectName) => set({ projectName }),

            setStack: (stack) => set({
                frontend: stack.frontend,
                styling: stack.styling,
                language: stack.language,
                backend: stack.backend,
                projectName: stack.projectName || '',
            }),

            toggleStyling: (option) => set((state) => {
                const index = state.styling.indexOf(option);
                if (index === -1) {
                    return { styling: [...state.styling, option] };
                } else {
                    return { styling: state.styling.filter((s) => s !== option) };
                }
            }),

            resetProject: () => set({
                frontend: 'nextjs',
                styling: ['tailwind'],
                language: 'javascript',
                backend: 'none',
                projectName: '',
            }),
        }),
        {
            name: 'project-storage',
        }
    )
);

export default useProjectStore;
