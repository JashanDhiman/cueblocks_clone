import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Contact from "./components/Contact";
import Career from "./components/Career";

function App() {
  //const data = {
  //  props: {
  //    errors: {},
  //    auth: {
  //      user: null,
  //      favorites: 0,
  //    },
  //    flash: {
  //      message: null,
  //    },
  //    prevUrl:
  //      "https://js3.joinswitch.com/collections?avail=&brand=&category=&occasion=43&page=1&search=&shop=18&sort=recommended",
  //    canLogin: false,
  //    canRegister: false,
  //    response: {
  //      filters: "[]",
  //      products: "{current_page: 1, data: Array(66), first_page_url: …}",
  //    },
  //    designerData: null,
  //    occasionsList: [
  //      {
  //        footer_description: "",
  //        header_description: "",
  //        occasion_meta_description: "",
  //        updated_at: "2019-11-26 12:26:17",
  //        occasion_slug: "everyday",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 0,
  //        product_occasion_order: 1,
  //        product_occasion_id: 38,
  //        product_occasion_name: "Everyday",
  //        is_checked: false,
  //      },
  //      '{footer_description: ".", header_description: "", i…}',
  //      '{footer_description: "", header_description: "", is…}',
  //      '{footer_description: "", header_description: "", is…}',
  //      '{footer_description: "", header_description: "", is…}',
  //    ],
  //    shopList: [
  //      {
  //        updated_at: "2022-02-28 07:36:34",
  //        footer_description: "",
  //        header_description: "",
  //        shop_meta_description: "",
  //        shop_slug: "pop-of-color",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 0,
  //        product_shop_order: 0,
  //        product_shop_id: 18,
  //        product_shop_name: " Pop of Color",
  //        is_checked: true,
  //      },
  //      {
  //        updated_at: "2019-04-22 23:08:04",
  //        footer_description: "",
  //        header_description: "",
  //        shop_meta_description: "",
  //        shop_slug: "fashion",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 4,
  //        product_shop_order: 1,
  //        product_shop_id: 14,
  //        product_shop_name: "Fashion",
  //        is_checked: false,
  //      },
  //      {
  //        updated_at: "2019-04-22 23:09:27",
  //        footer_description: "",
  //        header_description: "",
  //        shop_meta_description: "",
  //        shop_slug: "fine",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 1,
  //        product_shop_order: 1,
  //        product_shop_id: 10,
  //        product_shop_name: "Fine",
  //        is_checked: false,
  //      },
  //      {
  //        updated_at: "2019-04-22 23:09:14",
  //        footer_description: "",
  //        header_description: "",
  //        shop_meta_description: "",
  //        shop_slug: "statement",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 4,
  //        product_shop_order: 1,
  //        product_shop_id: 12,
  //        product_shop_name: "Statement",
  //        is_checked: false,
  //      },
  //      {
  //        updated_at: "2019-04-22 23:09:46",
  //        footer_description: "",
  //        header_description: "",
  //        shop_meta_description: "",
  //        shop_slug: "vintage",
  //        show_on_collections_page: 1,
  //        sort_order_on_collections_page: 0,
  //        sort_order_on_header_dropdown: 2,
  //        product_shop_order: 1,
  //        product_shop_id: 13,
  //        product_shop_name: "Vintage",
  //        is_checked: false,
  //      },
  //    ],
  //    imageUrl: "https://joinswitch-products.s3-us-west-2.amazonaws.com/",
  //  },
  //  children: ["<f />", "<div />"],
  //};
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Career />} />

        {/*<Route path="/" element={<Career props={data} />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
        {/*<Route path="/career" element={<Career />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
