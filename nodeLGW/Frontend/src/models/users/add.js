import ajaxClaas from "../../tools/httpClass";

export const userAdd = async (data) => {
  try {
    let { result } = await ajaxClaas({
      url: "/api/users/userSave",
      type: "POST",
      data,
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
