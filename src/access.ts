/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
import {login} from "@/services/ant-design-pro/api";

export default function access(initialState: InitalState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin',
  };
}
