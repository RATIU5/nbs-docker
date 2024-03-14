"use client";

import Image from "next/image";
import React from "react";
import { useEventListener } from "usehooks-ts";
import { cn } from "~/lib/utils";

type HomeSliderProps = {
  slides: React.ReactElement<HTMLElement>[];
};

export default function HomeSlider(props: HomeSliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState("auto");
  const slideRefs = React.useRef(props.slides.map(() => React.createRef()));

  const nextSlide = React.useCallback(() => {
    setCurrentSlide((current: number) => (current + 1) % props.slides.length);
  }, [setCurrentSlide, props.slides.length]);

  React.useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide, props.slides.length, nextSlide]);

  React.useEffect(() => {
    const currentSlideRef = slideRefs.current[currentSlide];
    if (currentSlideRef && currentSlideRef.current) {
      setContainerHeight(
        `${(currentSlideRef.current as HTMLElement).offsetHeight}px`
      );
    }
  }, [currentSlide, props.slides.length]);

  useEventListener("resize", () => {
    console.log("Test");
    const currentSlideRef = slideRefs.current[currentSlide];
    if (currentSlideRef && currentSlideRef.current) {
      setContainerHeight(
        `${(currentSlideRef.current as HTMLElement).offsetHeight}px`
      );
    }
  });

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div
        style={{
          height: containerHeight,
        }}
      >
        {props.slides.map((slide, index) => (
          <Slide
            className={cn("transition-opacity duration-500", {
              "opacity-100": currentSlide === index,
              "opacity-0": currentSlide !== index,
              "z-[2]": currentSlide === index,
              "z-[-1]": currentSlide !== index,
            })}
            content={slide}
            ref={slideRefs.current[index] as React.RefObject<HTMLDivElement>}
            key={index}
            hidden={currentSlide !== index}
          />
        ))}
      </div>
      <div className="">
        {props.slides.map((_, index) => (
          <button
            className={cn("p-2 rounded-full", {
              "bg-sky-400": currentSlide === index,
              "bg-neutral-300": currentSlide !== index,
            })}
            key={index}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

type SlideProps = {
  content: React.ReactElement<HTMLElement>;
  hidden: boolean;
  className?: string;
  ref: React.RefObject<HTMLDivElement>;
};

const Slide = React.forwardRef<HTMLDivElement, SlideProps>(
  (props: SlideProps, ref) => (
    <div
      ref={ref}
      className={cn(props.className, "absolute w-full", {
        hidden: props.hidden,
      })}
    >
      {props.content}
    </div>
  )
);
Slide.displayName = "Slide";

export function Slide1Content() {
  return (
    <div className="flex flex-col-reverse justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-400 my-4">
          Celebrate Sleep Week
        </h1>
        <ul className="font-bold text-neutral-500 mb-4 text-sm">
          <li>Spend $100+ and Save 10%</li>
          <li>Spend $300+ and Save 15%</li>
          <li>Spend $500+ and Save 20%</li>
        </ul>
        <p className="font-bold text-neutral-500 mb-8 text-sm">
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
      <div className="w-full aspect-square relative overflow-hidden z-0">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/1280w/carousel/45/SleepWeek-HeaderImage.jpg?c=1"
          alt="Sleep Week"
          className="object-cover z-0"
          fill
        />
      </div>
    </div>
  );
}

export function Slide2Content() {
  return (
    <div className="flex flex-col-reverse justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-400 my-4">
          Online Bedding and Mattress Store
        </h1>
        <ul className="font-bold text-neutral-500 mb-4 text-sm">
          <li>Spend $100+ and Save 10%</li>
          <li>Spend $300+ and Save 15%</li>
          <li>Spend $500+ and Save 20%</li>
        </ul>
        <p className="font-bold text-neutral-500 mb-8 text-sm">
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
      <div className="w-full aspect-square relative overflow-hidden z-0">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/1280w/carousel/45/SleepWeek-HeaderImage.jpg?c=1"
          alt="Sleep Week"
          className="object-cover z-0"
          fill
        />
      </div>
    </div>
  );
}

export function Slide3Content() {
  return (
    <div className="flex flex-col-reverse justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-400 my-4">
          Celebrate Sleep Week
        </h1>
        <ul className="font-bold text-neutral-500 mb-4 text-sm">
          <li>Spend $100+ and Save 10%</li>
          <li>Spend $300+ and Save 15%</li>
          <li>Spend $500+ and Save 20%</li>
        </ul>
        <p className="font-bold text-neutral-500 mb-8 text-sm">
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
      <div className="w-full aspect-square relative overflow-hidden z-0">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/1280w/carousel/45/SleepWeek-HeaderImage.jpg?c=1"
          alt="Sleep Week"
          className="object-cover z-0"
          fill
        />
      </div>
    </div>
  );
}

export function Slide4Content() {
  return (
    <div className="flex flex-col-reverse justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-sky-400 my-4">
          Celebrate Sleep Week
        </h1>
        <ul className="font-bold text-neutral-500 mb-4 text-sm">
          <li>Spend $100+ and Save 10%</li>
          <li>Spend $300+ and Save 15%</li>
          <li>Spend $500+ and Save 20%</li>
        </ul>
        <p className="font-bold text-neutral-500 mb-8 text-sm">
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
      <div className="w-full aspect-square relative overflow-hidden z-0">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/1280w/carousel/45/SleepWeek-HeaderImage.jpg?c=1"
          alt="Sleep Week"
          className="object-cover z-0"
          fill
        />
      </div>
    </div>
  );
}
