import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FetchDataState {
    data: any;
    setData: (newData: any) => void;
    resetData: () => void;
}

const useFetchDataStore = create<FetchDataState>((set) => ({
    data: null,
    setData: (newData) => set({ data: newData }),
    resetData: () => set({ data: null }),
}));

interface UserState {
    user: any;
    setUser: (newUser: any) => void;
    resetUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (newUser) => set({ user: newUser }),
    resetUser: () => set({ user: null }),
}));

interface AdminState {
    admin: string;
    setAdmin: (newAdmin: string) => void;
    resetAdmin: () => void;
}

const useAdminStore = create<AdminState>()(
    persist(
        (set) => ({
            admin: '',
            setAdmin: (newAdmin) => set({ admin: newAdmin }),
            resetAdmin: () => set({ admin: '' }),
        }),
        {
            name: 'admin-storage', // localStorage 키 이름
        }
    )
);

interface BlogState{
    topBlogs: any;
    setTopBlogs: (newTopBlogs: any) => void;
    isTopBlogsLoading: boolean;
    setIsTopBlogsLoading: (newIsTopBlogsLoading: boolean) => void;
    resetTopBlogs: () => void;

    recentBlogs: any;
    setRecentBlogs: (newRecentBlogs: any) => void;
    isRecentBlogsLoading: boolean;
    setIsRecentBlogsLoading: (newIsRecentBlogsLoading: boolean) => void;
    resetRecentBlogs: () => void;

    blogs: any;
    setBlogs: (newBlogs: any) => void;
    resetBlogs: () => void;
    isBlogsLoading: boolean;
    setIsBlogsLoading: (newIsBlogsLoading: boolean) => void;
}

const useBlogStore = create<BlogState>((set) => ({
    topBlogs: null,
    setTopBlogs: (newTopBlogs) => set({ topBlogs: newTopBlogs }),
    resetTopBlogs: () => set({ topBlogs: null }),
    isTopBlogsLoading: false,
    setIsTopBlogsLoading: (newIsTopBlogsLoading: boolean) => set({ isTopBlogsLoading: newIsTopBlogsLoading }),

    recentBlogs: null,
    setRecentBlogs: (newRecentBlogs) => set({ recentBlogs: newRecentBlogs }),
    resetRecentBlogs: () => set({ recentBlogs: null }),
    isRecentBlogsLoading: false,
    setIsRecentBlogsLoading: (newIsRecentBlogsLoading: boolean) => set({ isRecentBlogsLoading: newIsRecentBlogsLoading }),

    blogs: null,
    setBlogs: (newBlogs) => set({ blogs: newBlogs }),
    resetBlogs: () => set({ blogs: null }),
    isBlogsLoading: false,
    setIsBlogsLoading: (newIsBlogsLoading: boolean) => set({ isBlogsLoading: newIsBlogsLoading }),

}));

interface CodeState{
    codes: any;
    setCodes: (newCodes: any) => void;
    resetCodes: () => void;
}

const useCodeStore = create<CodeState>((set) => ({
    codes: null,
    setCodes: (newCodes) => set({ codes: newCodes }),
    resetCodes: () => set({ codes: null }),
}));

interface VisitLogState{
    visitLogs: any;
    setVisitLogs: (newVisitLogs: any) => void;
    resetVisitLogs: () => void;
}

const useVisitLogStore = create<VisitLogState>((set) => ({
    visitLogs: null,
    setVisitLogs: (newVisitLogs) => set({ visitLogs: newVisitLogs }),
    resetVisitLogs: () => set({ visitLogs: null }),
}));

export { useFetchDataStore, useUserStore, useBlogStore, useCodeStore, useVisitLogStore, useAdminStore };