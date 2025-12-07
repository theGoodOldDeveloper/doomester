"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Examples from "@/components/Examples";
import Testimonial from "@/components/Testimonial";
import Description2 from "@/components/Description2";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Description />
      <Examples />
      <Testimonial />
      <Description2 />
      <ContactSection />
      <Footer />
    </main>
  );
}

