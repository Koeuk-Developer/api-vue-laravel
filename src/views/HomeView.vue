<template>
  <div class="home">
    <div class="container" style="display: flex">
      <button
        type="button"
        class="btn btn-success text-start"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        @click="resetForm"
      >
        Add Card
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">{{ editId ? "Edit Card" : "Create Card" }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="editId ? updateStudent() : createStudent()">
                <div class="mb-3">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="name..."
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    v-model="age"
                    placeholder="age..."
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    placeholder="province..."
                    v-model="province"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    placeholder="score..."
                    v-model="score"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    placeholder="Phone number..."
                    v-model="phone_number"
                    class="form-control"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="editId ? updateStudent() : createStudent()"
              >
                {{ editId ? "Update" : "Create" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-3 p-3" v-for="student in students" :key="student.id">
        <div class="card" style="width: 20rem; height:18rem">
          <!-- <img src="../assets/cat.webp" class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <p class="card-text m-2  text-start">Name: {{ student.name }}</p><hr>
            <p class="card-text m-2 text-start">Your age: {{ student.age }}</p><hr>
            <p class="card-text m-2 text-start">Province: {{ student.province }}</p><hr>
            <!-- <p class="card-text text-start">{{ student.score }}</p> -->
            <p class="card-text m-2 text-start">Phone Number: {{ student.phone_number }}</p><hr>
          </div>
          <div class="mb-3" style="display:flex">
            <button
              type="button"
              class="btn m-2 btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              @click="populateForm(student)"
            >
              Edit
            </button>
            <button
              type="button"
              @click="deleteStudent(student.id)"
              class="btn m-2 btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      name: "",
      age: "",
      province: "",
      score: "",
      phone_number: "",
      students: [],
      editId: null,
    };
  },
  methods: {
    getStudents() {
      axios
        .get("http://127.0.0.1:8000/api/student/list")
        .then((response) => {
          this.students = response.data.data;
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    },
    createStudent() {
      axios
        .post("http://127.0.0.1:8000/api/student/create", {
          name: this.name,
          age: this.age,
          province: this.province,
          score: this.score,
          phone_number: this.phone_number,
        })
        .then((response) => {
          this.getStudents();
          this.resetForm();
          console.log("Student created:", response.data);
        })
        .catch((error) => {
          console.error("Error creating student:", error);
        });
    },
    deleteStudent(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/student/delete/${id}`)
        .then((response) => {
          this.students = this.students.filter((student) => student.id !== id);
          console.log("Student deleted:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
        });
    },
    populateForm(student) {
      this.name = student.name;
      this.age = student.age;
      this.province = student.province;
      this.score = student.score;
      this.phone_number = student.phone_number;
      this.editId = student.id;
    },
    updateStudent() {
      axios
        .put(`http://127.0.0.1:8000/api/student/update/${this.editId}`, {
          name: this.name,
          age: this.age,
          province: this.province,
          score: this.score,
          phone_number: this.phone_number,
        })
        .then((response) => {
          const index = this.students.findIndex((student) => student.id === this.editId);
          if (index !== -1) {
            this.$set(this.students, index, response.data);
          }
          this.resetForm();
          console.log("Student updated:", response.data);
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    },
    resetForm() {
      this.name = "";
      this.age = "";
      this.province = "";
      this.score = "";
      this.phone_number = "";
      this.editId = null;
    },
  },
  mounted() {
    this.getStudents();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
