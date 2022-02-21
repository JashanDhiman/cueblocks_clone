import React from "react";
import ClientsWords from "./ClientsWords";
import Footer from "./Footer";
import Form from "./Form";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";

const Career = () => {
  const fieldsToShow = [
    {
      field: [
        {
          tag: "input",
          title: "name",
          name: "name",
          placeholder: "Enter your name",
          mendetory: true,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "email",
          name: "email",
          placeholder: "Enter your email",
          mendetory: true,
          type: "email",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "phone",
          name: "mobilephone",
          placeholder: "Enter your phone",
          mendetory: true,
          type: "number",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "job",
          name: "jobtitle",
          placeholder: "Enter job title",
          mendetory: true,
          type: "text",
        },
      ],
    },
    {
      field: [
        {
          tag: "input",
          title: "file",
          name: "attachment",
          placeholder: "provide file",
          mendetory: true,
          type: "file",
        },
      ],
    },
  ];
  const initialValues = {
    email: "jashan@cueblocks.com",
    name: "Jashan Dhiman",
    jobtitle: "Testing - Api Creation",
    mobilephone: "9872076386",
    attachment: "",
  };
  //const occasionsList = [props.props.occasionsList[0]];
  //const shopList = props.props.shopList;

  //shopList.map((obj) => {
  //  obj["product_name"] = obj["product_shop_name"];
  //  obj["meta_description"] = obj["shop_meta_description"];
  //  obj["product_slug"] = obj["shop_slug"];
  //  obj["product_order"] = obj["product_shop_order"];
  //  obj["product_id"] = obj["product_shop_id"];
  //});
  //occasionsList.map((obj) => {
  //  obj["product_name"] = obj["product_occasion_name"];
  //  obj["meta_description"] = obj["occasion_meta_description"];
  //  obj["product_slug"] = obj["occasion_slug"];
  //  obj["product_order"] = obj["product_occasion_order"];
  //  obj["product_id"] = obj["product_occasion_id"];
  //});
  //console.log(occasionsList);
  //const merge = [...shopList, ...occasionsList];
  //merge.sort((a, b) => {
  //  let fa = a.product_name.toLowerCase(),
  //    fb = b.product_name.toLowerCase();
  //  if (fa < fb) {
  //    return -1;
  //  }
  //  if (fa > fb) {
  //    return 1;
  //  }
  //  return 0;
  //});

  return (
    <>
      {/*<div>Collections</div>
      <div className="filter_div-value">
        {merge.map((data, index) => {
          return (
            <div className="filter_div-select mt-20px" key={index}>
              <div className="check_div flex justify-start items-center relative">
                <input
                  type="checkbox"
                  id={data.product_id}
                  name=""
                  value="yes"
                  checked={data.is_checked}
                  className="opacity-0 absolute"
                />
                <label
                  htmlFor={data.product_id}
                  //onClick={() => handleShopListClick(data, key)}
                  className="select-none font-sofia font-normal text-black-100 text-font14 pl-12px"
                >
                  <span className="checked_div">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.07715 5.00008L4.15407 8.077L10.9233 0.692383"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  {data.product_name.toLowerCase().charAt(0).toUpperCase() +
                    data.product_name.toLowerCase().slice(1)}
                </label>
              </div>
            </div>
          );
        })}
      </div>*/}

      <Navbar />
      <div className="main-content">
        <LandingPage />
        <Form props={[fieldsToShow, initialValues, "_carrer"]} />
        <ClientsWords />
      </div>
      <Footer />
    </>
  );
};

export default Career;
