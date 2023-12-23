"use client";

import { registerSchema } from "@/schemas/auth";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useFormik } from "formik";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { TypeOf } from "zod";
import InputBox from "../InputBox";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/navigation";
import { revalidate } from "../revalidate";

type registerSchemaType = TypeOf<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();

  const formik = useFormik<registerSchemaType>({
    initialValues: {
      name: "",
      personalEmail: "",
      kiitEmail: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: toFormikValidationSchema(registerSchema),
    onSubmit: async (values) => {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          await signIn("credentials", {
            redirect: false,
            email: values.kiitEmail,
            password: values.password,
          });
          toast.success("Logged In Successfully");
          revalidate()
          router.push("/q");
        }
      } catch (err) {
        toast.error("Unknown error Occurred");
      }
    },
  });

  return (
    <Card isBlurred className="m-4 mb-20 mt-24 px-4" shadow="lg">
      <CardBody>
        <h1 className="p-4 text-center text-2xl font-bold">Register</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            <InputBox
              id="name"
              type="text"
              label="Name"
              placeholder="Enter your Name"
              error={formik.touched.name && formik.errors.name}
              icon={<AiOutlineUser size={21} className="text-gray-300" />}
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <InputBox
              id="personalEmail"
              type="email"
              label="Personal Email"
              placeholder="Enter your Personal Email"
              error={
                formik.touched.personalEmail && formik.errors.personalEmail
              }
              icon={<HiOutlineMail size={21} className="text-gray-300" />}
              value={formik.values.personalEmail}
              onChange={formik.handleChange}
            />
            <InputBox
              id="kiitEmail"
              type="email"
              label="KIIT Email"
              placeholder="Enter your KIIT Email"
              error={formik.touched.kiitEmail && formik.errors.kiitEmail}
              icon={<HiOutlineMail size={21} className="text-gray-300" />}
              value={formik.values.kiitEmail}
              onChange={formik.handleChange}
            />
            <InputBox
              id="phoneNumber"
              type="text"
              label="Phone Number"
              placeholder="Enter your Phone Number"
              error={formik.touched.phoneNumber && formik.errors.phoneNumber}
              icon={<BsTelephone size={21} className="text-gray-300" />}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
            <InputBox
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your Password"
              error={formik.touched.password && formik.errors.password}
              icon={<MdPassword size={21} className="text-gray-300" />}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <InputBox
              id="confirmPassword"
              type="password"
              label="confirmPassword"
              placeholder="Enter your Password"
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              icon={<MdPassword size={21} className="text-gray-300" />}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
          </div>
          <Button
            color="primary"
            variant="shadow"
            className="mb-4 mt-8 w-full"
            size="lg"
            type="submit"
            isLoading={formik.isSubmitting}
          >
            Register
          </Button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
