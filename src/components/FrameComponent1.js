import DocumentContainer from "./DocumentContainer";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[47px] pl-12 box-border max-w-full text-left text-39xl text-black font-poppins mq1425:pl-6 mq1425:pr-[23px] mq1425:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[71px] max-w-full mq825:gap-[35px] mq450:gap-[18px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <h1 className="m-0 relative text-inherit leading-[55px] font-bold font-inherit mq825:text-27xl mq825:leading-[44px] mq450:text-16xl mq450:leading-[33px]">
            We Deliver
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-22xl">
          <img
            className="h-[217px] w-[264px] absolute !m-[0] top-[-10px] left-[63px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/imageremovebgpreview-1-1@2x.png"
          />
          <div className="flex-1 shadow-[15px_15px_100px_rgba(249,_196,_196,_0.37)] rounded-26xl bg-linen flex flex-row items-start justify-start pt-2 pb-[99px] pr-[51px] pl-[60px] box-border gap-[90px] max-w-full mq825:gap-[45px] mq825:pt-5 mq825:pb-16 mq825:box-border mq450:gap-[22px] mq1425:pl-[30px] mq1425:pr-[25px] mq1425:box-border">
            <div className="h-[603px] w-[1286px] relative shadow-[15px_15px_100px_rgba(249,_196,_196,_0.37)] rounded-26xl bg-linen hidden max-w-full" />
            <div className="w-[269px] flex flex-col items-start justify-start pt-[221px] px-0 pb-0 box-border lg:hidden mq825:pt-36 mq825:box-border">
              <div className="self-stretch flex flex-col items-end justify-start gap-[46px] mq450:gap-[23px]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[35px] mq450:gap-[17px]">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[13px] pl-3.5">
                    <h2 className="m-0 flex-1 relative text-inherit leading-[30px] font-bold font-inherit z-[1] mq825:text-14xl mq825:leading-[24px] mq450:text-6xl mq450:leading-[18px]">
                      Mail
                    </h2>
                  </div>
                  <div className="self-stretch relative text-6xl leading-[94.8%] font-light text-dimgray-200 z-[1] mq450:text-xl mq450:leading-[19px]">
                    way of lamma is on sending some mail to somewhere in the
                    world
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-10 pl-[41px]">
                  <button className="cursor-pointer pt-[23px] pb-6 pr-[47px] pl-12 bg-pink flex-1 shadow-[0px_0px_0px_rgba(0,_0,_0,_0.2)] rounded-6xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-salmon hover:bg-lightpink hover:box-border hover:border-[1px] hover:border-solid hover:border-firebrick">
                    <div className="h-[70px] w-[188px] relative shadow-[0px_0px_0px_rgba(0,_0,_0,_0.2)] rounded-6xl bg-pink box-border hidden border-[1px] border-solid border-salmon" />
                    <div className="relative text-xl leading-[19px] font-semibold font-poppins text-darkslategray text-left inline-block min-w-[93px] z-[1]">
                      See More
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-[94px] box-border max-w-[calc(100%_-_359px)] lg:max-w-full mq825:pl-[47px] mq825:box-border mq450:pl-5 mq450:box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[298px] w-[457.1px] absolute !m-[0] bottom-[87px] left-[-94px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[4.1px] h-[298px] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="absolute top-[0px] left-[453px] w-[4.1px] h-[298px] object-contain z-[1]"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex-1 flex flex-row items-start justify-end max-w-full">
                  <DocumentContainer
                    image2="/image-2@2x.png"
                    document1="Document"
                  />
                </div>
              </div>
              <DocumentContainer
                image2="/image-1@2x.png"
                document1="Packages"
                propMarginTop="-495px"
                propAlignSelf="stretch"
                propWidth="unset"
                propFlex="1"
                propOverflow="hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
