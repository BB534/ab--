const ajaxClaas = ({ url, type = "GET", data = {} }) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type,
      url,
      data,
      dataType: "json",
      headers: {
        "X-Access-Token": localStorage.getItem("lgw-token") || "",
        "X-Access-User": localStorage.getItem("lgw-user") || "",
      },
      success: function (result, textStatus, jqXHR) {
        resolve({
          result,
          textStatus,
          jqXHR,
        });
      },
      error: function (err) {
        reject(err);
      },
    });
  });
};

export default ajaxClaas;
