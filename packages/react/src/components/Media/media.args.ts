import { MediaProps } from "./Media.props";

const imageonly: MediaProps = {
  alt: "My alt text",
  className: "image",
  caption: "my image caption",
  credit: "Photo: copyright 2022 Person S. Name",
  url: [
    {
      breakpoint: 0,
      src: "https://place-hold.it/400x300?text=SmallBreakpointImage",
    },
    {
      breakpoint: 800,
      src: "https://place-hold.it/800x600?text=MediumBreakpointImage",
    },
    {
      breakpoint: 1200,
      src: "https://place-hold.it/1200x900?text=LargeBreakpointImage",
    },
    {
      breakpoint: 1440,
      src: "https://place-hold.it/1600x1200?text=LargestBreakpointImage",
    },
  ],
  video: {
    controls: false,
    hasvideo: false,
    src: null,
    tracks: null,
    youtube: null,
  },
};

const videofile: MediaProps = {
  alt: "My alt text",
  className: "image",
  caption: "my image caption",
  credit: "Photo: copyright 2022 Person S. Name",
  url: [
    {
      breakpoint: 0,
      src: "https://place-hold.it/400x300?text=SmallBreakpointImage",
    },
    {
      breakpoint: 800,
      src: "https://place-hold.it/800x600?text=MediumBreakpointImage",
    },
    {
      breakpoint: 1200,
      src: "https://place-hold.it/1200x900?text=LargeBreakpointImage",
    },
    {
      breakpoint: 1440,
      src: "https://place-hold.it/1600x1200?text=LargestBreakpointImage",
    },
  ],
  video: {
    controls: {
      fullscreen: "Fullscreen",
      play: "Play",
      pause: "Pause",
      volume: "Volume",
    },
    hasvideo: true,
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    tracks: null,
    youtube: null,
  },
};

/**
 * Sample prop definitions for Media's enumerable properties (imported in stories and tests).
 */
const mediaArgs = {
  imageonly,
  videofile,
};

export default mediaArgs;
