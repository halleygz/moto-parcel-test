import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`w-[1357px] flex flex-row items-start justify-end pt-0 px-[37px] pb-[43px] box-border max-w-full text-left text-39xl text-black font-poppins ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[89px] max-w-full mq825:gap-[44px] mq450:gap-[22px]">
        <div className="w-[1259px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit mq825:text-27xl mq825:leading-[44px] mq450:text-16xl mq450:leading-[33px]">
            Partners
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[77px] max-w-full mq825:gap-[38px] mq450:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-center gap-[56.7px] max-w-full mq825:gap-[28px] mq1425:flex-wrap">
              <img
                className="self-stretch w-[227px] relative max-h-full object-cover min-h-[71px]"
                loading="lazy"
                alt=""
                src="/imageremovebgpreview-3-1@2x.png"
              />
              <div className="h-[68px] w-[368px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border max-w-full">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/imageremovebgpreview-4-1@2x.png"
                />
              </div>
              <div className="w-[326px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
                <img
                  className="self-stretch h-12 relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/walmartlogo-1@2x.png"
                />
              </div>
              <div className="h-[68px] w-[169px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/imageremovebgpreview-6-1-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[1236px] h-px relative shadow-[-1px_4px_25px_1px_rgba(255,_51,_52,_0.72)] bg-tomato max-w-full" />
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
