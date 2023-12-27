import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Box } from "lucide-react";
import { Button } from "./button";

const Product = () => {
  return (
    <div className="mx-16" id="product">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Our Products
      </h1>
      <div className="mt-5 flex flex-col sm:flex-row gap-6">
        <Card>
          <CardHeader>
            <Box size={64} className="mb-2" color="#3662E3" />
            <CardTitle>TMP (Tutor MarketPlace)</CardTitle>
            <CardDescription>
              A platform for connecting with certified tutors effortlessly. Our
              user-friendly interface and free matching service make finding the
              right tutor a breeze.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Details</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Box size={64} className="mb-2" color="#3662E3" />
            <CardTitle>TMP (Tutor MarketPlace)</CardTitle>
            <CardDescription>
              A platform for connecting with certified tutors effortlessly. Our
              user-friendly interface and free matching service make finding the
              right tutor a breeze.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Details</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Product;
