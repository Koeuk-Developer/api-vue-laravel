<template>
  <div class="hello ">
    <!-- <h2>{{ data.name }}</h2> -->
    <!-- <h2>{{ data }}</h2> -->
    <div class="container flex flex-wrap ml-4">
      <div
        class="max-w-sm rounded text-center flex-column items-center justify-center overflow-hidden mb-5 shadow-lg"
      >
        <!-- <img class="w-full" src="../assets/cat.webp" alt="Sunset in the mountains" /> -->
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <h2>{{ data.name }}</h2>
          </div>
          <p class="text-gray-700 text-start">{{ data.age }}</p>
          <p class="text-gray-700 text-start">{{ data.province }}</p>
          <p class="text-gray-700 text-start">{{ data.score }}</p>
          <p class="text-gray-700 text-start">{{ data.phone_number }}</p>
        </div>
        <input type="text" class="p-3 background-danger"> sdf
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // data: Object,
    // data:String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
