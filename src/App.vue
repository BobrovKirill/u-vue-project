<template>
	<navbar></navbar>
	<div class="container">
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
	components: {
		Navbar
	}
}
</script>

<style lang="scss">
@mixin reset {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style-type: none;
  button {
    border-width: 0;
    background-color: inherit;
  }
}
*,
*::before,
*::after {
  @include reset;
  font-size: 16;
  color: black;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
}
</style>