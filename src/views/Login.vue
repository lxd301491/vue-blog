<template>
  <div>
    <cube-form
      :model="model"
      @validate="validateHandler"
      @submit="submitHandler"
      @reset="resetHandler">
      <cube-form-group>
        <cube-form-item :field="userName"></cube-form-item>
        <cube-form-item :field="psw"></cube-form-item>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">Submit</cube-button>
      </cube-form-group>
    </cube-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      psw: '',
      loginning: false
    };
  },
  methods: {
    validateHandler () {

    },
    submitHandler () {

    },
    resetHandler () {

    }
  }

};
</script>

<style lang='stylus' scoped>
.login {
  margin: 0;
  width: 100%;
}
.register {
  margin: 0;
  width: 100%;
}

</style>
