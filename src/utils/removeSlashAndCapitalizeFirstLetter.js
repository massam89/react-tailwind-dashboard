const removeSlashAndCapitalizeFirstLetter = (string) => {
    return (string.replace(/^\/+/i, '')).charAt(0).toUpperCase() + (string.replace(/^\/+/i, '')).slice(1);
}

export default removeSlashAndCapitalizeFirstLetter