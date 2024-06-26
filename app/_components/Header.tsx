"use client";

import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 shadow-md">
        <Image
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-[150px] md:w-[200px]"
        />
        <ul className="hidden md:flex gap-14 text-lg font-bold">
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Product
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contact us
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            About us
          </li>
        </ul>
        <div className="flex gap-5">
          <LoginLink>
            <Button variant="ghost" className=" font-bold">
              Log in
            </Button>
          </LoginLink>
          <RegisterLink>
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
