import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddInfoSofa from "@/assets/addinfosofa.png";

export function ProductPage() {
  return (
    <main>
      <section className="flex items-center justify-center">
        <Tabs defaultValue="account" className="w-full flex flex-col items-center justify-center">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="add-info">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
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
              <div className="flex w-full bg-emerald-500 flex-row items-center justify-center gap-7 pt-8">
                <img src={AddInfoSofa} />
                <img src={AddInfoSofa} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="add-info">Change your password here.</TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
