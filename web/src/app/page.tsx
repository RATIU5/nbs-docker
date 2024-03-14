import HomeSlider, {
  Slide1Content,
  Slide2Content,
  Slide3Content,
  Slide4Content,
} from "~/components/home-slider";

export default function Home() {
  return (
    <main>
      <HomeSlider
        slides={[
          <Slide1Content key="slide1" />,
          <Slide2Content key="slide2" />,
          <Slide3Content key="slide3" />,
          <Slide4Content key="slide4" />,
        ]}
      />
    </main>
  );
}
