import SectionCards from "../../components/SectionCards/SectionCards.tsx";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient.ts";
import { Database } from "../../../database.types.ts";

const Brands = () => {
  const [brands, setBrands] = useState<
    Database["public"]["Tables"]["brands"]["Row"][] | null
  >(null);

  useEffect(() => {
    const getBrands = async () => {
      const { data } = await supabase.from("brands").select();
      setBrands(data);
    };

    getBrands();
  }, []);

  return (
    <>
      {brands && (
        <SectionCards
          setCards={brands.map(({ name, logo, id }) => {
            return { image: logo, name, id };
          })}
        />
      )}
    </>
  );
};

export default Brands;
