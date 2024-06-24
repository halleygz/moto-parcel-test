import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-13xl text-black font-poppins ${className}`}
    >
      <div className="w-48 flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border">
        <div className="flex flex-row items-start justify-start gap-[4px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-[43px] h-[35px] relative object-cover"
              loading="lazy"
              alt=""
              src="/chefhat-2-1@2x.png"
            />
          </div>
          <div className="relative leading-[45px] font-semibold inline-block min-w-[83px] whitespace-nowrap">
            Moto
          </div>
        </div>
      </div>
      <nav className="m-0 w-[485px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border max-w-full lg:hidden mq450:w-0">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-3xl text-black font-poppins mq450:hidden">
          <div className="relative leading-[21px] inline-block min-w-[66px]">
            Home
          </div>
          <div className="relative leading-[21px] inline-block min-w-[90px]">
            Contact
          </div>
          <div className="relative leading-[21px] inline-block min-w-[101px]">
            locations
          </div>
        </nav>
      </nav>
      <div className="w-[435px] shadow-[0px_12px_40px_12px_rgba(0,_0,_0,_0.1)] rounded-11xl bg-floralwhite-200 flex flex-row items-end justify-start pt-2 pb-[7px] pr-6 pl-[33px] box-border gap-[125px] max-w-full text-3xl mq450:gap-[62px]">
        <div className="h-[60px] w-[435px] relative shadow-[0px_12px_40px_12px_rgba(0,_0,_0,_0.1)] rounded-11xl bg-floralwhite-200 hidden max-w-full" />
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
          <div className="flex flex-row items-start justify-start gap-[19px]">
            <img
              className="h-6 w-[22px] relative object-cover min-h-[24px] z-[1]"
              loading="lazy"
              alt=""
              src="/pngtreevectorlocationiconpngimage-956422removebgpreview-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative leading-[21px] whitespace-nowrap z-[1]">
                Track package
              </div>
            </div>
          </div>
        </div>
        <div className="h-[45px] w-12 relative">
          <div className="absolute top-[0px] left-[0px] box-border w-px h-[46px] z-[1] border-r-[1px] border-solid border-gray-200" />
          <img
            className="absolute top-[4px] left-[8px] w-10 h-[37px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/imageremovebgpreview-7-1@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
