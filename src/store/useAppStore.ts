import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Dosha = 'Vata' | 'Pitta' | 'Kapha' | '';
type NotifPref = 'Push' | 'Email' | 'Minimal' | '';

interface AppState {
  hasOnboarded: boolean;
  wellnessGoals: string[];
  dosha: Dosha;
  healthConditions: string[];
  preferences: {
    city: string;
    budget: number;
    treatments: string[];
    centres: string[];
    notifPref: NotifPref;
  };

  userProfile: {
    name: string;
    email: string;
    phone: string;
    bio: string;
    avatarUrl?: string;
  };

  savedVendorIds: string[];

  // Actions
  setHasOnboarded: (value: boolean) => void;
  setWellnessGoals: (goals: string[]) => void;
  setDosha: (dosha: Dosha) => void;
  setHealthConditions: (conditions: string[]) => void;
  setPreferences: (prefs: Partial<AppState['preferences']>) => void;
  updateUserProfile: (profile: Partial<AppState['userProfile']>) => void;
  toggleSavedVendor: (vendorId: string) => void;
  completeOnboarding: () => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasOnboarded: localStorage.getItem('hasOnboarded') === 'true',
      wellnessGoals: [],
      dosha: '',
      healthConditions: [],
      preferences: {
        city: '',
        budget: 5000,
        treatments: [],
        centres: [],
        notifPref: '',
      },

      userProfile: {
        name: 'Priya Nair',
        email: 'priya.nair@example.com',
        phone: '+91 98765 43210',
        bio: 'Wellness Enthusiast · Yoga Practitioner',
        avatarUrl: '',
      },

      savedVendorIds: [],

      setHasOnboarded: (value) => {
        set({ hasOnboarded: value });
        localStorage.setItem('hasOnboarded', value.toString());
      },
      setWellnessGoals: (goals) => set({ wellnessGoals: goals }),
      setDosha: (dosha) => set({ dosha }),
      setHealthConditions: (conditions) => set({ healthConditions: conditions }),
      setPreferences: (prefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...prefs },
        })),
      updateUserProfile: (profile) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...profile },
        })),
      toggleSavedVendor: (vendorId) =>
        set((state) => ({
          savedVendorIds: state.savedVendorIds.includes(vendorId)
            ? state.savedVendorIds.filter((id) => id !== vendorId)
            : [...state.savedVendorIds, vendorId],
        })),
      completeOnboarding: () => {
        set({ hasOnboarded: true });
        localStorage.setItem('hasOnboarded', 'true');
      },
      logout: () => {
        set({
          hasOnboarded: false,
          wellnessGoals: [],
          dosha: '',
          healthConditions: [],
          preferences: {
            city: '',
            budget: 5000,
            treatments: [],
            centres: [],
            notifPref: '',
          },
          userProfile: {
            name: '',
            email: '',
            phone: '',
            bio: '',
            avatarUrl: '',
          },
          savedVendorIds: [],
        });
        localStorage.removeItem('hasOnboarded');
      },
    }),
    {
      name: 'sharira-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
