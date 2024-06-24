import Content from "../components/Content";
import DeliveryDescription from "../components/DeliveryDescription";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import HoursAndBranches from "../components/HoursAndBranches";

const LandingPage = () => {
  return (
    <div className="w-full relative rounded-3xl [background:linear-gradient(-55.42deg,_#f4ece1,_#fcfbf7)] overflow-hidden flex flex-col items-end justify-start pt-[39px] px-[65px] pb-[52px] box-border gap-[87px] leading-[normal] tracking-[normal] mq825:gap-[43px] mq825:pl-8 mq825:pr-8 mq825:box-border mq450:gap-[22px]">
      <div className="w-16 h-16 relative hidden" />
      <section className="w-[1370px] flex flex-col items-start justify-start gap-[48px] max-w-full mq825:gap-[24px]">
        <Content />
        <DeliveryDescription />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <HoursAndBranches />
    </div>
  );
};

export default LandingPage;
