import { useState } from "react";
import {
  ApiResponse,
  loginResponse,
  loginUserTypes,
  registerUserTypes,
  UserResponse,
} from "../types/types";
import { BASE_URL } from "./apiTransformService";
import { useAuthStore } from "@src/api/store/auth";
import { ModalMessageProvider } from "@src/helper/ui-utils";

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { setIsAuthenticated } = useAuthStore();

  const register = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
  }: registerUserTypes): Promise<ApiResponse<UserResponse>> => {
    setLoading(true);
    setIsSuccess(false);
    const formBody = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };
    try {
      const response = await fetch(`${BASE_URL}/api/User/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formBody),
      });

      const data: ApiResponse<UserResponse> = await response.json();
      if (data && data?.success) {
        setIsSuccess(true);
        setIsAuthenticated(true);
        ModalMessageProvider.showModalMsg({
          title: "Success",
          description: String(data?.message),
          msgType: "SUCCESS",
        });
        return {
          success: data?.success,
          message: data?.message,
          data: data?.data,
        };
      }
      ModalMessageProvider.showModalMsg({
        title: "Error",
        description: String(data?.message),
        msgType: "ERROR",
      });
      return {
        success: data?.success,
        message: data?.message,
        data: data?.data,
      };
    } catch (err: any) {
      setError(err || "Something went wrong");
      setIsSuccess(false);
      return {
        success: false,
        message: err || "Something went wrong",
        data: null,
      };
    } finally {
      setLoading(false);
    }
  };

  const login = async ({
    email,
    password,
  }: loginUserTypes): Promise<ApiResponse<loginResponse>> => {
    setLoading(true);
    setIsSuccess(false);
    try {
      const response = await fetch(`${BASE_URL}/api/User/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data: ApiResponse<loginResponse> = await response.json();
      if (data && data?.success) {
        setIsSuccess(true);
        setIsAuthenticated(true);
        ModalMessageProvider.showModalMsg({
          title: "Success",
          description: String(data?.message),
          msgType: "SUCCESS",
        });
        return {
          success: data?.success,
          message: data?.message,
          data: data?.data,
        };
      }
      ModalMessageProvider.showModalMsg({
        title: "Error",
        description: String(data?.message),
        msgType: "ERROR",
      });
      return {
        success: data?.success,
        message: data?.message,
        data: data?.data,
      };
    } catch (err: any) {
      setError(err?.toString() || "Something went wrong");
      setIsSuccess(false);
      return {
        success: false,
        message: err?.toString() || "Something went wrong",
        data: null,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    register,
    login,
    isSuccess,
  };
};
