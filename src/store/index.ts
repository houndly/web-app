import { create } from 'zustand'
import { createJSONStorage, persist, } from 'zustand/middleware';

type Store = {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
};

export const useStore = create(
    persist<Store>(
        (set) => ({
            token: null,
            setToken: (token: string) => set({ token }),
            clearToken: () => {
                set({ token: null });
                sessionStorage.removeItem('user-storage'); // Elimina el token de sessionStorage
            },
        }),
        {
            name: 'user-storage', // nombre del elemento en el almacenamiento (debe ser único)
            storage: createJSONStorage(() => sessionStorage), // usa 'createJSONStorage' con 'sessionStorage'
        }
    )
);
