interface ProductProps {
    product: {
      id: number;
      name: string;
      description?: string; // Make description optional
      price: number;
      inStock: boolean;
      image: string;
    };
  }