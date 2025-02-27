import styles from "./SalesHomeContainer.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient.ts";

interface HomeBannerType {
  bannerId: number;
  saleId: number;
  nameSale: string;
  defaultImageSale: string;
  squareImageSale: string;
}

const SalesHomeContainer = () => {
  const [banners, setBanners] = useState<HomeBannerType[] | []>([]);

  useEffect(() => {
    const getBanners = async () => {
      const { data: bannersData } = await supabase
        .from("main_page_banners")
        .select();

      if (!bannersData) {
        return;
      }

      const requiredCollectionIds: string = bannersData
        .map((currentBanner) => `"${currentBanner.id_collection}"`)
        .join(",");

      const { data: collectionsData } = await supabase
        .from("collections")
        .select("id, name, banner_default, banner_mobile")
        .filter("id", "in", `(${requiredCollectionIds})`);

      if (!collectionsData) throw new Error("Collections not defined!");

      const mapCollection = new Map();

      collectionsData.forEach((currentCollection) => {
        mapCollection.set(currentCollection.id, currentCollection);
      });

      const result: HomeBannerType[] = bannersData.map((currentBanner) => {
        const { name, banner_default, banner_mobile } = mapCollection.get(
          currentBanner.id_collection,
        );

        return {
          bannerId: currentBanner.id,
          saleId: currentBanner.id_collection,
          nameSale: name,
          defaultImageSale: banner_default,
          squareImageSale: banner_mobile,
        };
      });

      setBanners(result);
    };

    getBanners();
  }, []);

  const bannersPlacement = [
    "main",
    "up-left",
    "down-left",
    "up-right",
    "down-right",
  ];

  return (
    <div className={styles["sales-container"]}>
      {banners.map((currentBanner, index) => {
        return (
          <div
            className={clsx(
              styles["sale-banner"],
              styles[bannersPlacement[index]],
            )}
            key={currentBanner.bannerId}
          >
            <img
              className={clsx(styles["sale-img"], styles["default"])}
              src={currentBanner.defaultImageSale}
              alt={currentBanner.nameSale}
            />
            <img
              className={clsx(styles["sale-img"], styles["square"])}
              src={currentBanner.squareImageSale}
              alt={currentBanner.nameSale}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SalesHomeContainer;
