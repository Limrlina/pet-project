import SectionCards from "../SectionCards/SectionCards.tsx";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient.ts";
import { Database } from "../../../database.types.ts";

const Sections = () => {
  const [sections, setSections] = useState<
    Database["public"]["Tables"]["catalog_sections"]["Row"][] | null
  >(null);

  useEffect(() => {
    const getSections = async () => {
      const { data } = await supabase.from("catalog_sections").select();
      setSections(data);
    };

    getSections();
  }, []);

  return (
    <>
      {sections && (
        <SectionCards
          setCards={sections.map(({ name, image, id }) => {
            return { name, image, id };
          })}
        />
      )}
    </>
  );
};
export default Sections;
