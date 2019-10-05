export const login = user => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
}

export const signup = user => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
}

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
}

//reducers to write:

//root
//entities, session, //errors
  //users                //session_errors


  //entities are domain objects (e.g. users) - they are represented by models