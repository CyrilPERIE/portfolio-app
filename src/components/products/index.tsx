import { SectionTitle } from "@/src/components/_common/section_title";
import { cn } from "@/src/lib/utils";
import CardProduct from "@/src/components/products/card.product";
import { text } from "@/src/lib/text";

const Products = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <SectionTitle title="01." subtitle="ce que je fais" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {text.products.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
