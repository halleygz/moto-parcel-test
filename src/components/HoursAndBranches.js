import PropTypes from "prop-types";

const HoursAndBranches = ({ className = "" }) => {
  return (
    <section
      className={`w-[1334px] flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full text-left text-13xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] lg:flex-wrap">
          <div className="w-[269px] flex flex-col items-start justify-start gap-[40.2px] mq450:gap-[20px]">
            <div className="flex flex-row items-start justify-start shrink-0">
              <img
                className="h-[52px] w-[52px] relative object-cover"
                loading="lazy"
                alt=""
                src="/motobike@2x.png"
              />
              <div className="h-[26.3px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
                <div className="h-[-9.4px] relative leading-[139.8%] font-semibold inline-block shrink-0 min-w-[83px] z-[1] mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                  Moto
                </div>
              </div>
            </div>
            <div className="self-stretch h-[184.3px] relative text-6xl leading-[94.8%] font-light text-dimgray-200 inline-block shrink-0 mq450:text-xl mq450:leading-[19px]">
              <p className="[margin-block-start:0] [margin-block-end:22px]">
                lis ave
              </p>
              <p className="[margin-block-start:0] [margin-block-end:22px]">
                +251, 969 40 6324
              </p>
              <p className="m-0">Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="w-[269px] flex flex-col items-start justify-start gap-[34.6px] mq450:gap-[17px]">
            <div className="w-[257px] relative leading-[45px] font-semibold inline-block shrink-0 mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
              Opening Hours
            </div>
            <div className="self-stretch h-[184.3px] relative text-6xl leading-[94.8%] font-light text-dimgray-200 inline-block shrink-0 mq450:text-xl mq450:leading-[19px]">
              <p className="[margin-block-start:0] [margin-block-end:22px]">
                Mon-Fri
              </p>
              <p className="m-0">8:00am-5:30pm</p>
            </div>
          </div>
          <div className="w-[269px] flex flex-col items-start justify-start gap-[39.6px] mq450:gap-[20px]">
            <div className="w-[257px] relative leading-[45px] font-semibold inline-block shrink-0 mq825:text-7xl mq825:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
              Branches
            </div>
            <div className="self-stretch h-[184.3px] relative text-6xl leading-[94.8%] font-light text-dimgray-200 inline-block shrink-0 mq450:text-xl mq450:leading-[19px]">
              <p className="[margin-block-start:0] [margin-block-end:22px]">
                Nirobi
              </p>
              <p className="[margin-block-start:0] [margin-block-end:22px]">
                Jakarta
              </p>
              <p className="m-0">Washington</p>
            </div>
          </div>
        </div>
        <div className="w-[1213px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-8xl">
          <div className="w-[479px] relative leading-[26px] font-extralight inline-block shrink-0 max-w-full mq450:text-3xl mq450:leading-[20px]">
            ©Copyright Al rights reserved 2024
          </div>
        </div>
      </div>
    </section>
  );
};

HoursAndBranches.propTypes = {
  className: PropTypes.string,
};

export default HoursAndBranches;
