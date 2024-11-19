<script></script>

<template>
  <div class="video-container">
    <video
      src="../assets/video/background-video-2.mp4"
      autoplay
      loop
      muted
      type="video/mp4"
      poster="../assets/video/snapshot.PNG"
    ></video>
  </div>
</template>

<style scoped lang="css">
.video-container {
  width: 100%;
  position: relative;
  /* background-color: #0d0907; */
}

video {
  z-index: -1;
  left: 0;
  top: 100;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  video {
    display: none;
  }
}
</style>
