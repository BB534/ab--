import ajaxClaas from "../../tools/httpClass";

export const userRemove = async (id) => {
  try {
    let { result } = await ajaxClaas({
      url: "/api/users/remove",
      type: "delete",
      data: { id: id },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
