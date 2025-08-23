
/**
 * Serializes the preset object into a Base64-encoded JSON string.
 * This is useful for easily sharing presets via URL parameters or simple text.
 * @returns {string} A Base64-encoded JSON string representation of the preset.
 */
function serialize(obj) {
    const jsonString = JSON.stringify(obj);
    return btoa(jsonString);
}

/**
 * Deserializes a Base64-encoded JSON string into a generic object.
 * @param {string} base64String - The Base64-encoded JSON string to deserialize.
 * @returns An object.
 */
function deserialize(base64String) {
    const jsonString = atob(base64String);
    return JSON.parse(jsonString);
}
