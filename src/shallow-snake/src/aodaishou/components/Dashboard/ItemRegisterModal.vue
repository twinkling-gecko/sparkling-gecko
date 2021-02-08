<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>New Item</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit New Item"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <ItemForm :on-submit="handleSubmit" :form="form" :on-reset="onReset" />
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameState: null,
      form: {
        name: '',
        image_url: '',
      },
    }
  },
  methods: {
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Hide the modal manually
      this.$axios
        .post('/api/v1/items/new', this.form)
        .then(() => this.$router.push('/items'))
        .catch(() => {})

      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    onReset() {
      this.form.name = ''
      this.form.image_url = ''
    },
  },
}
</script>
