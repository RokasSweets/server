const utils = {};

utils.fileExtension = (url) => {
    const parts = url.split('?')[0].split('.');
    return parts.length === 1 ? '' : parts.at(-1);
}

export { utils }