export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold">All Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {/* {filtered.length} products */}
          </p>
        </div>
        {/* <Button
          variant="outline"
          size="sm"
          className="gap-2 md:hidden"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </Button> */}
      </div>

      <div className="mt-6 flex gap-8">
        {/* Filters sidebar */}
        <aside
          // className={`${filtersOpen ? "block" : "hidden"} w-full shrink-0 md:block md:w-56`}
        >
          <div className="space-y-6 rounded-lg border bg-card p-4">
            <div>
              {/* <Input
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-sm"
              /> */}
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Origin
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {/* {["imported", "local"].map((o) => (
                  <Badge
                    key={o}
                    variant={selectedOrigin === o ? "default" : "outline"}
                    className="cursor-pointer capitalize"
                    onClick={() =>
                      setSelectedOrigin(selectedOrigin === o ? null : o)
                    }
                  >
                    {o === "imported" ? "Thailand 🇹🇭" : "Local 🇪🇹"}
                  </Badge>
                ))} */}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Brand
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {/* {brands.map((b) => (
                  <Badge
                    key={b}
                    variant={selectedBrands.includes(b) ? "default" : "outline"}
                    className="cursor-pointer text-[11px]"
                    onClick={() => toggleBrand(b)}
                  >
                    {b}
                  </Badge>
                ))} */}
              </div>
            </div>
            {/* {hasFilters && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full gap-1 text-xs"
                onClick={clearFilters}
              >
                <X className="h-3 w-3" /> Clear Filters
              </Button>
            )} */}
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {/* {filtered.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              No products match your filters.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginated.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination className="mt-10">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(currentPage - 1);
                        }}
                        className={
                          currentPage === 1
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                    {pageNumbers.map((p, i) =>
                      p === "ellipsis" ? (
                        <PaginationItem key={`e-${i}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      ) : (
                        <PaginationItem key={p}>
                          <PaginationLink
                            href="#"
                            isActive={p === currentPage}
                            onClick={(e) => {
                              e.preventDefault();
                              goTo(p);
                            }}
                          >
                            {p}
                          </PaginationLink>
                        </PaginationItem>
                      ),
                    )}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          goTo(currentPage + 1);
                        }}
                        className={
                          currentPage === totalPages
                            ? "pointer-events-none opacity-50"
                            : ""
                        }
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}
