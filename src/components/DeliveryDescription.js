import PropTypes from "prop-types";

const DeliveryDescription = ({ className = "" }) => {
  return (
    <div
      className={`w-[1324px] flex flex-row items-start justify-start py-0 px-2 box-border max-w-full text-left text-89xl text-darkorange font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[171px] max-w-full mq825:gap-[43px] mq450:gap-[21px] mq1425:flex-wrap mq1425:gap-[85px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[68.9px] min-w-[375px] max-w-full mq825:gap-[34px] mq825:min-w-full mq450:gap-[17px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33.9px] max-w-full mq825:gap-[17px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full">
              <div className="w-[533px] flex flex-row items-start justify-start gap-[3px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[181px]">
                  <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.04em] leading-[94.8%] font-bold font-inherit mq825:text-35xl mq825:leading-[61px] mq450:text-13xl mq450:leading-[41px]">
                    Moto
                  </h1>
                </div>
                <div className="flex flex-row items-start justify-start relative min-w-[251px] text-39xl text-darkslategray mq825:flex-1">
                  <h1 className="m-0 relative text-inherit leading-[94.8%] font-bold font-inherit z-[1] mq825:text-27xl mq825:leading-[44px] mq450:text-16xl mq450:leading-[33px]">
                    <p className="m-0">parcel</p>
                    <p className="m-0">delivery</p>
                  </h1>
                  <div className="h-[210.4px] w-[187.2px] absolute !m-[0] top-[-127px] right-[-122.2px]">
                    <img
                      className="absolute top-[62.9px] left-[73px] w-1 h-[8.5px]"
                      loading="lazy"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-contain z-[2]"
                      alt=""
                      src="/group-4@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border max-w-full text-3xl text-gray-100">
                <div className="flex-1 relative leading-[138.8%] inline-block max-w-full mq450:text-lg mq450:leading-[24px]">
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium
                </div>
              </div>
            </div>
            <div className="w-[514px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[35px] max-w-full mq825:flex-wrap mq825:gap-[17px]">
                <button className="cursor-pointer [border:none] pt-[25px] px-10 pb-[26px] bg-darkslategray shadow-[0px_20px_32px_-8px_rgba(0,_0,_0,_0.2)] rounded-65xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-dimgray-100">
                  <div className="h-[70px] w-[188px] relative shadow-[0px_20px_32px_-8px_rgba(0,_0,_0,_0.2)] rounded-65xl bg-darkslategray hidden" />
                  <div className="relative text-xl leading-[19px] font-semibold font-poppins text-linen text-left inline-block min-w-[106px] z-[1]">
                    Track Now
                  </div>
                </button>
                <button className="cursor-pointer [border:none] pt-4 px-[19px] pb-[19px] bg-floralwhite-100 flex-1 shadow-[0px_20px_32px_-8px_rgba(0,_0,_0,_0.2)] rounded-65xl flex flex-row items-start justify-start box-border gap-[7px] min-w-[177px]">
                  <div className="h-[70px] w-[273px] relative shadow-[0px_20px_32px_-8px_rgba(0,_0,_0,_0.2)] rounded-65xl bg-floralwhite-100 hidden" />
                  <img
                    className="h-[35px] w-[52px] relative object-contain z-[1]"
                    alt=""
                    src="/imageremovebgpreview-2-1@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                    <div className="relative text-xl leading-[19px] font-semibold font-poppins text-darkslategray text-left z-[1] mq450:text-base mq450:leading-[15px]">
                      Calculate Price
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[273px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-lg text-darkslategray">
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                  loading="lazy"
                  alt=""
                  src="/emojionestar.svg"
                />
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                  alt=""
                  src="/emojionestar.svg"
                />
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                  alt=""
                  src="/emojionestar.svg"
                />
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                  alt=""
                  src="/emojionestar.svg"
                />
                <img
                  className="h-7 w-7 relative overflow-hidden shrink-0 min-h-[28px]"
                  alt=""
                  src="/emojionestar.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                <div className="flex-1 relative leading-[139.8%]">
                  <p className="[margin-block-start:0] [margin-block-end:3px] font-semibold">
                    5 star rating
                  </p>
                  <p className="m-0 font-light text-gray-100">
                    based on 1788 reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[575.9px] w-[560px] flex flex-col items-start justify-start min-w-[560px] max-w-full mq825:min-w-full mq1425:flex-1">
          <img
            className="self-stretch h-[498px] relative max-w-full overflow-hidden shrink-0 object-cover mq1425:self-stretch mq1425:w-auto"
            loading="lazy"
            alt=""
            src="/imageremovebgpreview-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

DeliveryDescription.propTypes = {
  className: PropTypes.string,
};

export default DeliveryDescription;
