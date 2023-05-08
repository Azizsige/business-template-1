<template>
  <div>
    <Navbar />
    <Jumbotron
      title="Marriage and Relationship Coaching"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat."
      image="/img/jumbo-index.png"
      alt="Random image from
    Picsum"
      buttonText="Book Now"
      :precentange="false"
    />
    <SectionTwo />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Jumbotron from "../components/Jumbotron.vue";
import SectionTwo from "../components/SectionTwo.vue";
</script>

<style lang="scss" scoped></style>
