import ajaxClass from "../../tools/httpClass";
export const userList = async () => {
  try {
    let { result } = await ajaxClass({
      url: "/api/users/list",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
