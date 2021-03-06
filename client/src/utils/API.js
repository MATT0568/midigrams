import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function (UserData) {
    return axios.post("/api/user", UserData);
  },
  login: function (UserData) {
    return axios.post("/api/login", UserData);
  },
  midi: function () {
    return axios.get("/api/midi");
  }
};
