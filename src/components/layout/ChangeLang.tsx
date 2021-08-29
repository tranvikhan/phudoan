import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ChangeLang() {
  const router = useRouter();
  return (
    <div className="flex items-center z-50">
      <LangButton router={router} lang="en" text="en" />
      <div className="border-l-2 border-gray-400 h-6 mx-2" />
      <LangButton router={router} lang="vi" text="vn" />
    </div>
  );
}
const LangButton = ({ router, lang, text }: any) => (
  <Link href={router.asPath} locale={lang}>
    <span
      className={`p-3 text-base font-semibold rounded-lg cursor-pointer w-11 uppercase transition duration-500 ease-in-out hover:text-header ${
        router.locale === lang ? "text-header" : "text-gray-400"
      }`}
    >
      {text}
    </span>
  </Link>
);
