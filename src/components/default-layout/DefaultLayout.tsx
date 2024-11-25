import React, { ReactElement } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const DefaultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
