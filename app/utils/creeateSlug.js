
 module.exports =  function createSlug(data) {
    return data.replace(/\s+/g, '-').toLowerCase();
}