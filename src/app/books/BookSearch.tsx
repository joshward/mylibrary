"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import SearchInput from "@/components/SearchInput";

interface BookSearchProps {
  initialSearchTerm?: string;
}

export default function BookSearch({
  initialSearchTerm = "",
}: BookSearchProps) {
  const pathname = usePathname();
  const [search, setSearch] = useState(initialSearchTerm);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(`${pathname}?search=${encodeURIComponent(search)}`);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [search, router, pathname]);

  return <SearchInput value={search} onSearch={setSearch} />;
}
