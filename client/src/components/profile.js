import { useState } from "react";
import fetchData from "../services";
function Profile({ username, email, userid }) {
  var [title, setTitle] = useState("");
  var [desc, setDesc] = useState("");
  var [posts, setPosts] = useState([]);
  var [postsCalled, setPostsCalled] = useState(false);
  if (!postsCalled) {
    fetchData(`post/all/user?user_id=${userid}`, {}, "GET")
      .then((res) => {
        console.log(res);
        if (res.success) {
          setPosts(res.posts);
          setPostsCalled(true);
        }
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }
  return (
    <div>
      <div className="container" style={{ height: "80vh", paddingTop: "10vh" }}>
        <div className="row g-0 h-100 d-flex justify-content-center align-items-center">
          <div className="col-12 bg-white shadow-sm rounded p-3">
            <div className="text-center fs-3">Profile</div>
            <div>
              <label htmlFor="username" className="col-sm-2 col-form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                readOnly={true}
              />
            </div>
            <div>
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                readOnly={true}
              />
            </div>
          </div>
          <div className="col-12 my-2 bg-white p-3">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                console.log(title, "title");
                console.log(desc, "desc");
                await fetchData(
                    "post/create",
                    { title: title, user_id: userid, description: desc },
                    "POST"
                  )
                  .then((res) => {
                    if (res.success) {
                      console.log(res, "res create post");
                      setPostsCalled(false);
                      setTitle('');
                      setDesc('');
                      document.getElementById('title').value = '';
                      document.getElementById('desc').value = '';
                    }
                  })
                  .catch((err) => {
                    console.log(err, "err while adding post");
                  });
              }}
            >
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  required
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              <button className="btn btn-success" type="submit">
                Add post
              </button>
            </form>
          </div>
          <div className="col-12 bg-white p-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.length > 0 && posts.map(post => {
                    return <tr key={post._id}>
                        <td>{post.title}</td>
                        <td>{post.description}</td>
                        <td><button className="btn btn-danger" onClick={async() => {
                          await fetchData(`post/delete?post_id=${post._id}`, {}, 'DELETE').then(res => {
                            if (res.success) {
                              console.log(res);
                              setPostsCalled(false);
                            } else {
                              alert(res.error_message);
                            }
                          }).catch(err => {
                            console.log(err);
                          })
                        }}>Delete</button></td>
                    </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
