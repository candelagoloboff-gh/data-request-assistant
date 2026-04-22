/** Converts PaginationParams into a flat object suitable for URL search params. */
export const formatSearchParams = (values) => {
    if (!values)
        return {};
    const { search, pagination, order, orderBy, ...rest } = values;
    const searchParams = {
        ...rest,
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        order,
        orderBy,
    };
    if (!search)
        return searchParams;
    return { ...searchParams, search };
};
