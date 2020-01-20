export function getParams(requestParams) {
    return requestParams
        ? `?${Object.keys(requestParams)
              .map((key) => (requestParams[key] ? `${key}=${requestParams[key]}` : ''))
              .filter(Boolean)
              .join('&')}`
        : '';
}
