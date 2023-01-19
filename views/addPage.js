const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div>
        <label for="name" class="col-sm-2 control-label">Author Name</label>
        <input
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Author Name"
        />
      </div>
      <div>
        <label for="email" class="col-sm-2 control-label">Author Email</label>
        <input
          id="email"
          type="text"
          name="email"
          class="form-control"
          placeholder="Author Email"
        />
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div>
        <label for="content">Post</label>
        <textarea id="content" name="content" rows="15" cols="80"></textarea>
      </div>

      <div>
        <label for="status">Page Status</label>
        <select name="status" id="status">
          <option value="open" selected>Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
