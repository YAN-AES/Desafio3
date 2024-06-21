import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddInfoSofa from "@/assets/addinfosofa.png";
import { Button } from "@/components/ui/button";
import FacebookIcon from "@/assets/facebookicon.png";
import LinkedinIcon from "@/assets/linkedinicon.png";
import TwitterIcon from "@/assets/twittericon.png";
import { Counter } from "@/components/Counter";
import { ProductHeader } from "@/components/ProductHeader";
import { Size } from "./size-toggle";
import { Color } from "./color-toggle";
import Img from "@/assets/Group 102.svg"
import { ServicesBanner } from "@/components/ServicesBanner";

export function ProductPage() {
  return (
    <main>
      <ProductHeader></ProductHeader>
      <section className="font-poppins">
        <div className="flex flex-row items-center justify-center gap-20 w-full">
          <div className="w-full flex items-center justify-center">
            <img src={Img} alt="" />
          </div>
          <div className="flex flex-col items-start gap-5 py-8 px-6">
            <span className="text-5xl">Asgaard sofa</span>
            <span className="font-medium text-gray3 text-2xl">
              Rs. 250.000,00
            </span>
            <div className="flex flex-row gap-5 items-center justify-center text-gray3">
              <div className="h-7 w-[1px] bg-gray3"></div>
              <span className="text-xs">X Customer Review</span>
            </div>
            <span className="text-wrap text-xs">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </span>
            <div className="flex flex-col items-start justify-center gap-4">
              <span className="font-normal text-sm text-gray3">Size</span>
              <Size />
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <span className="font-normal text-sm text-gray3">Color</span>
              <Color />
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <Counter></Counter>
              <Button variant="productpage" size="productpage">
                Add To Cart
              </Button>
            </div>
            <div className="h-[1px] w-full bg-gray3"></div>
            <div className="flex flex-row gap-5 text-gray3">
              <div className="flex flex-col gap-2">
                <span>SKU</span>
                <span>Category</span>
                <span>Tags</span>
                <span>Share</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>: Test</span>
                <span>: Test</span>
                <span>: Test</span>
                <div className="flex flex-row items-center justify-center h-5">
                  <span>: </span>
                  <Button variant="transparent" size="icon">
                    <img src={FacebookIcon} />
                  </Button>
                  <Button variant="transparent" size="icon">
                    <img src={LinkedinIcon} />
                  </Button>
                  <Button variant="transparent" size="icon">
                    <img src={TwitterIcon} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center py-8 border-y-[1px] border-t-gray3">
        <Tabs
          defaultValue="account"
          className="w-full flex flex-col items-center justify-center"
        >
          <TabsList className="bg-transparent gap-14">
            <TabsTrigger
              className="text-2xl bg-transparent shadow-none rounded-none"
              value="description"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              className="text-2xl bg-transparent shadow-none rounded-none"
              value="add-info"
            >
              Additional Information
            </TabsTrigger>
            <TabsTrigger
              className="text-2xl bg-transparent shadow-none rounded-none"
              value="reviews"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="flex w-full">
            <div className="flex flex-col items-center w-full font-poppins font-normal text-gray3 py-8">
              <div className="px-52 w-full flex flex-col">
                <span>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </span>
              </div>
              <div className="flex w-full flex-row items-center justify-center gap-7 pt-8">
                <img src={AddInfoSofa} />
                <img src={AddInfoSofa} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="add-info"></TabsContent>
          <TabsContent value="reviews"></TabsContent>
        </Tabs>
      </section>
      <section className="flex w-full">
        <ServicesBanner />
      </section>
    </main>
  );
}
