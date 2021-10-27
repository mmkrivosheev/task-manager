import {useMemo} from "react";

export const useSortedTasks = (tasks, filter) => {
    const sortedTasks = useMemo(() => {
        return [...tasks].sort((a, b) => (a[filter].toString()).localeCompare(b[filter].toString()));
    }, [filter, tasks]);

    return sortedTasks;
};

export const useTasks = (tasks, filter, search) => {
    const sortedTasks = useSortedTasks(tasks, filter);

    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks.filter(task => task.title.toLowerCase().includes(search));
    }, [search, sortedTasks]);

    return sortedAndSearchedTasks;
};

