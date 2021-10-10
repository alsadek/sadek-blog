import React from "react";
import { renderHTML } from "@agility/nextjs";

const TestimonialsListing = ({ module, customData }) => {
  // get module fields
  const { fields } = module;
  // console.log(fields);
  // console.log(customData.testimonials);
  return (
    <div className="relative px-8">
      <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
          <h2 className="text-x1"> {fields.title} </h2>
          {/* {fields.testimonial.map((item) => (
              <div>
                <h3>
                    {item.fields.name}
                </h3>
                <div
                    className="prose max-w-full mx-auto"
                    dangerouslySetInnerHTML={renderHTML(item.fields.quote)}
                />
              </div>
          ))} */}
        


        
      </div>
    </div>
  );
};


TestimonialsListing.getCustomInitialProps = async ({
  agility,
  item,
  channelName,
  languageCode,
}) => {
  // set up api
  const api = agility;

  try {
  
    // get posts...
    let testimonials = await api.getContentList({
      referenceName: item.fields.testimonials.referencename,
      languageCode
    });


    return {
      testimonials,
    };
  } catch (error) {
    if (console) console.error(error);
  }
};


export default TestimonialsListing;
