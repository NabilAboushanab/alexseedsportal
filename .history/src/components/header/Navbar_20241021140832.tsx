"use client";
import React from "react";
import Link from "next/link";

const SectionList = () => {
  return (
    <div className="space-y-6 p-6">
      <Section title="Client Data Claims Balance">
        <Link href="/filled-oil/claims">View Claims Balance</Link>
      </Section>
      <Section title="Collections from Clients">
        <Link href="/filled-oil/collections">View Collections</Link>
      </Section>
      <Section title="Settlements Account">
        <Link href="/filled-oil/settlements">View Settlements</Link>
      </Section>
      <Section title="Sales Management">
        <Link href="/filled-oil/sales">View Sales Management</Link>
      </Section>
      <Section title="Client Deposits Registration">
        <Link href="/filled-oil/deposits">View Deposits</Link>
      </Section>
      <Section title="Claims Statement">
        <Link href="/filled-oil/claims-statement">View Claims Statement</Link>
      </Section>
      <Section title="Daily Customer Quota">
        <Link href="/filled-oil/daily-quota">View Daily Quota</Link>
      </Section>
      <Section title="Preliminary Pricing">
        <Link href="/filled-oil/pricing">View Pricing</Link>
      </Section>
      <Section title="Movement">
        <Link href="/filled-oil/movement">View Movement</Link>
      </Section>
      <Section title="Contracts Management">
        <Link href="/filled-oil/contracts">View Contracts</Link>
      </Section>
      <Section title="Contracts Pricing">
        <Link href="/filled-oil/contracts-pricing">View Contract Pricing</Link>
      </Section>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border p-4 rounded-md bg-gray-100">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div>{children}</div>
  </div>
);

export default SectionList;
