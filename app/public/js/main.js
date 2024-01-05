const app = {
  url: 'http://memo_back:3001',
  local: 'http://localhost:3001',
  init() {

    app.click('#test-btn', app.test);
    app.text = app.select('h2');
    app.main = app.select('main');
    app.form = app.select('form');
    app.cube = app.select('.cube');
    app.fall = app.select('.fall');
    app.delay = app.select('.form-delay');
  },

  select(elem) {
    return document.querySelector(elem);
  },

  check(elem, callback) {
    return document.querySelector(elem).addEventListener('change', callback);
  },
  submit(elem, callback) {
    return document.querySelector(elem).addEventListener('submit', callback);
  },
  click(elem, callback) {
    return document.querySelector(elem).addEventListener('click', callback);
  },

  create(elem, parent) {
    return app.select(parent).appendChild(document.createElement(elem));
  },

  async test() {
    try {
      const response = await fetch(`${app.url}/api/memo`);
      const data = await response.json();
      console.log(data);
    }catch (err) {
      console.log(err);
    }
  },

};
document.addEventListener('DOMContentLoaded', app.init);
