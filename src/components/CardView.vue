<template>
  <div class="container">
    <div class="mb-4">
      <!-- Button trigger modal -->
     
      <div class="card" style="width: 18rem">
        <!-- <img src="../assets/cat.webp" class="card-img-top" alt="..." /> -->
        <div class="card-body">
          <p class="card-text text-start">{{ data.name }}</p>
          <p class="card-text text-start">{{ data.age }}</p>
          <p class="card-text text-start">{{ data.province }}</p>
          <p class="card-text text-start">{{ data.score }}</p>
          <p class="card-text text-start">{{ data.phone_number }}</p>
        </div>
        <div class="mb-3">
          <button type="button" class="btn m-2 btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Edit
          </button>
          <button type="button" @click="deleteStudent(student)" class="btn m-2 btn-danger" >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     props: {
          data:Object
     }
};
</script>

<style></style>
