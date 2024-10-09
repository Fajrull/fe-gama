/* eslint-disable no-unused-vars */
import React from "react";
import Login from "../../services/Auth";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await Login(data);

      if (response.access && response.refresh) {
        const accessToken = response.access;
        const refreshToken = response.refresh;

        Cookies.set("access", accessToken);
        Cookies.set("refresh", refreshToken);

        Swal.fire({
          title: "Login Successful",
          text: response.message || "You have successfully logged in.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/dashboard");
        });
      } else {
        Swal.fire({
          title: "Login Failed",
          text:
            response.message ||
            "Invalid username or password. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Error",
        text:
          error.response?.data?.message ||
          "An error occurred while trying to login. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="font-bold text-center mb-5 text-3xl">Login</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-[350px] w-[500px] bg-[#f8f8f8] p-10 border border-[#a7a7a7] rounded-lg"
      >
        <label htmlFor="username" className="text-[#a7a7a7] font-bold my-3">
          Username
        </label>
        <input
          type="text"
          {...register("username", {
            required: "Username is required",
          })}
          className="border border-[#a7a7a7] rounded-md w-[400px] h-[30px] p-3"
        />

        <label htmlFor="password" className="text-[#a7a7a7] font-bold my-3">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          className="border border-[#a7a7a7] rounded-md w-[400px] h-[30px] p-3"
        />
        <button
          type="submit"
          className="flex justify-center items-center mt-8 bg-[#4678f3] text-white rounded-full w-[300px] h-[30px] self-center py-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
