// import LayoutBanner from "./banner/LayoutBanner.container";
// import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      {/* <LayoutBanner /> */}
      <div>{props.children}</div>
      {/* <LayoutFooter /> */}
    </>
  );
}
