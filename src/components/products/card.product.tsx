import { cn } from "@/src/lib/utils";
import { Badge } from "@/src/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/ui/card";

interface Product {
  caption: string;
  title: string;
  description: string;
  tools: string[];
}

const CardProduct = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <Card className={cn("flex flex-col gap-4", className)}>
      <CardHeader className="text-primary">
        {product.caption}
      </CardHeader>
      <CardContent>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-2">
          {product.tools.map((tool, index) => (
            <Badge key={index}>{tool}</Badge>
          ))}
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
