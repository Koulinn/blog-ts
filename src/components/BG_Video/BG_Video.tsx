import ASSETS_LINKS from "../../assets/links";

function BG_Video() {
  return (
    <div id="bg_video_wrapper">
      <video autoPlay muted loop id="bg_video">
        <source src={ASSETS_LINKS.BG_PARTICLES} type="video/mp4" />
      </video>
    </div>
  );
}

export default BG_Video;
