import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Header } from "@components/layout/header";
import { RefineContext } from "./_refine_context";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Suspense>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <RefineContext>
              <Header />
              {children}
            </RefineContext>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}