
 module.exports =  function createSlug(data) {
    console.log(data)
    return data.replace(/\s+/g, '-').toLowerCase();
}