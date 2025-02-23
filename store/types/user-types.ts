export type UserInfo = {
  id: number;
  email: string;
  name: string;
  user_role: "ADMIN" | "SALES_AGENT";
  user_id: string;
};


export type UserSliceType = {
    user: null | UserInfo,
    setUser: (user: UserInfo) => void;
    clearUser: () => void;
}