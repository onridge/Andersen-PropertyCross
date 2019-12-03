export function getParams(obj) {
    return `?${Object.entries(obj)
        .map((entries) => `${entries.join('=')}&`)
        .join('')}`;
}
