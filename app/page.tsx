"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import Examples from "@/components/Examples";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Description />
      <Examples />
      <ContactSection />
      <Footer />
    </main>
  );
}

