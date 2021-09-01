import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="title-not-found">Ooopps......</h1>
      <p className="title-not-found">halaman yang anda cari tidak ditemukan</p>
    </div>
  );
}
