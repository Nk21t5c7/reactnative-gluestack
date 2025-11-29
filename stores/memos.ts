import { useSyncExternalStore } from 'react';

export type Memo = { id: string; title: string; content: string };

let memos: Memo[] = [];
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}
function getSnapshot() {
    return memos;
}

export function useMemos() {
    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function addMemo(title: string, content: string) {
    if (!title && !content) return;
    memos = [{ id: String(Date.now()), title: title, content: content }, ...memos];
    listeners.forEach((l) => l());
}

export function removeMemo(id: string) {
    memos = memos.filter((m) => m.id !== id);
    listeners.forEach((l) => l());
}

export function seedMemos(items: Memo[]) {
    memos = items.slice();
    listeners.forEach((l) => l());
}