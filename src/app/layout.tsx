/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "젠디 - AI 사주 타로 운세 상담 서비스",
  description:
    "하루 5,000명이 선택한 명리학 기반 AI 사주&타로, 젠디(ZENDi) - 고민이 많은 사람들을 위한 연애, 재회, 궁합부터 신년운세, 재물운까지!. AI 호키동자와 포키가 당신의 운명의 지도를 심층 분석해 드립니다. 중요한 결정을 앞두고 있다면, 지금 바로 젠디에서 명쾌한 해답을 찾아보세요 !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="stylesheet" href="/68d7b4f6bae4edc4.css" />
        <link rel="stylesheet" href="/bc8831281eb208c3.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
