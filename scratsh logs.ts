import { readFileSync } from 'fs';

type LogEntry = {
    datetime: string;
    seconds: number;
    level: string;
    message: string;
};

interface Result {
    data: LogEntry[];
    uniqueLevels: Set<string>;
}

function parseLogs(logs: string): Result {
    const logEntries: LogEntry[] = [];
    const logLines = logs.split('\n');
    const levels: Set<string> = new Set();

    logLines.forEach((logLine) => {
        const match = logLine.match(
            /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}) \(\s*(\d+\.\d+|\d+)s\) (\w+)\s+\(([^)]+)\) (.*)$/,
        );

        if (match) {
            const [, datetime, seconds, level, , message] = match;
            logEntries.push({
                datetime,
                seconds: parseFloat(seconds),
                level,
                message,
            });
            levels.add(level);
        }
    });

    return { data: logEntries, uniqueLevels: levels };
}

const content = readFileSync('./testlogs.txt');
console.log(
    parseLogs(content.toString()).data.filter((item) => item.level === 'ERROR'),
);
