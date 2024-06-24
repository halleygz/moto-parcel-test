import { useMemo } from "react";
import PropTypes from "prop-types";

const DocumentContainer = ({
  className = "",
  image2,
  document1,
  propMarginTop,
  propAlignSelf,
  propWidth,
  propFlex,
  propOverflow,
}) => {
  const documentContainerStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const image2IconStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      overflow: propOverflow,
    };
  }, [propWidth, propFlex, propOverflow]);

  return (
    <div
      className={`w-[269px] flex flex-col items-start justify-start gap-[39px] text-center text-22xl text-black font-poppins mq450:gap-[19px] ${className}`}
      style={documentContainerStyle}
    >
      <div
        className="flex flex-row items-start justify-start py-0 pr-11 pl-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border"
        style={frameDivStyle}
      >
        <img
          className="h-[182px] w-[182px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src={image2}
          style={image2IconStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
          <h2 className="m-0 flex-1 relative text-inherit leading-[39px] font-bold font-inherit z-[1] mq825:text-14xl mq825:leading-[31px] mq450:text-6xl mq450:leading-[23px]">
            {document1}
          </h2>
        </div>
        <div className="self-stretch relative text-6xl leading-[94.8%] font-light text-dimgray-200 z-[1] mq450:text-xl mq450:leading-[19px]">
          way of lamma is on sending some mail to somewhere in the world
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[41px] pl-10">
        <button className="cursor-pointer pt-[23px] pb-6 pr-[47px] pl-12 bg-pink shadow-[0px_0px_0px_rgba(0,_0,_0,_0.2)] rounded-6xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-salmon hover:bg-lightpink hover:box-border hover:border-[1px] hover:border-solid hover:border-firebrick">
          <div className="h-[70px] w-[188px] relative shadow-[0px_0px_0px_rgba(0,_0,_0,_0.2)] rounded-6xl bg-pink box-border hidden border-[1px] border-solid border-salmon" />
          <div className="relative text-xl leading-[19px] font-semibold font-poppins text-darkslategray text-left inline-block min-w-[93px] z-[1]">
            See More
          </div>
        </button>
      </div>
    </div>
  );
};

DocumentContainer.propTypes = {
  className: PropTypes.string,
  image2: PropTypes.string,
  document1: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propOverflow: PropTypes.any,
};

export default DocumentContainer;
