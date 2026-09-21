"use client";
import styles from '../page.module.css';
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';

// Dynamic imports for client components
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

const VistasLeadForm = dynamic(
  () => import("../../components/ui/VistasLeadForm"),
  { ssr: false },
);

export default function TheVistas() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.match(/^[0-9\-\+\(\)\s]{7,}$/)) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, page: "The Vistas" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      if (typeof window !== "undefined" && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
        (window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: "The Vistas",
        });
      }
    } catch (err: unknown) {
      setError(
        "There was a problem submitting your request. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.page}
    >
      <Head>
        <title>
          The Vistas Summerlin | Homes, Community & Real Estate Guide
        </title>
        <meta
          name="description"
          content="Explore The Vistas in Summerlin: community amenities, homes for sale, neighborhood map, and expert real estate insights for buyers and sellers."
        />
        <meta
          property="og:title"
          content="The Vistas Summerlin | Homes, Community & Real Estate Guide"
        />
        <meta
          property="og:description"
          content="Explore The Vistas in Summerlin: community amenities, homes for sale, neighborhood map, and expert real estate insights for buyers and sellers."
        />
      </Head>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>The Vistas in Summerlin</h1>
          <p className={styles.subtitle}>
            A premier master-planned neighborhood in Summerlin West
          </p>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p>
            <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families
            discover luxury living at the gateway to Red Rock Canyon since 2015.
            As a longtime resident and doctorate-level educator, she brings
            analytical precision and deep local knowledge to every transaction.
            Specializing in{" "}
            <strong>
              The Ridges, Red Rock Country Club, The Vistas, and The Paseos
            </strong>
            , Dr. Duffy is your go-to resource for buying or selling in
            Summerlin West.
          </p>
          <p className={styles.calloutHighlight}>
            Ready to make your move in Summerlin West?
          </p>
          <p>
            <strong>
              Contact Dr. Jan Duffy today for your complimentary market
              consultation and discover your dream home or get top dollar for
              your property.
            </strong>
          </p>
          <p>
            <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsightsClient />
        </section>
        <section className={styles.sectionCard}>
          <h2>About The Vistas</h2>
          <Image
            src="/images/communities/the-vistas.png"
            alt="The Vistas Park in Summerlin"
            width={800}
            height={300}
            className={styles.featureImage}
          />
          <ul className={styles.featureList}>
            <li>Beautiful parks and walking trails</li>
            <li>Top-rated public and private schools</li>
            <li>Modern homes with mountain views</li>
            <li>Minutes from Downtown Summerlin</li>
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2>Homes for Sale in The Vistas</h2>
          <div className={styles.propertyGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.propertyCard}>
                <Image
                  src={`/images/communities/the-vistas.png`}
                  alt={`Home for sale in The Vistas Summerlin ${i}`}
                  width={400}
                  height={220}
                  className={styles.propertyImage}
                />
                <div className={styles.propertyInfo}>
                  <h3 className={styles.propertyTitle}>Vistas Home #{i}</h3>
                  <p className={styles.propertyDetails}>
                    4 bed &bull; 3 bath &bull; $900,000+
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin Expert</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a Private Tour</Link>
            </li>
          </ul>
        </section>
        <section id="lead-capture" className={styles.leadCapture}>
          <h2>Request Your Free Community Guide</h2>
          <VistasLeadForm />
        </section>
      </main>
    </div>
  );
}
