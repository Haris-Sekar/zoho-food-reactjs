//user authentication
function userAuth() {
  var data;
  $.ajax({
    method: "GET",
    url: "./UserValidation",
    async: false,
    error: (error) => {
      data = { msg: "error", data: error };
    },
    success: (res) => {
      data = res;
    },
  });
  return data;
}
