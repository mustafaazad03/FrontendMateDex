/**
 * Given some time in seconds, returns formatted string in format "{value}{unit}"
 * @dev Assumes that things will fail much before a transition beyond 59m 59s
 * @param {number} s seconds value
 * @returns {string} formatted string
 */
export function renderTimeSince(s: number): string {
    // If minutes not relevant, return seconds
    if (s < 60) return `${s}s`;
    // Else, get number of minutes
    const seconds: number = s % 60;
    const minutes: number = (s - seconds) / 60;
    return `${minutes}m ${seconds}s`;
}

export function unixTimestampToDate(unixTimestamp: number): string {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
    return new Date(unixTimestamp * 1000).toLocaleDateString("en-US", options);
}

export function timeAgoUnix(unixTimestamp: number) {
    const currentDate = new Date();
    const timestampDate = new Date(unixTimestamp * 1000); // Convert to milliseconds
    // @ts-expect-error
    const timeDifference = currentDate - timestampDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
        return `${minutes}m${minutes !== 1 ? "s" : ""} ago`;
    } else {
        return "just now";
    }
}

export function formatTimeAgoStr(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const elapsedMilliseconds = now.getTime() - date.getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000); // 1 minute = 60000 milliseconds
    const elapsedHours = Math.floor(elapsedMinutes / 60); // 1 hour = 60 minutes
    const elapsedDays = Math.floor(elapsedHours / 24); // 1 day = 24 hours

    if (elapsedMinutes < 1) {
        return "just now";
    } else if (elapsedMinutes < 60) {
        return `${elapsedMinutes}${elapsedMinutes === 1 ? "m" : "m"} ago`;
    } else if (elapsedHours < 24) {
        const remainingMinutes = elapsedMinutes % 60;
        return `${elapsedHours}${elapsedHours === 1 ? "h" : "h"} ago`;
    } else {
        return `${elapsedDays}${elapsedDays === 1 ? "d" : "d"} ago`;
    }
}
