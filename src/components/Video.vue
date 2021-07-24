<template>
  <div class="reprodutor">
    <span>Coloque aqui URL do video desejado:</span>
    <input
      size="50"
      placeholder="Digite uma URL do video do Youtube"
      v-model.trim="message"
    />
    <br />
    <div class="video" v-show="message">
      <youtube :video-id="url" />
    </div>
    <br />

    <button class="button" v-on:click="salvar">Salvar</button>
    <p>Ultimo Video Salvo: {{ lista }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return { message: '', lista: '' };
  },
  computed: {
    url() {
      return this.message.substring(32);
    },
  },
  created() {
    this.lista = JSON.parse(localStorage.getItem("save") || "[]");
  },
  methods: {
    salvar() {
      this.lista = this.message;
      localStorage.setItem("save", JSON.stringify(this.lista));
    },
  },
};
</script>

<style>
.reprodutor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>