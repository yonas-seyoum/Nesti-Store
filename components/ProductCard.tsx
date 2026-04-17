import { Badge } from "@/components/ui/badge";

import { Eye } from "lucide-react";
import useCurrency from "@/app/hooks/useCurrency";
import Link from "next/link";
import { Product } from "@/app/products/page";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { formatPrice } = useCurrency();

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute left-2 top-2">
          {product.origin === "imported" ? (
            <Badge className="bg-thai text-thai-foreground text-[10px] border-0">
              Imported from Thailand 🇹🇭
            </Badge>
          ) : (
            <Badge className="bg-ethiopian text-ethiopian-foreground text-[10px]  border-0">
              Local 🇪🇹
            </Badge>
          )}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/60">
            <span className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground">
              Out of Stock
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 opacity-0 transition-all group-hover:bg-foreground/10 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-full bg-background/90 px-4 py-2 text-xs font-medium shadow-sm">
            <Eye className="h-3.5 w-3.5" /> Quick View
          </span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {product.brand}
        </p>
        <h3 className="mt-0.5 text-sm font-semibold leading-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-bold text-primary">
          {formatPrice(product.priceBaht, product.priceBirr)}
        </p>
      </div>
    </Link>
  );
}
