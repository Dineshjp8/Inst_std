import { create } from 'zustand';

const useStudentStore = create((set) => ({
  students: [],
  fetchStudents: async () => {
    const response = await fetch('/api/students');
    const data = await response.json();
    set({ students: data });
  },
}));

export default useStudentStore;
