import { useState } from "react";

export function usePagination(residents) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const safeResidents = Array.isArray(residents) ? residents : [];

  const totalPages = Math.ceil(safeResidents.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageResidents = safeResidents.slice(start, end);

  return { page, pageResidents, totalPages, setPage };
}
