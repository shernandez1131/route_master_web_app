<script setup>
import { PowerBIReport } from 'powerbi-client-vue-js'; // Import PowerBIReport from the library
import { useAuthStore } from "@/store/auth.store";
import { onBeforeMount } from 'vue'; // Import onBeforeMount from Vue
import { models } from 'powerbi-client'; // Import Power BI models

const authStore = useAuthStore();
const { user } = authStore;

onBeforeMount(() => {
  if (Object.keys(user).length === 0) {
    // Redirect to login if the user is not authenticated
    router.push("/login");
  }
});

// Assuming you have these details, replace with your actual report details
const embedConfig = {
  type: "report",
  id: "b977c6f9-6c65-4b06-953d-45d5c1436f00",
  embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYjNiM2IxZmItMzdiNS00OGVmLTk1ZGMtNzljZDI0MGI4OTM2IiwidCI6IjBlMGNiMDYwLTA5YWQtNDlmNS1hMDA1LTY4YjliNDlhYTFmNiIsImMiOjR9",
  accessToken: "<Your_Access_Token>",
  tokenType: models.TokenType.Embed,
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: false
      }
    },
    background: models.BackgroundType.Transparent,
  }
};
</script>

<template>
  <div class="container">
    <div class="content">
      <h1 class="title">TRANSLIMA</h1>
      <iframe
        title="dummy_report"
        width="1200"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiYjNiM2IxZmItMzdiNS00OGVmLTk1ZGMtNzljZDI0MGI4OTM2IiwidCI6IjBlMGNiMDYwLTA5YWQtNDlmNS1hMDA1LTY4YjliNDlhYTFmNiIsImMiOjR9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  </div>
</template>

<style>
/* Apply styles for centering and font */
body,
html {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica', sans-serif; /* Choose appropriate font-family */
  background-color: #f0f0f0; /* Optional background color */
}

.container {
  width: 100%;
  height: 100%;
}

.content {
  text-align: center;
}

.title {
  font-size: 3rem;
  color: black;
}
</style>

