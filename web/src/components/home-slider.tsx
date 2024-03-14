import Image from "next/image";
import { cn } from "~/lib/utils";

export default function HomeSlider() {
  return <Slide content={<Slide1Content />} />;
}

type SlideProps = {
  content: React.ReactElement<HTMLElement>;
  className?: string;
};

function Slide(props: SlideProps) {
  return <div className={cn(props.className)}>{props.content}</div>;
}

function Slide1Content() {
  return (
    <div className="flex flex-col-reverse justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-400 my-4">
          Celebrate Sleep Week
        </h1>
        <ul className="font-bold text-neutral-500 mb-4">
          <li>Spend $100+ and Save 10%</li>
          <li>Spend $300+ and Save 15%</li>
          <li>Spend $500+ and Save 20%</li>
        </ul>
        <p className="font-bold text-neutral-500 mb-8">
          + Up to 30% off selected best-sellers.
          <br />
          Prices as Marked
        </p>
        <a
          href="/mattresses"
          className="bg-[#0062A6] text-white font-bold px-10 py-4"
        >
          Shop Mattresses
        </a>
      </div>
      <div className="w-full aspect-video relative overflow-hidden">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/1280w/carousel/45/SleepWeek-HeaderImage.jpg?c=1"
          alt="Sleep Week"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}
