
 module.exports =  function createSlug(data) {
    console.log("data", data)
    return data.trim().replace(/\s+/g, '-').toLowerCase();
}