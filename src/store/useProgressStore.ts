import { create } from 'zustand';

interface ProgressState {
  currentModule: number;
  currentLessonIndex: number;
  completedLessons: string[];
  
  setCurrentModule: (moduleId: number) => void;
  nextLesson: (totalLessons: number) => void;
  prevLesson: () => void;
  markLessonCompleted: (lessonId: string) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  currentModule: 1,
  currentLessonIndex: 0,
  completedLessons: [],

  setCurrentModule: (moduleId) => set({ currentModule: moduleId, currentLessonIndex: 0 }),
  
  nextLesson: (totalLessons) => set((state) => ({
    currentLessonIndex: Math.min(state.currentLessonIndex + 1, totalLessons - 1)
  })),

  prevLesson: () => set((state) => ({
    currentLessonIndex: Math.max(state.currentLessonIndex - 1, 0)
  })),

  markLessonCompleted: (lessonId) => set((state) => ({
    completedLessons: state.completedLessons.includes(lessonId) 
      ? state.completedLessons 
      : [...state.completedLessons, lessonId]
  }))
}));
