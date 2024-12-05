"use client";
import React, { useState, ReactNode } from "react";

export default function DefaultLayout(
  {
  children,
  }: 
  {
    children: React.ReactNode;
  }
) 

{
  return (
    <>
    {/* <!-- ===== Page Wrapper Start ===== --> */}
    <section className="overflow-hidden px-4 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        {children}
      </div>
    </section>
    </>
  );
}
