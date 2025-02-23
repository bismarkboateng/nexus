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


export const validatePassword = (password: string): { valid: boolean; message?: string } => {
  if (password.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters long." };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: "Password must contain at least one uppercase letter." };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, message: "Password must contain at least one lowercase letter." };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, message: "Password must contain at least one number." };
  }

  if (!/[!@#$%^&*()_+[\]{};:'",.<>?/\\|`~-]/.test(password)) {
    return { valid: false, message: "Password must contain at least one special character." };
  }

  return { valid: true };
};