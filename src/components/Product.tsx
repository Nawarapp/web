import React, { useMemo } from "react";

import config from "../config/index.json";
import Divider from "./Divider";

const Product = ({ template }: { template: "product" | "howWorks" }) => {
  const { product, howWorks } = config;

  const data = useMemo(
    () => (template === "product" ? product : howWorks),
    [howWorks, product, template]
  );

  const items = useMemo(
    () => (template === "product" ? product.items : howWorks.items),
    [howWorks.items, product.items, template]
  );

  return (
    <section className={`bg-background py-8`} id={template}>
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {data.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        {items.map((item, index) => (
          <div
            className={
              index % 2
                ? "flex flex-wrap"
                : "flex flex-wrap flex-col-reverse sm:flex-row"
            }
            key={item.title}
          >
            {index % 2 ? (
              <>
                <div className={"w-5/6 sm:w-1/2 p-6 mt-20"}>
                  <h3
                    className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                  >
                    {item?.title}
                  </h3>
                  <p className={`text-gray-600`}>{item?.description}</p>
                </div>
                <div className={`w-full sm:w-1/2 p-6`}>
                  <img className="h-6/6" src={item?.img} alt={item?.title} />
                </div>
              </>
            ) : (
              <>
                <div className={`w-full sm:w-1/2 p-6`}>
                  <img className="h-6/6" src={item?.img} alt={item?.title} />
                </div>
                <div className={"w-5/6 sm:w-1/2 p-6 mt-20"}>
                  <h3
                    className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                  >
                    {item?.title}
                  </h3>
                  <p className={`text-gray-600`}>{item?.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;

// const Product = ({ template }: { template: 'product' | 'howWorks' }) => {
//   const { product, howWorks } = config;
//   const [productFirst, productSecond] = product.items;
//   const [howWorkFirst, howWorkSecond] = howWorks.items;

//   const data = useMemo(
//     () => (template === 'product' ? product : howWorks),
//     [howWorks, product, template]
//   );

//   const firstItem = useMemo(
//     () => (template === 'product' ? productFirst : howWorkFirst),
//     [howWorkFirst, productFirst, template]
//   );
//   const secondItem = useMemo(
//     () => (template === 'product' ? productSecond : howWorkSecond),
//     [howWorkSecond, productSecond, template]
//   );

//   return (
//     <section className={`bg-background py-8`} id="product">
//       <div className={`container max-w-5xl mx-auto m-8`}>
//         <h1
//           className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
//         >
//           {data.title.split(' ').map((word, index) => (
//             <span
//               key={index}
//               className={index % 2 ? 'text-primary' : 'text-border'}
//             >
//               {word}{' '}
//             </span>
//           ))}
//         </h1>
//         <Divider />

//         <div className={`flex flex-wrap`}>
//           <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
//             <h3
//               className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
//             >
//               {firstItem?.title}
//             </h3>
//             <p className={`text-gray-600`}>{firstItem?.description}</p>
//           </div>
//           <div className={`w-full sm:w-1/2 p-6`}>
//             <img
//               className="h-6/6"
//               src={firstItem?.img}
//               alt={firstItem?.title}
//             />
//           </div>
//         </div>

//         <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
//           <div className={`w-full sm:w-1/2 p-6`}>
//             <img
//               className="h-6/6"
//               src={secondItem?.img}
//               alt={secondItem?.title}
//             />
//           </div>
//           <div className={`w-full sm:w-1/2 p-6 mt-20`}>
//             <div className={`align-middle`}>
//               <h3
//                 className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
//               >
//                 {secondItem?.title}
//               </h3>
//               <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;
