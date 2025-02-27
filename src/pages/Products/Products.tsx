import { useEffect, useState } from "react";
import { ItemCardType } from "../../components/ItemCard/ItemCard.tsx";
import { supabase } from "../../supabaseClient.ts";
import ItemCards from "../../components/ItemCards/ItemCards.tsx";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Products.module.css";

const Products = ({ type }: { type: "brands" | "sections" }) => {
  const [products, setProducts] = useState<ItemCardType[] | []>([]);
  const [textContinue, setTextContinue] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(`/catalog/${type}`);
      return;
    }

    const numId = Number(id);

    const getProducts = async () => {
      if (type === "brands") {
        const [productsInfo, brandInfo] = await Promise.all([
          supabase
            .from("products")
            .select("id, name, price, quantity, image")
            .eq("brand_id", numId),
          supabase.from("brands").select("name").eq("id", numId),
        ]);

        if (!brandInfo.data) {
          console.log("Нет бренда");
          navigate(`/catalog/${type}`);
          return;
        }

        if (!productsInfo.data) {
          console.log("Нет товаров");
          return;
        }

        setTextContinue(`Товары бренда ${brandInfo.data[0].name}`);

        const result = productsInfo.data.map((currentProduct) => {
          return { ...currentProduct, brandName: brandInfo.data[0].name };
        });

        setProducts(result);

        return;
      }

      const [productIdsOfCatalogSection, catalogSectionInfo, brandsInfo] =
        await Promise.all([
          supabase
            .from("products_catalog_sections")
            .select("id_product")
            .eq("id_catalog_section", numId),
          supabase.from("catalog_sections").select("name").eq("id", numId),
          supabase.from("brands").select("id, name"),
        ]);

      if (!productIdsOfCatalogSection.data) {
        console.log("Нет товаров");
        return;
      }

      if (!catalogSectionInfo.data) {
        console.log("Нет раздела каталога");
        return;
      }

      if (!brandsInfo.data) {
        console.log("Нет бренда");
        return;
      }

      const requiredProductIds = productIdsOfCatalogSection.data
        .map((currentProductInfo) => `"${currentProductInfo.id_product}"`)
        .join(",");

      const { data: productsInfo } = await supabase
        .from("products")
        .select()
        .filter("id", "in", `(${requiredProductIds})`);

      if (!productsInfo) {
        console.log("Не нашлось товаров!");
        return;
      }

      const brandsMap = new Map();

      brandsInfo.data.forEach((currentBrand) => {
        brandsMap.set(currentBrand.id, currentBrand.name);
      });

      const result = productsInfo.map(
        ({ id, brand_id, name, quantity, price, image }) => {
          const brandName = brandsMap.get(brand_id);
          return { id, name, brandName, image, quantity, price };
        },
      );

      setTextContinue(`${catalogSectionInfo.data[0].name}`);
      setProducts(result);
    };

    getProducts();
  }, []);

  return (
    <>
      <div className={styles["info-container"]}>
        <p>{textContinue}</p>
      </div>
      <ItemCards setCards={products} />
    </>
  );
};

export default Products;
