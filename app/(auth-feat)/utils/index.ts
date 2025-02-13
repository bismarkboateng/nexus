import { toast } from "sonner";

export const validateFields = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  if (!name || !email || !password) {
    toast.error("Please fill in all fields.");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long.");
    return false;
  }

  return true;
};
