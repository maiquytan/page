export const serialize = (obj) => {
  var str = [];
  Object.keys(obj).forEach(key => {
    if (key !== 'slug' && key !== 'id' && obj[key]) {
      str.push(key + '=' + obj[key])
    }
  })
  return str.join('&');
}
