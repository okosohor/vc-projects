export default interface Pagination {
  currentPage: number;
  nextPageExists: boolean;
  previousPageExists: boolean;
  total: number
  totalPages: number;
}
